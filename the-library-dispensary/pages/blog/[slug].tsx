import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Link as LinkIcon,
  BookOpen,
  Tag
} from 'lucide-react';
import GoogleOptimizedSEO from '../../components/GoogleOptimizedSEO';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import FloatingParticles from '../../components/FloatingParticles';
import FloatingIntakeButton from '../../components/FloatingIntakeButton';
import BlogCard from '../../components/BlogCard';
import BlogStructuredData from '../../components/BlogStructuredData';
import BlogImagePlaceholder from '../../components/BlogImagePlaceholder';
import { BlogPost, blogPosts, getBlogPostBySlug, getRelatedPosts } from '../../data/blogPosts';
import Link from 'next/link';
import { useState } from 'react';

interface BlogPostPageProps {
  post: BlogPost | null;
  relatedPosts: BlogPost[];
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post, relatedPosts }) => {
  const router = useRouter();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-library-brown-darkest flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-library-gold animate-pulse mx-auto mb-4" />
          <p className="text-library-cream">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-library-brown-darkest flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-library-gold/30 mx-auto mb-4" />
          <h1 className="text-2xl font-serif text-library-cream mb-2">Article Not Found</h1>
          <p className="text-library-cream/60 mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="inline-block px-6 py-3 bg-library-gold text-library-brown-darkest font-semibold rounded-lg hover:bg-library-gold-light transition-all">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(post.title);

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  // Parse markdown-style content to HTML (simplified)
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const html: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    lines.forEach((line, index) => {
      // Headers
      if (line.startsWith('### ')) {
        html.push(
          <h3 key={index} className="text-2xl font-serif text-library-gold mt-8 mb-4">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        html.push(
          <h2 key={index} className="text-3xl font-serif text-library-gold mt-10 mb-6">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        html.push(
          <h1 key={index} className="text-4xl font-display text-library-gold mt-12 mb-8">
            {line.replace('# ', '')}
          </h1>
        );
      }
      // Bold text
      else if (line.includes('**')) {
        const parts = line.split('**');
        const elements: JSX.Element[] = [];
        parts.forEach((part, i) => {
          if (i % 2 === 1) {
            elements.push(<strong key={i} className="text-library-cream font-semibold">{part}</strong>);
          } else if (part) {
            elements.push(<span key={i}>{part}</span>);
          }
        });

        // Check if it's a list item
        if (line.trim().startsWith('-') || line.trim().startsWith('*')) {
          currentList.push(line.trim().substring(1).trim());
          if (listType === null) listType = 'ul';
        } else if (line.trim().match(/^\d+\./)) {
          currentList.push(line.trim().replace(/^\d+\./, '').trim());
          if (listType === null) listType = 'ol';
        } else {
          // Close any open list
          if (currentList.length > 0) {
            const ListTag = listType === 'ol' ? 'ol' : 'ul';
            html.push(
              <ListTag key={`list-${index}`} className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} list-inside space-y-2 mb-6 text-library-cream/80`}>
                {currentList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ListTag>
            );
            currentList = [];
            listType = null;
          }

          html.push(
            <p key={index} className="text-library-cream/80 mb-6 leading-relaxed">
              {elements}
            </p>
          );
        }
      }
      // List items
      else if (line.trim().startsWith('-') || line.trim().startsWith('*')) {
        currentList.push(line.trim().substring(1).trim());
        if (listType === null) listType = 'ul';
      }
      else if (line.trim().match(/^\d+\./)) {
        currentList.push(line.trim().replace(/^\d+\./, '').trim());
        if (listType === null) listType = 'ol';
      }
      // Regular paragraph
      else if (line.trim()) {
        // Close any open list
        if (currentList.length > 0) {
          const ListTag = listType === 'ol' ? 'ol' : 'ul';
          html.push(
            <ListTag key={`list-${index}`} className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} list-inside space-y-2 mb-6 text-library-cream/80`}>
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ListTag>
          );
          currentList = [];
          listType = null;
        }

        // Check for italic text
        let processedLine = line;
        if (processedLine.includes('*') && !processedLine.startsWith('*')) {
          const parts = processedLine.split(/\*([^*]+)\*/g);
          const elements: (string | JSX.Element)[] = [];
          parts.forEach((part, i) => {
            if (i % 2 === 1) {
              elements.push(<em key={i} className="italic">{part}</em>);
            } else if (part) {
              elements.push(part);
            }
          });
          html.push(
            <p key={index} className="text-library-cream/80 mb-6 leading-relaxed">
              {elements}
            </p>
          );
        } else {
          html.push(
            <p key={index} className="text-library-cream/80 mb-6 leading-relaxed">
              {processedLine}
            </p>
          );
        }
      }
    });

    // Close any remaining open list
    if (currentList.length > 0) {
      const ListTag = listType === 'ol' ? 'ol' : 'ul';
      html.push(
        <ListTag key="list-final" className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} list-inside space-y-2 mb-6 text-library-cream/80`}>
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ListTag>
      );
    }

    return html;
  };

  return (
    <>
      <GoogleOptimizedSEO
        title={`${post.title} | The Library Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogImage={post.featuredImage}
        ogType="article"
        canonicalUrl={`https://thelibrarynj.com/blog/${post.slug}`}
      />
      <BlogStructuredData post={post} />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen bg-gradient-to-b from-library-brown-darkest via-library-brown-dark to-library-brown">
          {/* Hero Section with Featured Image */}
          <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
            <div className="absolute inset-0">
              {imageError ? (
                <BlogImagePlaceholder
                  title={post.title}
                  category={post.category}
                  className="w-full h-full"
                />
              ) : (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-library-brown-darkest via-library-brown-darkest/80 to-library-brown-darkest/40" />
            </div>

            <div className="relative h-full flex flex-col justify-end max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link href="/blog" className="inline-flex items-center gap-2 text-library-gold hover:text-library-gold-light transition-colors mb-6">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </Link>

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-library-gold text-library-brown-darkest text-sm font-bold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-library-cream/80 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-library-cream/80 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-library-cream mb-6">
                  {post.title}
                </h1>

                <p className="text-xl text-library-cream/80 mb-8 max-w-3xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-library-gold/20 flex items-center justify-center">
                      <User className="w-6 h-6 text-library-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-library-cream">{post.author.name}</p>
                      <p className="text-sm text-library-cream/60">{post.author.title}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="p-3 bg-library-brown-darkest/50 backdrop-blur-sm rounded-lg border border-library-gold/20 hover:border-library-gold/40 transition-all"
                    >
                      <Share2 className="w-5 h-5 text-library-gold" />
                    </button>

                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-0 mt-2 p-2 bg-library-brown-darkest border border-library-gold/20 rounded-lg shadow-xl"
                      >
                        <button
                          onClick={() => handleShare('facebook')}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-library-gold/20 rounded transition-all w-full"
                        >
                          <Facebook className="w-4 h-4 text-library-gold" />
                          <span className="text-library-cream text-sm">Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-library-gold/20 rounded transition-all w-full"
                        >
                          <Twitter className="w-4 h-4 text-library-gold" />
                          <span className="text-library-cream text-sm">Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-library-gold/20 rounded transition-all w-full"
                        >
                          <LinkIcon className="w-4 h-4 text-library-gold" />
                          <span className="text-library-cream text-sm">
                            {copiedLink ? 'Copied!' : 'Copy Link'}
                          </span>
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Article Content */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert max-w-none"
            >
              <div className="bg-library-brown-darkest/30 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-library-gold/10">
                {renderContent(post.content)}
              </div>
            </motion.article>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-library-gold/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-library-gold" />
                <h3 className="text-lg font-semibold text-library-cream">Topics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog?search=${tag}`} className="inline-block px-3 py-1 bg-library-brown-darkest/50 border border-library-gold/20 rounded-full text-sm text-library-cream hover:bg-library-gold/20 hover:border-library-gold/40 transition-all">
                    #{tag}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 p-6 bg-library-brown-darkest/50 backdrop-blur-sm rounded-xl border border-library-gold/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-library-gold/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-library-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-library-cream mb-1">About {post.author.name}</h3>
                  <p className="text-library-gold mb-3">{post.author.title}</p>
                  <p className="text-library-cream/70 text-sm">
                    Our team of cannabis education specialists brings together years of industry experience and a passion for sharing knowledge.
                    We're committed to providing accurate, helpful information to enhance your cannabis journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-display text-library-gold mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                  ))}
                </div>
              </motion.div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-library-brown-darkest/50 backdrop-blur-sm border-t border-library-gold/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-display text-library-gold mb-4">
                  Ready to Learn More?
                </h2>
                <p className="text-library-cream/80 mb-8">
                  Visit The Library for personalized cannabis education and premium products
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products" className="inline-block px-8 py-3 bg-library-gold text-library-brown-darkest font-semibold rounded-lg hover:bg-library-gold-light transform hover:scale-105 transition-all">
                    Browse Products
                  </Link>
                  <Link href="/first-visit" className="inline-block px-8 py-3 bg-transparent border-2 border-library-gold text-library-gold font-semibold rounded-lg hover:bg-library-gold/10 transform hover:scale-105 transition-all">
                    Plan Your Visit
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPostBySlug(slug) || null;
  const relatedPosts = post ? getRelatedPosts(post, 3) : [];

  return {
    props: {
      post,
      relatedPosts,
    },
  };
};

export default BlogPostPage;