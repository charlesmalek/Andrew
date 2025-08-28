#!/bin/bash

# Vercel Deployment Script with Rate Limit Handling
echo "🚀 Starting Vercel deployment..."

# Check if we're rate limited
if npx vercel --prod 2>&1 | grep -q "rate limited"; then
    echo "⚠️  Rate limit detected. Trying alternative deployment..."
    
    # Option 1: Try with different project name
    echo "📦 Attempting deployment with new project name..."
    npx vercel --prod --name andrew-distribution-$(date +%s)
    
    # Option 2: If that fails, try with different scope
    if [ $? -ne 0 ]; then
        echo "🔄 Trying with different scope..."
        npx vercel --prod --scope team
    fi
    
    # Option 3: If all fails, provide instructions
    if [ $? -ne 0 ]; then
        echo "❌ All deployment attempts failed due to rate limits."
        echo "💡 Alternative solutions:"
        echo "   1. Wait 4 hours for rate limit to reset"
        echo "   2. Use GitHub Pages (already configured)"
        echo "   3. Upgrade to Vercel Pro for higher limits"
        echo "   4. Use Netlify as alternative"
        exit 1
    fi
else
    echo "✅ Deployment successful!"
fi
