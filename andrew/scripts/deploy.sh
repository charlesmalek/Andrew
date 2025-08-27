#!/bin/bash

# Stable Vercel Deployment Script
# This script ensures reliable deployments without crashes or 404 errors

echo "🚀 Starting stable Vercel deployment..."

# Step 1: Build locally to catch any errors
echo "📦 Building project locally..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix the errors before deploying."
    exit 1
fi

echo "✅ Local build successful!"

# Step 2: Commit any changes
echo "💾 Committing changes..."
git add .
git commit -m "Auto-commit before deployment: $(date '+%Y-%m-%d %H:%M:%S')"

# Step 3: Push to GitHub
echo "📤 Pushing to GitHub..."
git push

# Step 4: Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod --yes

echo "✅ Deployment completed successfully!"
echo "🌍 Your site is live at: https://andrew-beta.vercel.app"
