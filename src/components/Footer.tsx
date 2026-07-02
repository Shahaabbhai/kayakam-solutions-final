import { ArrowUp, Facebook, Linkedin, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1128] text-white pt-24 pb-12 border-t-[6px] border-brand-gold relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">Subscribe to our Newsletter</h3>
            <p className="text-gray-400">Stay updated with the latest HR trends, compliance updates, and hospitality insights.</p>
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute left-4 text-gray-400">
                <Mail size={20} />
              </div>
              <input 
                type="email" 
                aria-label="Email Address for Newsletter"
                placeholder="Enter your email address" 
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-36 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                required
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-brand-gold text-brand-navy font-bold px-6 rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="bg-white p-3 inline-block rounded-xl mb-6 shadow-lg">
              <img 
                src="/logo.png" 
                alt="Kayakam Solutions" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg pr-4">
              Smart HR. Strong Compliance. Sustainable Growth. Delivering premium end-to-end workforce solutions for corporate enterprises and luxury hospitality.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-blue hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-blue hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-blue hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-blue hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li><a href="/#home" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Home</a></li>
              <li><a href="/#about" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Services</a></li>
              <li><a href="/#industries" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Industries</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Contact</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-white">Core Services</h3>
            <ul className="space-y-4">
              <li><a href="/#services" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Talent Acquisition</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Payroll Solutions</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Statutory Compliance</a></li>
              <li><a href="/#hospitality" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Hospitality Staffing</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Enterprise Operations</a></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white">Legal Information</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Terms of Service</Link></li>
              <li><Link to="/#disclaimer" className="text-gray-400 hover:text-brand-gold flex items-center gap-2 group transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" /> Legal Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Kayakam Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span> ISO Certified</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> 100% Compliant</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-7 right-8 md:right-16 w-14 h-14 bg-gradient-to-br from-brand-gold to-amber-500 rounded-full flex items-center justify-center text-brand-navy shadow-[0_10px_25px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.6)] hover:-translate-y-2 transition-all duration-300 z-50 border-4 border-[#0A1128]"
        aria-label="Back to top"
      >
        <ArrowUp size={24} strokeWidth={3} />
      </button>
    </footer>
  );
}
