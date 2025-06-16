/**
 * This script ensures canonical URLs are correctly updated during SPA navigation
 * It should be included in your index.html
 */

// Execute when the document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initial setup of canonical URL
  updateCanonicalURL(window.location.pathname);
  
  // Listen for route changes in SPA
  const observer = new MutationObserver(function(mutations) {
    // When DOM changes, check if the URL has changed
    const currentPath = window.location.pathname;
    updateCanonicalURL(currentPath);
  });
  
  // Start observing the document body for changes
  observer.observe(document.body, { 
    childList: true,
    subtree: true 
  });
});

/**
 * Updates the canonical URL based on the current path
 */
function updateCanonicalURL(path) {
  // Clean the path - remove .html and trailing slashes
  const cleanPath = path.replace(/\.html$/, '').replace(/\/$/, '');
  
  // Get base URL from the current location
  const baseUrl = window.location.protocol + '//' + window.location.host;
  
  // Create the canonical URL
  const canonicalUrl = cleanPath === '' ? baseUrl : baseUrl + cleanPath;
  
  // Update or create canonical link
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalTag) {
    canonicalTag.setAttribute('href', canonicalUrl);
  } else {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    canonicalTag.setAttribute('href', canonicalUrl);
    document.head.appendChild(canonicalTag);
  }
  
  // Also update Open Graph URL
  let ogUrlTag = document.querySelector('meta[property="og:url"]');
  if (ogUrlTag) {
    ogUrlTag.setAttribute('content', canonicalUrl);
  }
  
  // Update Twitter URL
  let twitterUrlTag = document.querySelector('meta[name="twitter:url"]');
  if (twitterUrlTag) {
    twitterUrlTag.setAttribute('content', canonicalUrl);
  }
}
