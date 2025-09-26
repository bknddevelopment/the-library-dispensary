import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Calendar, User } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';
import BlogImagePlaceholder from './BlogImagePlaceholder';
import { useState } from 'react';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  variant?: 'default' | 'featured' | 'compact';
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0, variant = 'default' }) => {
  const [imageError, setImageError] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'featured') {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-library-brown-dark/90 to-library-brown/80 backdrop-blur-sm border border-library-gold/20 shadow-xl"
      >
        <Link href={`/blog/${post.slug}`}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative h-64 md:h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-library-brown-dark/50 to-transparent z-10" />
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
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={() => setImageError(true)}
                />
              )}
              {post.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-library-gold text-library-brown-darkest text-xs font-bold rounded-full">
                    FEATURED
                  </span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-library-gold/20 text-library-gold text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-library-cream/60 text-sm">
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif text-library-cream mb-4 group-hover:text-library-gold transition-colors">
                {post.title}
              </h2>

              <p className="text-library-cream/80 mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-library-gold/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-library-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-library-cream">{post.author.name}</p>
                    <p className="text-xs text-library-cream/60">{formatDate(post.publishDate)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-library-gold group-hover:gap-3 transition-all">
                  <span className="font-semibold">Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ x: 5 }}
        className="group"
      >
        <Link href={`/blog/${post.slug}`}>
          <div className="flex gap-4 p-4 rounded-lg bg-library-brown-dark/50 border border-library-gold/10 hover:border-library-gold/30 transition-all">
            {imageError ? (
              <BlogImagePlaceholder
                title={post.title}
                category={post.category}
                className="w-24 h-24 rounded-lg"
              />
            ) : (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-24 h-24 object-cover rounded-lg"
                onError={() => setImageError(true)}
              />
            )}
            <div className="flex-1">
              <h3 className="font-serif text-library-cream mb-2 group-hover:text-library-gold transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-library-cream/60">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.publishDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime} min
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-library-brown-dark/90 to-library-brown/80 backdrop-blur-sm border border-library-gold/20 shadow-lg hover:shadow-xl transition-all"
    >
      <Link href={`/blog/${post.slug}`}>
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
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
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-library-brown-darkest/80 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-library-gold/90 text-library-brown-darkest text-xs font-bold rounded-full">
              {post.category}
            </span>
          </div>

          {/* Reading Time */}
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 px-3 py-1 bg-library-brown-darkest/70 backdrop-blur-sm rounded-full">
              <Clock className="w-3 h-3 text-library-gold" />
              <span className="text-xs text-library-cream">{post.readingTime} min</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-serif text-library-cream mb-3 group-hover:text-library-gold transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-library-cream/70 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-library-brown-darkest/50 text-library-gold-light text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-library-gold/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-library-gold/20 flex items-center justify-center">
                <User className="w-4 h-4 text-library-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold text-library-cream">{post.author.name}</p>
                <p className="text-xs text-library-cream/50">{formatDate(post.publishDate)}</p>
              </div>
            </div>

            <motion.div
              className="flex items-center gap-1 text-library-gold"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm font-semibold">Read</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;