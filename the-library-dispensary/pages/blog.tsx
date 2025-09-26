import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, TrendingUp, Calendar, Tag } from 'lucide-react';
import GoogleOptimizedSEO from '../components/GoogleOptimizedSEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import FloatingParticles from '../components/FloatingParticles';
import FloatingIntakeButton from '../components/FloatingIntakeButton';
import BlogCard from '../components/BlogCard';
import BlogStructuredData from '../components/BlogStructuredData';
import { blogPosts, getFeaturedPosts, getPostsByCategory } from '../data/blogPosts';

const BlogPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [displayCount, setDisplayCount] = useState(6);

  const categories = ['All', 'Education', 'Wellness', 'Health', 'Lifestyle'];
  const featuredPost = getFeaturedPosts()[0];

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
    setDisplayCount(6); // Reset display count when filters change
  }, [searchTerm, selectedCategory]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  return (
    <>
      <GoogleOptimizedSEO
        title="Cannabis Blog & Education | The Library NJ"
        description="Explore cannabis education, wellness tips, and industry insights from The Library's expert team. Learn about terpenes, dosing, cooking, and more."
        keywords="cannabis blog, marijuana education, cannabis wellness, terpene guide, microdosing, cannabis cooking, New Jersey dispensary blog"
        canonicalUrl="https://thelibrarynj.com/blog"
      />
      <BlogStructuredData isListPage={true} posts={filteredPosts} post={filteredPosts[0]} />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen bg-gradient-to-b from-library-brown-darkest via-library-brown-dark to-library-brown">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/images/library-pattern.png')] opacity-5" />
              <div className="absolute inset-0 bg-gradient-to-b from-library-brown-darkest/90 to-library-brown-dark/80" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1 max-w-[100px]" />
                  <BookOpen className="w-8 h-8 text-library-gold" />
                  <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1 max-w-[100px]" />
                </div>

                <h1 className="text-5xl md:text-6xl font-display text-library-gold mb-4">
                  The Library Blog
                </h1>
                <p className="text-xl text-library-cream/80 max-w-3xl mx-auto">
                  Your trusted source for cannabis education, wellness insights, and the latest industry knowledge
                </p>
              </motion.div>

              {/* Search and Filter Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 max-w-4xl mx-auto"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-library-gold/60" />
                    <input
                      type="text"
                      placeholder="Search articles, topics, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-library-brown-darkest/50 border border-library-gold/20 rounded-lg text-library-cream placeholder-library-cream/40 focus:outline-none focus:border-library-gold/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="flex gap-2 flex-wrap md:flex-nowrap">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-3 rounded-lg font-medium transition-all ${
                          selectedCategory === category
                            ? 'bg-library-gold text-library-brown-darkest'
                            : 'bg-library-brown-darkest/50 text-library-cream hover:bg-library-gold/20 border border-library-gold/20'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'All' && !searchTerm && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-library-gold" />
                  <h2 className="text-2xl font-serif text-library-cream">Featured Article</h2>
                </div>
                <BlogCard post={featuredPost} variant="featured" />
              </motion.div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(0, displayCount).map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <BookOpen className="w-16 h-16 text-library-gold/30 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-library-cream mb-2">No articles found</h3>
                <p className="text-library-cream/60">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > displayCount && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 text-center"
              >
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-library-gold text-library-brown-darkest font-semibold rounded-lg hover:bg-library-gold-light transform hover:scale-105 transition-all"
                >
                  Load More Articles
                </button>
              </motion.div>
            )}
          </section>

          {/* Newsletter Signup */}
          <section className="bg-library-brown-darkest/50 backdrop-blur-sm border-t border-library-gold/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-display text-library-gold mb-4">
                  Stay Informed
                </h2>
                <p className="text-library-cream/80 mb-8">
                  Get the latest cannabis education and wellness tips delivered to your inbox
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-library-brown-dark/50 border border-library-gold/20 rounded-lg text-library-cream placeholder-library-cream/40 focus:outline-none focus:border-library-gold/50"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-library-gold text-library-brown-darkest font-semibold rounded-lg hover:bg-library-gold-light transform hover:scale-105 transition-all"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="mt-4 text-xs text-library-cream/50">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Popular Tags */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Tag className="w-5 h-5 text-library-gold" />
                <h2 className="text-2xl font-serif text-library-cream">Popular Topics</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {['terpenes', 'microdosing', 'sleep', 'edibles', 'wellness', 'beginners', 'CBD', 'cooking'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-4 py-2 bg-library-brown-darkest/50 border border-library-gold/20 rounded-full text-library-cream hover:bg-library-gold/20 hover:border-library-gold/40 transition-all"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default BlogPage;