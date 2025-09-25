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
  title = 'The Library of New Jersey - West Orange\'s Premier Cannabis Destination',
  description = 'West Orange\'s premier cannabis dispensary offering premium flower, edibles, vapes & concentrates. Expert budtenders, online ordering, and convenient pickup. Open daily at 1-3 Washington Street.',
  keywords = 'cannabis dispensary West Orange NJ, marijuana dispensary near me, weed dispensary West Orange, recreational cannabis New Jersey, THC products, CBD products, cannabis flower, edibles, vapes, pre-rolls, The Library Dispensary',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl
}) => {
  const siteUrl = 'https://thelibrarynj.com'
  const fullTitle = title.includes('The Library') ? title : `${title} - The Library of New Jersey`

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
      <meta property="og:site_name" content="The Library of New Jersey" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Google Verification */}
      <meta name="google-site-verification" content="google9de1b0284bbffacf" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="The Library of New Jersey" />
      <meta name="publisher" content="The Library of New Jersey" />

      {/* Business Information for Google */}
      <meta name="business:contact_data:street_address" content="1-3 Washington Street" />
      <meta name="business:contact_data:locality" content="West Orange" />
      <meta name="business:contact_data:region" content="NJ" />
      <meta name="business:contact_data:postal_code" content="07052" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+19737311199" />
    </Head>
  )
}

export default SEO