import { FC } from 'react';

interface BlogImagePlaceholderProps {
  title: string;
  category: string;
  className?: string;
}

const BlogImagePlaceholder: FC<BlogImagePlaceholderProps> = ({ title, category, className = '' }) => {
  // Generate a color based on the category
  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      'Education': 'from-library-emerald to-library-emerald-light',
      'Wellness': 'from-library-gold to-library-gold-dark',
      'Health': 'from-library-burgundy to-library-burgundy-light',
      'Lifestyle': 'from-library-copper to-library-copper-light',
      'default': 'from-library-brown to-library-brown-light'
    };
    return colors[cat] || colors.default;
  };

  const gradientClass = getCategoryColor(category);

  return (
    <div className={`relative bg-gradient-to-br ${gradientClass} ${className}`}>
      <div className="absolute inset-0 bg-library-brown-darkest/40 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-library-gold/20 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-library-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <p className="text-library-cream/60 text-sm font-display uppercase tracking-wider">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogImagePlaceholder;