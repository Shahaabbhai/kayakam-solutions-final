import { ArrowUp, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t-4 border-brand-gold relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="bg-white p-2 inline-block rounded mb-6">
              <img 
                src="/logo.png" 
                alt="Kayakam Solutions" 
                className="h-10 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-brand-navy font-bold text-xl tracking-tight">KAYAKAM</span>';
                }}
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Smart HR. Strong Compliance. Sustainable Growth. Delivering end-to-end workforce solutions across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors border border-white/10">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors border border-white/10">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors border border-white/10">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors border border-white/10">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Home</a></li>
              <li><a href="/#about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Our Services</a></li>
              <li><a href="/#industries" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Industries</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Contact</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Services</h4>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Talent Acquisition</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Payroll Solutions</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Statutory Compliance</a></li>
              <li><a href="/#hospitality" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Hospitality Staffing</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Business Registrations</a></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Terms & Conditions</Link></li>
              <li><Link to="/#disclaimer" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kayakam Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>ISO Certified</span>
            <span>|</span>
            <span>100% Compliant</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy shadow-lg hover:bg-brand-gold-light hover:-translate-y-1 transition-all"
        aria-label="Back to top"
      >
        <ArrowUp size={24} strokeWidth={3} />
      </button>
    </footer>
  );
}
