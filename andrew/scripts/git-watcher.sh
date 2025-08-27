#!/bin/bash

# Git file watcher - automatically commits and pushes changes
# Usage: ./git-watcher.sh [watch_directory] [commit_interval_seconds]

WATCH_DIR=${1:-"."}
COMMIT_INTERVAL=${2:-30}  # Default: commit every 30 seconds if changes detected

echo "👀 Starting git file watcher..."
echo "📁 Watching directory: $WATCH_DIR"
echo "⏱️  Commit interval: $COMMIT_INTERVAL seconds"
echo "Press Ctrl+C to stop"

# Function to commit and push changes
commit_and_push() {
    if ! git diff-index --quiet HEAD --; then
        echo "🔄 Changes detected, committing..."
        git add .
        git commit -m "Auto commit: $(date '+%Y-%m-%d %H:%M:%S')"
        
        if git push; then
            echo "✅ Successfully pushed changes!"
        else
            echo "⚠️  Failed to push changes (remote may not be configured)"
        fi
    fi
}

# Main loop
while true; do
    commit_and_push
    sleep $COMMIT_INTERVAL
done
