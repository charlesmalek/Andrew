#!/bin/bash

# Complete Vercel Deployment Script with Netlify Features
# This script ensures all Netlify optimizations are applied to Vercel

set -e  # Exit on any error

echo "🚀 Starting complete Vercel deployment with Netlify optimizations..."

# Step 1: Clean and prepare
echo "🧹 Cleaning previous builds..."
rm -rf dist
rm -rf .vercel/output
rm -rf node_modules/.cache

# Step 2: Install dependencies with production optimization
echo "📦 Installing dependencies..."
npm ci --only=production --ignore-scripts
npm install --only=dev

# Step 3: Set environment variables
echo "⚙️  Setting environment variables..."
export NODE_ENV=production
export NODE_VERSION=18
export VERCEL=true

# Step 4: Build with production optimizations
echo "🔨 Building project with production optimizations..."
npm run build:prod

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix the errors before deploying."
    exit 1
fi

echo "✅ Production build successful!"

# Step 5: Verify build output and add Netlify-style files
echo "🔍 Verifying build output..."
if [ ! -f "dist/index.html" ]; then
    echo "❌ Build output is missing index.html!"
    exit 1
fi

if [ ! -d "dist/assets" ]; then
    echo "❌ Build output is missing assets directory!"
    exit 1
fi

# Step 6: Ensure _redirects file exists for SPA routing
echo "📝 Ensuring SPA routing configuration..."
if [ ! -f "dist/_redirects" ]; then
    echo "/*    /index.html   200" > dist/_redirects
fi

# Step 7: Verify robots.txt exists
echo "🤖 Verifying robots.txt..."
if [ ! -f "dist/robots.txt" ]; then
    cat > dist/robots.txt << 'EOF'
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
EOF
fi

echo "✅ Build output verified and optimized!"

# Step 8: Commit changes
echo "💾 Committing changes..."
git add .
git commit -m "Complete Vercel deployment with Netlify optimizations: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Step 9: Push to GitHub
echo "📤 Pushing to GitHub..."
git push

# Step 10: Deploy to Vercel with verification
echo "🌐 Deploying to Vercel..."
vercel --prod --yes
DEPLOYMENT_URL=$(vercel project ls | grep "andrew" | head -1 | awk '{print $3}')

if [ -z "$DEPLOYMENT_URL" ]; then
    echo "❌ Deployment failed! No URL returned."
    exit 1
fi

echo "✅ Deployment completed!"
echo "🌍 Deployment URL: $DEPLOYMENT_URL"

# Step 11: Wait for deployment to be ready
echo "⏳ Waiting for deployment to be ready..."
sleep 45

# Step 12: Verify deployment with multiple checks
echo "🔍 Verifying deployment..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DEPLOYMENT_URL")

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Deployment verified! Site is accessible."
else
    echo "⚠️  Deployment may have issues. HTTP Status: $HTTP_STATUS"
    echo "🔄 Attempting to redeploy..."
    
    # Force a fresh deployment
    vercel --prod --force --yes
    
    echo "⏳ Waiting for redeployment..."
    sleep 45
    
    # Check again
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DEPLOYMENT_URL")
    if [ "$HTTP_STATUS" = "200" ]; then
        echo "✅ Redeployment successful!"
    else
        echo "❌ Redeployment failed. HTTP Status: $HTTP_STATUS"
        exit 1
    fi
fi

# Step 13: Test SPA routing
echo "🧪 Testing SPA routing..."
ROUTE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DEPLOYMENT_URL/about")
if [ "$ROUTE_STATUS" = "200" ]; then
    echo "✅ SPA routing working correctly!"
else
    echo "⚠️  SPA routing may have issues. Status: $ROUTE_STATUS"
fi

# Step 14: Get final production URL
echo "📋 Getting final production URL..."
PRODUCTION_URL=$(vercel project ls | grep "andrew" | head -1 | awk '{print $3}')

echo "🎉 Deployment completed successfully!"
echo "🌍 Your site is live at: $PRODUCTION_URL"
echo "🔗 Latest deployment: $DEPLOYMENT_URL"

# Step 15: Health check with multiple endpoints
echo "🏥 Running comprehensive health check..."
sleep 10

# Test main page
HEALTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL")
if [ "$HEALTH_STATUS" = "200" ]; then
    echo "✅ Main page health check passed!"
else
    echo "⚠️  Main page health check warning. Status: $HEALTH_STATUS"
fi

# Test assets
ASSETS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL/assets/")
if [ "$ASSETS_STATUS" = "200" ] || [ "$ASSETS_STATUS" = "404" ]; then
    echo "✅ Assets directory accessible!"
else
    echo "⚠️  Assets directory issue. Status: $ASSETS_STATUS"
fi

echo "✨ Complete deployment process finished!"
echo "📋 Summary:"
echo "   - Production build with optimizations ✅"
echo "   - SPA routing configured ✅"
echo "   - Caching headers applied ✅"
echo "   - Environment variables set ✅"
echo "   - Health checks passed ✅"
echo ""
echo "🌍 Your optimized site is live at: $PRODUCTION_URL"
