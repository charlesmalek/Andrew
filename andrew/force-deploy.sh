#!/bin/bash

echo "🚀 Force deploying Andrew Distribution website..."

# Clean and rebuild
echo "📦 Cleaning previous build..."
rm -rf dist/
rm -rf node_modules/.cache/

echo "🔧 Building fresh..."
npm run build

# Create a deployment marker with timestamp
echo "⏰ Creating deployment marker..."
echo "Deployed at: $(date)" > dist/deploy-timestamp.txt

# Add and commit all changes
echo "📝 Committing deployment..."
git add .
git commit -m "Force deployment - $(date)" || echo "No changes to commit"

# Push to trigger Vercel deployment
echo "🌐 Pushing to trigger deployment..."
git push origin main

echo "✅ Deployment triggered! Check Vercel dashboard for status."
echo "🔍 Site should be updated at: https://andrew-beta.vercel.app"

# Wait a moment and test the deployment
echo "⏳ Waiting 30 seconds for deployment to complete..."
sleep 30

echo "🧪 Testing deployment..."
curl -s -o /dev/null -w "%{http_code}" https://andrew-beta.vercel.app/ | grep -q "200" && echo "✅ Site is responding with 200" || echo "❌ Site may still be deploying"

echo "🎉 Force deployment complete!"
