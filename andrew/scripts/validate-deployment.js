#!/usr/bin/env node

/**
 * Andrew Distribution - Pre-deployment Validation
 * Validates that all navigation routes have corresponding components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Validating deployment configuration...\n');

// Read App.tsx to extract routes
const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
const appContent = fs.readFileSync(appPath, 'utf8');

// Extract route definitions
const routeMatches = appContent.match(/<Route path="([^"]+)"/g) || [];
const definedRoutes = routeMatches
    .map(match => match.match(/path="([^"]+)"/)[1])
    .filter(route => route !== '*'); // Exclude catch-all route

console.log('📍 Defined routes in App.tsx:');
definedRoutes.forEach(route => console.log(`   ${route}`));
console.log();

// Read Header.tsx to extract navigation links
const headerPath = path.join(__dirname, '..', 'src', 'components', 'Header.tsx');
const headerContent = fs.readFileSync(headerPath, 'utf8');

// Extract navigation links
const linkMatches = headerContent.match(/to="([^"]+)"/g) || [];
const navigationLinks = [...new Set(linkMatches
    .map(match => match.match(/to="([^"]+)"/)[1])
    .filter(link => link.startsWith('/'))
)];

console.log('🔗 Navigation links in Header.tsx:');
navigationLinks.forEach(link => console.log(`   ${link}`));
console.log();

// Check for missing routes
const missingRoutes = navigationLinks.filter(link => !definedRoutes.includes(link));
const unusedRoutes = definedRoutes.filter(route => route !== '/' && !navigationLinks.includes(route));

// Validation results
let hasErrors = false;

if (missingRoutes.length > 0) {
    console.log('❌ MISSING ROUTES - These navigation links have no route definition:');
    missingRoutes.forEach(route => console.log(`   ${route}`));
    console.log();
    hasErrors = true;
}

if (unusedRoutes.length > 0) {
    console.log('⚠️  UNUSED ROUTES - These routes are defined but not in navigation:');
    unusedRoutes.forEach(route => console.log(`   ${route}`));
    console.log();
}

// Check if all route components exist
console.log('📁 Checking route components...');
const importMatches = appContent.match(/import (\w+) from "\.\/pages\/(\w+)"/g) || [];
const componentFiles = importMatches.map(match => {
    const [, componentName, fileName] = match.match(/import (\w+) from "\.\/pages\/(\w+)"/);
    return { componentName, fileName, path: path.join(__dirname, '..', 'src', 'pages', `${fileName}.tsx`) };
});

componentFiles.forEach(component => {
    const exists = fs.existsSync(component.path);
    const status = exists ? '✅' : '❌';
    console.log(`   ${status} ${component.componentName} (${component.fileName}.tsx)`);
    if (!exists) hasErrors = true;
});

console.log();

// Final validation result
if (hasErrors) {
    console.log('❌ VALIDATION FAILED - Please fix the issues above before deploying.');
    process.exit(1);
} else {
    console.log('✅ VALIDATION PASSED - All routes are properly configured!');
    console.log('🚀 Safe to deploy.\n');
    process.exit(0);
}
