import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          alt="Corporate Office"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs font-medium text-white tracking-wider uppercase">HR Consultancy & Hospitality Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Empowering Businesses With <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light">Smart HR</span> & Compliance Solutions
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              We deliver end-to-end workforce solutions for hotels, resorts, restaurants, and corporate clients across India. Build your dream team with confidence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-brand-navy bg-white rounded-full shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/30 rounded-full hover:bg-white/10 transition-all"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span>Smart HR Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span>100% Compliance</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Floating Cards & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Main Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Business Meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-royal/20 mix-blend-multiply" />
            </div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute left-0 top-20 glass-dark p-6 rounded-2xl shadow-2xl w-64 border-l-4 border-l-brand-gold backdrop-blur-xl"
            >
              <div className="text-4xl font-number font-bold text-white mb-1">500<span className="text-brand-gold">+</span></div>
              <div className="text-sm text-gray-300 font-medium tracking-wide">Satisfied Clients</div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute left-10 bottom-32 glass-dark p-6 rounded-2xl shadow-2xl w-64 border-l-4 border-l-brand-blue backdrop-blur-xl"
            >
              <div className="text-4xl font-number font-bold text-white mb-1">2500<span className="text-brand-blue">+</span></div>
              <div className="text-sm text-gray-300 font-medium tracking-wide">Successful Placements</div>
            </motion.div>

            {/* Floating Tags */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-10 top-10 glass-dark px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm text-white font-medium">Pan India Recruitment</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
    </section>
  );
}
