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
  description = 'West Orange\'s premier cannabis dispensary offering premium flower, edibles, vapes & concentrates. Expert budtenders, online ordering, and convenient pickup. Open daily at 1-3 Washington St.',
  keywords = 'cannabis dispensary West Orange NJ, marijuana dispensary near me, weed dispensary West Orange, recreational cannabis New Jersey, THC products, CBD products, cannabis flower, edibles, vapes, pre-rolls, The Library Dispensary',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl
}) => {
  const siteUrl = 'https://thelibrarynj.com'
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