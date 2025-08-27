#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "🔧 Building project..."
npm run build

if [ ! -f "dist/index.html" ]; then
    echo "❌ Build failed - index.html not found"
    exit 1
fi

echo "✅ Build successful"

# Create gh-pages branch and deploy
echo "📤 Deploying to GitHub Pages..."

# Remove any existing gh-pages folder
rm -rf gh-pages

# Clone the repository into gh-pages folder
git clone https://github.com/charlesmalek/Andrew.git gh-pages
cd gh-pages

# Switch to gh-pages branch (create if it doesn't exist)
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# Clear existing content
rm -rf *
rm -rf .*  2>/dev/null || true

# Copy build files
cp -r ../dist/* .

# Add CNAME for custom domain (if needed)
# echo "andrewdistribution.com" > CNAME

# Create .nojekyll to bypass Jekyll processing
touch .nojekyll

# Commit and push
git add .
git commit -m "Deploy website - $(date)"
git push origin gh-pages

cd ..
rm -rf gh-pages

echo "✅ Deployment to GitHub Pages complete!"
echo "🌐 Your site should be available at: https://charlesmalek.github.io/Andrew/"
echo "⏳ It may take a few minutes for changes to appear."
