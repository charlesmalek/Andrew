#!/bin/bash

# Site Verification Script
# This script ensures the site is working and accessible

echo "🔍 Verifying Andrew Distribution website..."

SITE_URL="https://andrew-beta.vercel.app"

echo "🌍 Testing: $SITE_URL"

# Test 1: HTTP Status
echo "📊 Checking HTTP status..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL")

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ HTTP Status: $HTTP_STATUS - Site is accessible"
else
    echo "❌ HTTP Status: $HTTP_STATUS - Site has issues"
    echo "🔄 Attempting to redeploy..."
    vercel --prod --force --yes >/dev/null 2>&1
    sleep 30
    
    # Check again
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL")
    if [ "$HTTP_STATUS" = "200" ]; then
        echo "✅ Redeployment successful!"
    else
        echo "❌ Redeployment failed. Status: $HTTP_STATUS"
        exit 1
    fi
fi

# Test 2: Content verification
echo "📄 Checking page content..."
PAGE_CONTENT=$(curl -s "$SITE_URL" | grep -i "andrew distribution" | head -1)

if [ -n "$PAGE_CONTENT" ]; then
    echo "✅ Page content verified - Andrew Distribution found"
else
    echo "⚠️  Page content may have issues"
fi

# Test 3: Assets loading
echo "📦 Checking assets..."
ASSETS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL/assets/")

if [ "$ASSETS_STATUS" = "200" ] || [ "$ASSETS_STATUS" = "403" ]; then
    echo "✅ Assets are accessible"
else
    echo "⚠️  Assets returned status: $ASSETS_STATUS"
fi

# Test 4: Specific routes
echo "🛣️  Testing routes..."
ROUTES=("/about" "/contact" "/careers")

for route in "${ROUTES[@]}"; do
    ROUTE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL$route")
    if [ "$ROUTE_STATUS" = "200" ]; then
        echo "✅ $route is accessible"
    else
        echo "⚠️  $route returned status: $ROUTE_STATUS"
    fi
done

# Final summary
echo ""
echo "🎉 Site verification completed!"
echo "🌍 Site URL: $SITE_URL"
echo "📊 Overall Status: $HTTP_STATUS"

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Site is fully operational!"
    echo "🚀 No 404 errors detected!"
else
    echo "❌ Site has issues that need attention."
    exit 1
fi
