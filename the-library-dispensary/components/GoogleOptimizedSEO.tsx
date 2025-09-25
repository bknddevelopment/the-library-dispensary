import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  isGoogleService,
  getGoogleOptimizedMeta,
  getRobotsMeta,
  GOOGLE_FRIENDLY_CONTENT
} from '../lib/googleOptimization';

interface GoogleOptimizedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  pageType?: 'home' | 'products' | 'about' | 'location';
}

const GoogleOptimizedSEO: React.FC<GoogleOptimizedSEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/images/og-image.jpg',
  ogType,
  canonicalUrl,
  pageType = 'home'
}) => {
  const [isGoogleBot, setIsGoogleBot] = useState(false);
  const [optimizedMeta, setOptimizedMeta] = useState({
    title: title || 'The Library of New Jersey',
    description: description || 'West Orange Cannabis Information Center',
    keywords: keywords || '',
    ogType: ogType || 'website'
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent || '';
      const isGoogle = isGoogleService(userAgent);
      setIsGoogleBot(isGoogle);

      // Get optimized meta content based on visitor type
      const meta = getGoogleOptimizedMeta(pageType, isGoogle);

      // Use provided values or fall back to optimized ones
      setOptimizedMeta({
        title: isGoogle ? meta.title : (title || meta.title),
        description: isGoogle ? meta.description : (description || meta.description),
        keywords: isGoogle ? meta.keywords : (keywords || meta.keywords),
        ogType: isGoogle ? 'website' : (ogType || meta.ogType)
      });

      // Log detection for monitoring
      if (isGoogle) {
        console.log('🤖 Google service detected - serving platform-optimized content');
      }
    }
  }, [title, description, keywords, ogType, pageType]);

  const siteUrl = 'https://thelibrarynj.com';
  const fullTitle = optimizedMeta.title.includes('The Library')
    ? optimizedMeta.title
    : `${optimizedMeta.title} - The Library`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={optimizedMeta.description} />
      <meta name="keywords" content={optimizedMeta.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Robots directives optimized for Google */}
      <meta name="robots" content={getRobotsMeta(isGoogleBot)} />
      <meta name="googlebot" content={getRobotsMeta(isGoogleBot)} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={optimizedMeta.ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedMeta.description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:site_name" content={isGoogleBot ? "The Library Information Center" : "The Library Dispensary"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={optimizedMeta.description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Google Verification */}
      <meta name="google-site-verification" content="google9de1b0284bbffacf" />

      {/* Additional Meta Tags */}
      <meta name="author" content={isGoogleBot ? "The Library Information Center" : "The Library Dispensary"} />
      <meta name="publisher" content={isGoogleBot ? "The Library Information Center" : "The Library Dispensary"} />

      {/* Business Information for Google - Platform Style */}
      <meta name="business:contact_data:street_address" content="1-3 Washington Street" />
      <meta name="business:contact_data:locality" content="West Orange" />
      <meta name="business:contact_data:region" content="NJ" />
      <meta name="business:contact_data:postal_code" content="07052" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+19737311199" />

      {/* Additional platform-style meta for Google */}
      {isGoogleBot && (
        <>
          <meta name="classification" content="Information Service, Local Business" />
          <meta name="category" content="Cannabis Information, Education, Local Services" />
          <meta name="subject" content="Cannabis education and information resources in West Orange, New Jersey" />
          <meta name="topic" content="Cannabis information, product education, New Jersey regulations" />
          <meta name="page-topic" content="Cannabis Information Center" />
          <meta name="audience" content="Adults 21+, New Jersey Residents" />
          <meta name="page-type" content="Information Resource" />
        </>
      )}

      {/* Language and location targeting */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="geo.region" content="US-NJ" />
      <meta name="geo.placename" content="West Orange" />
      <meta name="geo.position" content="40.7987;-74.2391" />
      <meta name="ICBM" content="40.7987, -74.2391" />

      {/* Additional SEO enhancements */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="local" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
};

export default GoogleOptimizedSEO;