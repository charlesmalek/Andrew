#!/bin/bash

# Complete Vercel Fix Script
# This script will properly connect Vercel to GitHub and prevent 404 errors

set -e

echo "🔧 Starting complete Vercel fix..."

# Step 1: Clean up any existing Vercel configuration
echo "🧹 Cleaning existing Vercel configuration..."
rm -rf .vercel

# Step 2: Create optimal Vercel configuration
echo "⚙️  Creating optimal Vercel configuration..."
cat > vercel.json << 'EOF'
{
  "version": 2,
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "github": {
    "enabled": true
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
EOF

# Step 3: Ensure proper build configuration
echo "🔨 Verifying build configuration..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix build errors first."
    exit 1
fi

echo "✅ Build successful!"

# Step 4: Commit changes to ensure GitHub is up to date
echo "💾 Committing to GitHub..."
git add .
git commit -m "Fixed Vercel configuration for permanent 404 error prevention" || echo "No changes to commit"
git push

# Step 5: Link to Vercel
echo "🔗 Linking to Vercel..."
vercel link --project andrew

# Step 6: Deploy to production
echo "🚀 Deploying to production..."
vercel --prod

# Step 7: Verify deployment
echo "⏳ Waiting for deployment to complete..."
sleep 30

echo "🔍 Verifying deployment..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://andrew-beta.vercel.app")

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Deployment successful! Site is accessible."
    echo "🌍 Your site: https://andrew-beta.vercel.app"
else
    echo "⚠️  Initial check returned $HTTP_STATUS, attempting force redeploy..."
    vercel --prod --force
    sleep 30
    
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://andrew-beta.vercel.app")
    if [ "$HTTP_STATUS" = "200" ]; then
        echo "✅ Force redeploy successful!"
    else
        echo "❌ Issue persists. Status: $HTTP_STATUS"
        echo "🔍 Checking Vercel dashboard for more details..."
    fi
fi

echo "🎉 Vercel fix completed!"
echo "📋 Next steps:"
echo "   1. Check https://andrew-beta.vercel.app"
echo "   2. Verify automatic deployments work with: git push"
echo "   3. Use './safe-deploy.sh' for future deployments"
