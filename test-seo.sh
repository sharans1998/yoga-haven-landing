#!/bin/bash

echo "🔍 Testing SEO Meta Tags..."
echo ""

# Test if the site is accessible
echo "1. Testing main site accessibility..."
curl -s -o /dev/null -w "%{http_code}" https://yonitara.com
echo ""

# Test meta tags in the HTML source
echo "2. Checking for Open Graph tags in source..."
curl -s https://yonitara.com | grep -i "og:" | head -5
echo ""

echo "3. Checking for Twitter tags in source..."
curl -s https://yonitara.com | grep -i "twitter:" | head -3
echo ""

echo "4. Checking title and description..."
curl -s https://yonitara.com | grep -i "<title>" | head -1
curl -s https://yonitara.com | grep -i "description" | head -1
echo ""

echo "✅ SEO Test completed!"
echo ""
echo "📋 To test with social media debuggers:"
echo "• Facebook: https://developers.facebook.com/tools/debug/"
echo "• LinkedIn: https://www.linkedin.com/post-inspector/"
echo "• Twitter: https://cards-dev.twitter.com/validator"
echo ""
echo "🔗 Test URL: https://yonitara.com"
