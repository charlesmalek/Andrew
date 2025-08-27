# Git Auto-Commit Scripts

This repository contains scripts to automatically commit and push changes to git.

## Scripts

### 1. `git-auto-commit.sh` - One-time commit and push

Use this script to manually commit and push all current changes.

**Usage:**
```bash
# Commit with default timestamp message
./git-auto-commit.sh

# Commit with custom message
./git-auto-commit.sh "Your custom commit message"
```

### 2. `commit.sh` - Quick commit alias

A shorter alias for the auto-commit script.

**Usage:**
```bash
# Commit with default timestamp message
./commit.sh

# Commit with custom message
./commit.sh "Your custom commit message"
```

### 3. `git-watcher.sh` - Continuous file watching

Use this script to automatically watch for file changes and commit/push them periodically.

**Usage:**
```bash
# Watch current directory, commit every 30 seconds if changes detected
./git-watcher.sh

# Watch specific directory, commit every 60 seconds
./git-watcher.sh /path/to/directory 60

# Watch current directory, commit every 10 seconds
./git-watcher.sh . 10
```

## Setup Instructions

### 1. Set up a remote repository (if not already done)

```bash
# Add remote repository
git remote add origin <your-repository-url>

# Set upstream branch
git branch -M main
git push -u origin main
```

### 2. Configure git (if not already done)

```bash
# Set your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Examples

### Quick commit and push
```bash
./git-auto-commit.sh "Added new feature"
```

### Start continuous watching
```bash
# In one terminal, start the watcher
./git-watcher.sh

# In another terminal, make changes to your files
# The watcher will automatically commit and push every 30 seconds
```

### Stop the watcher
Press `Ctrl+C` in the terminal where the watcher is running.

## Notes

- The scripts will only commit if there are actual changes to commit
- If pushing fails, check that your remote repository is properly configured
- The watcher script runs continuously until stopped with Ctrl+C
- Make sure you have proper git credentials configured for pushing
