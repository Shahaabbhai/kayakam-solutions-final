import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-number font-bold text-brand-navy mb-4">404</h1>
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-brand-royal to-brand-blue rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
