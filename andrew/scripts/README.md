# Andrew Distribution - Deployment Scripts

This folder contains all deployment and maintenance scripts for the Andrew Distribution website.

## 🚀 Deployment Scripts

### `force-deploy.sh`
Forces a fresh deployment to Vercel by cleaning build cache and triggering a new deployment.
```bash
./scripts/force-deploy.sh
```

### `nuclear-deploy.sh`
Complete reset deployment - removes all caches, reinstalls dependencies, and forces fresh deployment.
```bash
./scripts/nuclear-deploy.sh
```

### `deploy.sh`
Standard deployment script for regular deployments.
```bash
./scripts/deploy.sh
```

### `vercel-deploy.sh`
Vercel-specific deployment utilities.
```bash
./scripts/vercel-deploy.sh
```

## 🧪 Testing Scripts

### `test-routes.sh`
Tests all application routes to ensure no 404 errors.
```bash
./scripts/test-routes.sh
```

### `validate-deployment.js`
Pre-deployment validation that checks route configuration and component availability.
```bash
node ./scripts/validate-deployment.js
```

### `verify-site.sh`
Comprehensive site verification script.
```bash
./scripts/verify-site.sh
```

### `health-check.sh`
Basic health check for the deployed site.
```bash
./scripts/health-check.sh
```

## 🔧 Maintenance Scripts

### `git-auto-commit.sh`
Automated git commit script for batch operations.
```bash
./scripts/git-auto-commit.sh
```

### `git-watcher.sh`
Git repository monitoring script.
```bash
./scripts/git-watcher.sh
```

### `fix-vercel.sh`
Fixes common Vercel deployment issues.
```bash
./scripts/fix-vercel.sh
```

### `safe-deploy.sh`
Safe deployment with rollback capabilities.
```bash
./scripts/safe-deploy.sh
```

### `commit.sh`
Standardized commit script with validation.
```bash
./scripts/commit.sh
```

## 📋 Usage Guidelines

1. **Always test locally first** before running deployment scripts
2. **Use `validate-deployment.js`** before any deployment
3. **Test routes** after deployment with `test-routes.sh`
4. **Use `nuclear-deploy.sh`** only when other methods fail
5. **Check site health** with `health-check.sh` after deployments

## 🔒 Permissions

Make sure all scripts have execute permissions:
```bash
chmod +x scripts/*.sh
```

## 🚨 Emergency Procedures

If the site is down:
1. Run `./scripts/health-check.sh` to diagnose
2. Try `./scripts/force-deploy.sh` for quick fix
3. Use `./scripts/nuclear-deploy.sh` for complete reset
4. Verify with `./scripts/test-routes.sh`

## 📝 Adding New Scripts

When adding new scripts:
1. Follow the naming convention: `action-type.sh`
2. Add execute permissions: `chmod +x script-name.sh`
3. Document the script purpose and usage here
4. Include error handling and logging
5. Test thoroughly before committing
