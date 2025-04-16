import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "YoniTara Birth - Holistic Yoga & Wellness",
  description = "Discover balance and wellness at Yonitara. Offering post-partum fitness, teacher training certification, and daily yoga classes.",
  image = "/og-image.png",
  url = "https://yonitara.com",
  type = "website",
}: SEOProps) {
  const siteTitle = title.includes("YoniTara Birth")
    ? title
    : `${title} | YoniTara Birth`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
