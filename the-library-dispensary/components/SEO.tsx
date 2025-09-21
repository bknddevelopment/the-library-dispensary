import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'The Library Dispensary - West Orange\'s Premier Cannabis Destination',
  description = 'Experience premium cannabis products in West Orange\'s most sophisticated dispensary. Expert guidance, curated selection, and unmatched service.',
  keywords = 'cannabis dispensary West Orange, medical marijuana, CBD products, THC products, cannabis education',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl
}) => {
  const siteUrl = 'https://thelibrarydispensary.com'
  const fullTitle = title.includes('The Library Dispensary') ? title : `${title} - The Library Dispensary`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:site_name" content="The Library Dispensary" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="The Library Dispensary" />
      <meta name="publisher" content="The Library Dispensary" />
    </Head>
  )
}

export default SEO