#!/bin/bash

# Safe Vercel Deployment Script
# Prevents 404 errors and ensures successful deployments

echo "🛡️  Starting safe Vercel deployment..."

# Step 1: Build and verify
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Step 2: Deploy with verification
echo "🚀 Deploying to Vercel..."
vercel --prod --yes

# Step 3: Wait for deployment
echo "⏳ Waiting for deployment to complete..."
sleep 20

# Step 4: Get production URL and verify
echo "🔍 Verifying deployment..."
PRODUCTION_URL=$(vercel project ls | grep "andrew" | head -1 | awk '{print $3}')

if [ -n "$PRODUCTION_URL" ]; then
    echo "🌍 Checking: $PRODUCTION_URL"
    
    # Test the site
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL")
    
    if [ "$HTTP_STATUS" = "200" ]; then
        echo "✅ Deployment successful! Site is accessible."
        echo "🌐 Your site: $PRODUCTION_URL"
    else
        echo "⚠️  Site returned status: $HTTP_STATUS"
        echo "🔄 Attempting to force redeploy..."
        vercel --prod --force --yes
        echo "⏳ Waiting for redeployment..."
        sleep 30
        
        # Check again
        HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL")
        if [ "$HTTP_STATUS" = "200" ]; then
            echo "✅ Redeployment successful!"
        else
            echo "❌ Redeployment failed. Check Vercel dashboard."
            exit 1
        fi
    fi
else
    echo "❌ Could not find production URL."
    exit 1
fi

echo "🎉 Safe deployment completed!"
