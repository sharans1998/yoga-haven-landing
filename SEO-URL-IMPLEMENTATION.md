# SEO and URL Implementation Guide for Yonitara

## Current Implementation: Using Rewrites (Not Redirects)

After careful consideration of SEO best practices, we've implemented a **rewrite-based** approach for our URLs rather than redirects. Here's why:

### Why Rewrites Instead of Redirects

1. **Preserving SEO Content**:

   - Static HTML files (`about.html`, etc.) contain rich SEO meta tags
   - These tags are immediately available to search engine crawlers
   - Rewrites ensure crawlers see this content when accessing clean URLs

2. **No Redirect Chain Issues**:

   - Redirects can create chains that slow down page loads
   - Search engines may reduce page ranking for excessive redirects
   - Our rewrite approach avoids these issues entirely

3. **URL Stability**:
   - Users and search engines consistently see clean URLs
   - No switching between different URL formats

## How Our URL System Works

### For Users and Search Engines:

1. **Clean URLs**: All visible URLs have no `.html` extension

   - Example: `https://yonitara.com/about`
   - These are the canonical URLs that should be shared and linked

2. **Behind the Scenes**:
   - Vercel rewrites `/about` to serve the content from `/about.html`
   - This happens invisibly - no URL change in browser
   - The HTML server response includes canonical tags pointing to the clean URL

### For SEO:

1. **Canonical Tags**:

   - All HTML pages have `<link rel="canonical" href="https://yonitara.com/clean-url">`
   - This directs search engines to index the clean URL version

2. **HTTP Headers**:
   - We've added HTTP Link headers for canonical URLs
   - Example: `/about.html` has header `Link: </about>; rel="canonical"`

## Troubleshooting SEO Issues

If Google Search Console reports "non-canonical URL" warnings:

1. **Check Vercel Configuration**:

   - Ensure rewrites are working properly
   - Verify HTTP headers are being set correctly

2. **Inspect HTML Output**:

   - Verify canonical tags are present in page source
   - Ensure dynamic updating works for SPA navigation

3. **Test with Google Tools**:
   - Use URL Inspection tool to check what Google sees
   - Request indexing of the canonical URLs if needed

## Adding New Pages

When adding new pages:

1. **Create Static HTML** with SEO tags for crawlers
2. **Configure Rewrite** in `vercel.json` to handle the clean URL
3. **Add HTTP Header** for canonical reference
4. **Update Sitemap** with the clean URL only
