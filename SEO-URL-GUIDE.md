# SEO and URL Redirect Guide for Yonitara

## Understanding URL Structure and Redirects

### Canonical URLs

All canonical URLs on Yonitara should follow these patterns:

- Homepage: `https://yonitara.com/`
- Sub-pages: `https://yonitara.com/page-name` (without .html extension)

### How Redirects Work

1. **Clean URLs**: We use clean URLs without `.html` extension for users and search engines

   - Example: `https://yonitara.com/about`

2. **Behind the scenes**: Vercel config handles routing:

   - Requests for `/about` serve the SPA or `about.html` file
   - Requests for `/about.html` are permanently redirected to `/about`

3. **SPA Navigation**: When users navigate within the single-page app:
   - The canonical URL script updates meta tags to reflect current page
   - This ensures social media and search engines see correct information

## Troubleshooting Redirect Issues

If you see "non-canonical URL" warnings in Google Search Console:

1. **Verify canonical tags**: Check that all pages have the correct `<link rel="canonical">` tag

   - Should point to the clean URL without `.html`
   - Example: `<link rel="canonical" href="https://yonitara.com/about">`

2. **Check redirects**: Use browser tools to verify redirects work:

   - Visit `https://yonitara.com/about.html`
   - Should 301 redirect to `https://yonitara.com/about`

3. **Test with Search Console**: Use the URL Inspection tool to:

   - Verify Google sees the canonical URL
   - Request indexing of the canonical URL if needed

4. **Fix 404 errors**: If Google reports 404 errors:
   - Check that the URL exists in your `App.tsx` routes
   - Ensure any server-side redirects are properly configured in `vercel.json`

## Adding New Pages

When adding new pages:

1. **Update `App.tsx`**: Add the route to your React router
2. **Update `sitemap.xml`**: Add the clean URL (without .html)
3. **Add SEO Component**: Ensure the page uses the `<SEO>` component
4. **Verify after deployment**: Use search console to check indexing

## SEO Component Usage

Always include the SEO component in all pages:

```tsx
<SEO
  title="Page Title | Yonitara Birth"
  description="Page description goes here"
  url="https://yonitara.com/page-path"
/>
```
