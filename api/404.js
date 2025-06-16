// This serverless function handles 404 errors with proper status codes
export default function handler(req, res) {
  // Set a 404 status code for search engines
  res.statusCode = 404;
  
  // Forward the request to the SPA's 404 page
  // This will now respond with a 404 status code instead of a 200
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Page Not Found | Yonitara Birth</title>
      <meta name="robots" content="noindex">
      <meta http-equiv="refresh" content="0;url=/">
      <link rel="canonical" href="https://yonitara.com">
    </head>
    <body>
      <p>Page not found. Redirecting to homepage...</p>
      <script>window.location.href = '/';</script>
    </body>
    </html>
  `);
}
