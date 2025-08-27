#!/bin/bash

# Health Check Script for Andrew Distribution Website
# This script verifies that the site is working properly

echo "🏥 Starting health check for Andrew Distribution website..."

# Get the production URL
PRODUCTION_URL=$(vercel project ls 2>/dev/null | grep "andrew" | head -1 | awk '{print $3}' || echo "")

if [ -z "$PRODUCTION_URL" ]; then
    echo "❌ Could not find production URL. Is Vercel linked?"
    exit 1
fi

echo "🌍 Checking: $PRODUCTION_URL"

# Check main page
echo "📄 Checking main page..."
MAIN_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL")

if [ "$MAIN_STATUS" = "200" ]; then
    echo "✅ Main page is accessible"
else
    echo "❌ Main page returned status: $MAIN_STATUS"
    echo "🔄 Attempting to redeploy..."
    vercel --prod --force --yes >/dev/null 2>&1
    echo "⏳ Waiting for redeployment..."
    sleep 30
    
    # Check again
    MAIN_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL")
    if [ "$MAIN_STATUS" = "200" ]; then
        echo "✅ Redeployment successful!"
    else
        echo "❌ Redeployment failed. Status: $MAIN_STATUS"
        exit 1
    fi
fi

# Check specific routes
ROUTES=("/about" "/contact" "/careers")

for route in "${ROUTES[@]}"; do
    echo "🔍 Checking route: $route"
    ROUTE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL$route")
    
    if [ "$ROUTE_STATUS" = "200" ]; then
        echo "✅ $route is accessible"
    else
        echo "⚠️  $route returned status: $ROUTE_STATUS"
    fi
done

# Check assets
echo "📦 Checking assets..."
ASSETS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PRODUCTION_URL/assets/")

if [ "$ASSETS_STATUS" = "200" ] || [ "$ASSETS_STATUS" = "403" ]; then
    echo "✅ Assets are accessible"
else
    echo "⚠️  Assets returned status: $ASSETS_STATUS"
fi

# Final summary
echo ""
echo "🎉 Health check completed!"
echo "🌍 Site URL: $PRODUCTION_URL"
echo "📊 Main page status: $MAIN_STATUS"

if [ "$MAIN_STATUS" = "200" ]; then
    echo "✅ Site is operational!"
else
    echo "❌ Site has issues. Check Vercel dashboard for details."
    exit 1
fi
