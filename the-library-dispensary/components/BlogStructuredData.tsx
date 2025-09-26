import Head from 'next/head';
import { BlogPost } from '../data/blogPosts';

interface BlogStructuredDataProps {
  post: BlogPost;
  isListPage?: boolean;
  posts?: BlogPost[];
}

const BlogStructuredData: React.FC<BlogStructuredDataProps> = ({ post, isListPage = false, posts = [] }) => {
  // For blog listing page
  if (isListPage && posts.length > 0) {
    const blogListSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "The Library Blog",
      "description": "Cannabis education, wellness tips, and industry insights from The Library NJ",
      "url": "https://thelibrarynj.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "The Library of New Jersey",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thelibrarynj.com/images/logo.png"
        }
      },
      "blogPost": posts.map(p => ({
        "@type": "BlogPosting",
        "headline": p.title,
        "description": p.excerpt,
        "url": `https://thelibrarynj.com/blog/${p.slug}`,
        "datePublished": p.publishDate,
        "author": {
          "@type": "Person",
          "name": p.author.name,
          "jobTitle": p.author.title
        },
        "image": `https://thelibrarynj.com${p.featuredImage}`,
        "keywords": p.tags.join(", ")
      }))
    };

    return (
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogListSchema)
          }}
        />
      </Head>
    );
  }

  // For individual blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://thelibrarynj.com${post.featuredImage}`,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.title
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Library of New Jersey",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thelibrarynj.com/images/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1-3 Washington St",
        "addressLocality": "West Orange",
        "addressRegion": "NJ",
        "postalCode": "07052",
        "addressCountry": "US"
      }
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length,
    "url": `https://thelibrarynj.com/blog/${post.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://thelibrarynj.com/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thelibrarynj.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://thelibrarynj.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://thelibrarynj.com/blog/${post.slug}`
      }
    ]
  };

  const faqSchema = post.category === 'Education' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is ${post.title.toLowerCase()}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": post.excerpt
        }
      }
    ]
  } : null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      )}
    </Head>
  );
};

export default BlogStructuredData;