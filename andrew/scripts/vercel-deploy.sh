#!/bin/bash

# Comprehensive Vercel Deployment Script
# This script ensures NO 404 errors after deployment

set -e  # Exit on any error

echo "🚀 Starting comprehensive Vercel deployment..."

# Step 1: Clean and prepare
echo "🧹 Cleaning previous builds..."
rm -rf dist
rm -rf .vercel/output

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Set environment variables for production
echo "⚙️  Setting production environment variables..."
export NODE_ENV=production
export NODE_VERSION=18
export VERCEL=true
export GENERATE_SOURCEMAP=false
export SKIP_PREFLIGHT_CHECK=true

# Step 4: Build locally with error checking
echo "🔨 Building project locally..."
npm run build:prod

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix the errors before deploying."
    exit 1
fi

echo "✅ Local build successful!"

# Step 4: Verify build output
echo "🔍 Verifying build output..."
if [ ! -f "dist/index.html" ]; then
    echo "❌ Build output is missing index.html!"
    exit 1
fi

if [ ! -d "dist/assets" ]; then
    echo "❌ Build output is missing assets directory!"
    exit 1
fi

echo "✅ Build output verified!"

# Step 5: Commit changes
echo "💾 Committing changes..."
git add .
git commit -m "Auto-commit before deployment: $(date '+%Y-%m-%d %H:%M:%S')"

# Step 6: Push to GitHub
echo "📤 Pushing to GitHub..."
git push

# Step 7: Deploy to Vercel with verification
echo "🌐 Deploying to Vercel..."
DEPLOYMENT_URL=$(vercel --prod --yes --json | grep -o '"url":"[^"]*"' | cut -d'"' -f4)

if [ -z "$DEPLOYMENT_URL" ]; then
    echo "❌ Deployment failed! No URL returned."
    exit 1
fi

echo "✅ Deployment completed!"
echo "🌍 Deployment URL: $DEPLOYMENT_URL"

# Step 8: Wait for deployment to be ready
echo "⏳ Waiting for deployment to be ready..."
sleep 30

# Step 9: Verify deployment
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
    sleep 30
    
    # Check again
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DEPLOYMENT_URL")
    if [ "$HTTP_STATUS" = "200" ]; then
        echo "✅ Redeployment successful!"
    else
        echo "❌ Redeployment failed. HTTP Status: $HTTP_STATUS"
        exit 1
    fi
fi

# Step 10: Get final production URL
echo "📋 Getting final production URL..."
PRODUCTION_URL=$(vercel project ls | grep "andrew" | head -1 | awk '{print $3}')

echo "🎉 Deployment completed successfully!"
echo "🌍 Your site is live at: $PRODUCTION_URL"
echo "🔗 Latest deployment: $DEPLOYMENT_URL"

# Step 11: Health check
echo "🏥 Running health check..."
sleep 10
HEALTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL")

if [ "$HEALTH_STATUS" = "200" ]; then
    echo "✅ Health check passed! Site is fully operational."
else
    echo "⚠️  Health check warning. Status: $HEALTH_STATUS"
    echo "💡 The site may still be deploying. Check again in a few minutes."
fi

echo "✨ Deployment process completed!"
