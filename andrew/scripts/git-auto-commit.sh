#!/bin/bash

# Auto git commit and push script
# Usage: ./git-auto-commit.sh [commit_message]

# Set default commit message if none provided
COMMIT_MESSAGE=${1:-"Auto commit: $(date '+%Y-%m-%d %H:%M:%S')"}

echo "🔄 Starting auto commit and push..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if there are any changes to commit (including untracked files)
if git diff-index --quiet HEAD -- && [ -z "$(git ls-files --others --exclude-standard)" ]; then
    echo "✅ No changes to commit"
    exit 0
fi

# Add all changes
echo "📁 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes with message: '$COMMIT_MESSAGE'"
git commit -m "$COMMIT_MESSAGE"

# Push changes
echo "🚀 Pushing to remote repository..."
if git push; then
    echo "✅ Successfully committed and pushed changes!"
    
    # Verify Vercel deployment
    echo "🔍 Verifying Vercel deployment..."
    sleep 10
    
    # Get the production URL
    PRODUCTION_URL=$(vercel project ls 2>/dev/null | grep "andrew" | head -1 | awk '{print $3}' || echo "")
    
    if [ -n "$PRODUCTION_URL" ]; then
        echo "🌐 Checking deployment status..."
        HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL" 2>/dev/null || echo "000")
        
        if [ "$HTTP_STATUS" = "200" ]; then
            echo "✅ Vercel deployment verified! Site is accessible at: $PRODUCTION_URL"
        else
            echo "⚠️  Vercel deployment may have issues. HTTP Status: $HTTP_STATUS"
            echo "🔄 Attempting to force redeploy..."
            vercel --prod --force --yes >/dev/null 2>&1
            echo "✅ Force redeploy initiated. Check $PRODUCTION_URL in a few minutes."
        fi
    else
        echo "ℹ️  Vercel project not found or not linked."
    fi
else
    echo "❌ Failed to push changes. You may need to set up a remote repository first."
    echo "💡 To set up a remote repository, use:"
    echo "   git remote add origin <your-repository-url>"
    echo "   git branch -M main"
    echo "   git push -u origin main"
fi
