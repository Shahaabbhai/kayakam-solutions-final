import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Hospitality', href: '/#hospitality' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isDarkPage = location.pathname !== '/';
  const activeHash = location.hash || '/#home';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className={`w-full max-w-7xl transition-all duration-500 ease-in-out pointer-events-auto ${
          isScrolled || isDarkPage
            ? 'mt-4 mx-4 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 rounded-full py-2.5 px-6'
            : 'mt-0 mx-0 bg-transparent py-6 px-6 lg:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
            aria-label="Kayakam Solutions Home"
          >
            <div className={`flex items-center p-1.5 rounded-lg transition-colors ${
              !isScrolled && !isDarkPage ? 'bg-white/95 backdrop-blur-sm shadow-sm' : ''
            }`}>
              <img 
                src="/logo.png" 
                alt="Kayakam Solutions Logo" 
                className={`w-auto transition-all duration-300 ${isScrolled || isDarkPage ? 'h-8' : 'h-10'}`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-full group ${
                  isScrolled || isDarkPage 
                    ? 'text-gray-600 hover:text-brand-navy' 
                    : 'text-gray-100 hover:text-white drop-shadow-sm'
                }`}
              >
                {link.name}
                
                {/* Active Indicator Background */}
                {activeHash === link.href && (isScrolled || isDarkPage) && (
                  <motion.div 
                    layoutId="activeNavBackground" 
                    className="absolute inset-0 bg-gray-100 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover Underline Animation */}
                <span className={`absolute left-5 right-5 bottom-1.5 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-full ${
                  isScrolled || isDarkPage ? 'bg-brand-blue' : 'bg-brand-gold'
                }`} />
              </a>
            ))}
          </nav>

          {/* Right Area: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:inline-flex items-center justify-center px-7 py-3 text-sm font-bold text-white bg-gradient-to-r from-brand-royal to-brand-blue rounded-full shadow-[0_4px_14px_0_rgba(10,77,155,0.39)] hover:shadow-[0_6px_20px_rgba(10,77,155,0.23)] hover:from-brand-blue hover:to-brand-navy transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 relative overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-brand-gold-light transition-colors duration-300">
                Get Free Consultation
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden z-50 p-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                isScrolled || isDarkPage ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-brand-navy/60 backdrop-blur-md z-[60] pointer-events-auto"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] sm:max-w-sm bg-white shadow-2xl z-[70] flex flex-col rounded-l-[2rem] overflow-hidden pointer-events-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100/50">
                <img src="/logo.png" alt="Kayakam Solutions" className="h-8 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    href={link.href}
                    className="flex items-center justify-between p-4 text-lg font-bold text-gray-900 hover:bg-gray-50 hover:text-brand-blue rounded-2xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-blue transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Sticky CTA */}
              <div className="p-6 border-t border-gray-100/50 bg-gray-50/50 sticky bottom-0">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-royal to-brand-blue rounded-2xl shadow-[0_8px_20px_rgba(10,77,155,0.2)] hover:shadow-[0_12px_25px_rgba(10,77,155,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  Get Free Consultation
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
