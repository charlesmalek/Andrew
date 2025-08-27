#!/bin/bash

echo "☢️  NUCLEAR DEPLOYMENT - Complete reset and redeploy"
echo "This will force a completely fresh Vercel deployment"
echo "================================================="

# Clean everything
echo "🧹 Deep cleaning..."
rm -rf dist/
rm -rf node_modules/
rm -rf .vercel/
rm -rf node_modules/.cache/

# Fresh install
echo "📦 Fresh npm install..."
npm install

# Build with verbose output
echo "🔧 Building with verbose output..."
npm run build -- --logLevel info

# Verify build contents
echo "📁 Verifying build contents..."
ls -la dist/
echo ""
echo "Index.html content:"
head -20 dist/index.html

# Create deployment trigger file
echo "🔥 Creating deployment trigger..."
timestamp=$(date +%s)
echo "Nuclear deployment at: $(date) - $timestamp" > dist/nuclear-deploy-$timestamp.txt

# Git operations
echo "📝 Committing nuclear deployment..."
git add .
git commit -m "Nuclear deployment - complete reset - $timestamp" || echo "No changes to commit"

# Force push (be careful with this)
echo "🚀 Force pushing to trigger fresh deployment..."
git push origin main --force-with-lease

echo "⏳ Waiting for deployment to complete..."
sleep 45

echo "🧪 Testing nuclear deployment..."
curl -s -I https://andrew-beta.vercel.app/ | head -5

echo ""
echo "☢️  Nuclear deployment complete!"
echo "🌐 Check: https://andrew-beta.vercel.app/"
echo "📊 Vercel dashboard: https://vercel.com/dashboard"
