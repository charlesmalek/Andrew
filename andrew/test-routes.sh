#!/bin/bash

# Andrew Distribution - Route Testing Script
# This script tests all routes to ensure no 404 errors

SITE_URL="https://andrew-beta.vercel.app"

echo "🧪 Testing Andrew Distribution Routes..."
echo "Site: $SITE_URL"
echo "================================"

# Array of all routes that should work
routes=(
    "/"
    "/about"
    "/contact"
    "/transportation"
    "/newspapers"
    "/magazines" 
    "/careers"
)

# Test each route
failed_routes=()
passed_routes=()

for route in "${routes[@]}"; do
    echo -n "Testing $route ... "
    
    # Get HTTP status code
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL$route")
    
    if [ "$status_code" = "200" ]; then
        echo "✅ PASS ($status_code)"
        passed_routes+=("$route")
    else
        echo "❌ FAIL ($status_code)"
        failed_routes+=("$route")
    fi
done

echo "================================"
echo "📊 Test Results:"
echo "✅ Passed: ${#passed_routes[@]}"
echo "❌ Failed: ${#failed_routes[@]}"

if [ ${#failed_routes[@]} -eq 0 ]; then
    echo "🎉 All routes are working correctly!"
    exit 0
else
    echo "⚠️  Failed routes:"
    for route in "${failed_routes[@]}"; do
        echo "   - $route"
    done
    echo ""
    echo "🔧 Troubleshooting:"
    echo "1. Wait a few minutes for deployment to complete"
    echo "2. Check Vercel dashboard for deployment status"
    echo "3. Run ./force-deploy.sh if needed"
    exit 1
fi
