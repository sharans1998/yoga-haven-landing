import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

export default function SEO({
  title = "Yonitara Birth - Empowering with Informed Choices",
  description = "Discover balance and wellness at Yonitara. Offering post-partum fitness, teacher training certification, and daily yoga classes.",
  image = "https://res.cloudinary.com/dyb4kpthp/image/upload/v1747830601/Yonitara-Home.png",
  url = "https://yonitara.com",
  type = "website",
  keywords = "yoga, wellness, fitness, postpartum, teacher training, yoga classes",
}: SEOProps) {
  const siteTitle = title.includes("Yonitara Birth")
    ? title
    : `${title} | Yonitara Birth`;

  // Ensure meta tags are immediately available for crawlers
  useEffect(() => {
    // Update document title immediately for crawlers
    document.title = siteTitle;

    // Ensure meta description is set
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Ensure OG tags are set
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", siteTitle);
    }

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", url);
    }
  }, [siteTitle, description, image, url]);

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Yonitara Birth" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:width" content="940" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Yonitara Birth" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />

      {/* Additional SEO tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />

      {/* Structured Data for better SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Yonitara Birth",
          description: description,
          url: url,
          logo: "https://res.cloudinary.com/dyb4kpthp/image/upload/v1745254602/logo_uxdzt4.svg",
          image: image,
          sameAs: [
            "https://www.instagram.com/yonitara.birth",
            "https://www.facebook.com/YoniTara.birth",
            "https://youtube.com/@yonitarabirth",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+919108700146",
            contactType: "customer service",
            email: "yonitara.birth@gmail.com",
          },
        })}
      </script>
    </Helmet>
  );
}
