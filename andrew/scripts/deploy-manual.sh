#!/bin/bash

echo "🚀 Manual deployment to resolve 404 issues..."

# Clean and build
echo "🔧 Building project..."
npm run build

# Check if build was successful
if [ ! -f "dist/index.html" ]; then
    echo "❌ Build failed - index.html not found"
    exit 1
fi

echo "✅ Build successful"

# Try different deployment approaches
echo "📤 Attempting multiple deployment methods..."

# Method 1: Simple Vercel deploy without project linking
echo "Method 1: Simple Vercel deployment..."
cd dist
npx vercel --prod --yes --public || echo "Method 1 failed"
cd ..

# Method 2: Deploy as new project
echo "Method 2: Deploy as completely new project..."
rm -rf .vercel
npx vercel --prod --yes --public || echo "Method 2 failed"

# Method 3: Use surge.sh as alternative
echo "Method 3: Deploy to surge.sh as backup..."
npm install -g surge
cd dist
echo "andrew-distribution.surge.sh" | surge . andrew-distribution.surge.sh || echo "Surge deployment failed"
cd ..

echo "🎯 Deployment attempts completed!"
echo "Check these URLs:"
echo "- Vercel: Check output above for URLs"
echo "- Surge: http://andrew-distribution.surge.sh"
