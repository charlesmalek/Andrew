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

# Check if there are any changes to commit
if git diff-index --quiet HEAD --; then
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
else
    echo "❌ Failed to push changes. You may need to set up a remote repository first."
    echo "💡 To set up a remote repository, use:"
    echo "   git remote add origin <your-repository-url>"
    echo "   git branch -M main"
    echo "   git push -u origin main"
fi
