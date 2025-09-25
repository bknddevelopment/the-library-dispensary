#!/bin/bash

# Test Script for Google Crawler Access
# This script verifies that Google can properly access your business information

echo "🔍 Testing Google Crawler Access for The Library Dispensary"
echo "================================================"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Check what Googlebot sees
echo -e "\n${YELLOW}Test 1: Simulating Googlebot crawl of homepage${NC}"
echo "Testing: https://thelibrarynj.com"

RESPONSE=$(curl -s -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "https://thelibrarynj.com" | head -500)

# Check if we see the age verification spinner
if echo "$RESPONSE" | grep -q "Checking verification status"; then
    echo -e "${RED}❌ FAILED: Googlebot sees age verification spinner${NC}"
    echo "   This blocks Google from accessing your business information!"
else
    echo -e "${GREEN}✅ PASSED: Age verification bypassed for Googlebot${NC}"
fi

# Check if business information is visible
if echo "$RESPONSE" | grep -q "1-3 Washington Street"; then
    echo -e "${GREEN}✅ PASSED: Business address is visible${NC}"
else
    echo -e "${RED}❌ FAILED: Business address not found${NC}"
fi

if echo "$RESPONSE" | grep -q "(973) 731-1199"; then
    echo -e "${GREEN}✅ PASSED: Phone number is visible${NC}"
else
    echo -e "${RED}❌ FAILED: Phone number not found${NC}"
fi

if echo "$RESPONSE" | grep -q "Mon-Wed.*9am-8pm"; then
    echo -e "${GREEN}✅ PASSED: Business hours are visible${NC}"
else
    echo -e "${YELLOW}⚠️  WARNING: Business hours not easily found${NC}"
fi

# Test 2: Check the Google Business specific page
echo -e "\n${YELLOW}Test 2: Testing Google Business Info page${NC}"
echo "Testing: https://thelibrarynj.com/google-business.html"

if curl -s "https://thelibrarynj.com/google-business.html" | grep -q "The Library of New Jersey"; then
    echo -e "${GREEN}✅ PASSED: Google Business page is accessible${NC}"
else
    echo -e "${RED}❌ FAILED: Google Business page not accessible${NC}"
fi

# Test 3: Check robots.txt
echo -e "\n${YELLOW}Test 3: Checking robots.txt${NC}"
ROBOTS=$(curl -s "https://thelibrarynj.com/robots.txt")

if echo "$ROBOTS" | grep -q "Disallow:.*\*"; then
    echo -e "${RED}❌ WARNING: robots.txt may be blocking crawlers${NC}"
else
    echo -e "${GREEN}✅ PASSED: robots.txt allows crawling${NC}"
fi

# Test 4: Check for structured data
echo -e "\n${YELLOW}Test 4: Checking for Schema.org structured data${NC}"

if echo "$RESPONSE" | grep -q '"@type".*"Store"'; then
    echo -e "${GREEN}✅ PASSED: Structured data found${NC}"
elif echo "$RESPONSE" | grep -q '"@type".*"LocalBusiness"'; then
    echo -e "${GREEN}✅ PASSED: LocalBusiness structured data found${NC}"
else
    echo -e "${YELLOW}⚠️  WARNING: Structured data may not be visible${NC}"
fi

# Test 5: Google Site Verification
echo -e "\n${YELLOW}Test 5: Testing Google Site Verification access${NC}"

if curl -s -A "Google-Site-Verification/1.0" "https://thelibrarynj.com" | grep -q "Checking verification status"; then
    echo -e "${RED}❌ FAILED: Google Site Verification blocked by age gate${NC}"
else
    echo -e "${GREEN}✅ PASSED: Google Site Verification can access site${NC}"
fi

# Test 6: Check meta tags
echo -e "\n${YELLOW}Test 6: Checking critical meta tags${NC}"

if echo "$RESPONSE" | grep -q 'name="business:address"'; then
    echo -e "${GREEN}✅ PASSED: Business meta tags present${NC}"
else
    echo -e "${YELLOW}⚠️  WARNING: Business meta tags may not be visible${NC}"
fi

# Summary
echo -e "\n================================================"
echo -e "${YELLOW}SUMMARY & RECOMMENDATIONS${NC}"
echo "================================================"

echo -e "\n${YELLOW}Critical Action Items:${NC}"
echo "1. Submit https://thelibrarynj.com/google-business.html to Google Business Profile"
echo "2. Test with Google's Rich Results Test: https://search.google.com/test/rich-results"
echo "3. Verify in Google Search Console: https://search.google.com/search-console"
echo "4. Request indexing after making changes"

echo -e "\n${YELLOW}Testing Your Fixes:${NC}"
echo "Run this command to test as Googlebot:"
echo "curl -A 'Googlebot' https://thelibrarynj.com | grep -E 'Washington|731-1199|hours'"

echo -e "\n${YELLOW}Monitor Progress:${NC}"
echo "1. Check Google Search Console for crawl errors"
echo "2. Use Google's Mobile-Friendly Test"
echo "3. Monitor Google Business Profile status"

echo -e "\n${GREEN}Script Complete!${NC}"