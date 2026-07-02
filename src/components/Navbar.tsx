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

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Hospitality', href: '/#hospitality' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isDarkPage = location.pathname !== '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isDarkPage ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="h-10 w-auto flex items-center bg-white/90 p-1 rounded">
              <img 
                src="/logo.png" 
                alt="Kayakam Solutions" 
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-brand-navy font-bold text-xl tracking-tight">KAYAKAM</span>';
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  isScrolled || isDarkPage ? 'text-gray-700' : 'text-gray-100 drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-gradient-to-r from-brand-royal to-brand-blue border border-transparent rounded-full shadow-lg hover:shadow-xl hover:from-brand-navy hover:to-brand-royal hover:-translate-y-0.5"
            >
              Get Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 p-2 rounded-md ${
              isScrolled || isDarkPage || mobileMenuOpen ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-brand-blue border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex justify-between items-center">
                    {link.name}
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="/#contact"
                  className="block w-full text-center px-6 py-3 text-base font-medium text-white bg-brand-blue rounded-lg shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
