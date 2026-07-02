import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden bg-[#F8FAFC] selection:bg-brand-gold selection:text-brand-navy"
    >
      {/* Subtle Animated Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-brand-navy/[0.03] blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-royal/[0.04] blur-[100px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 pt-10 lg:pt-0"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200 mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-royal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-royal"></span>
              </span>
              <span className="text-sm font-semibold text-brand-navy tracking-wide">Trusted Partner for Sustainable Growth</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-heading font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-6">
              Smart HR Consultancy & <br className="hidden md:block" />
              <span className="text-brand-royal">Hospitality Services.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed font-medium">
              We deliver end-to-end workforce solutions, reliable statutory compliance, and premier hospitality staffing to empower businesses across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-brand-navy rounded-full shadow-lg hover:shadow-xl hover:bg-brand-royal transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-navy bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-y-4 gap-x-8 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                <span>Smart Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                <span>Strong Compliance</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Illustration & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 relative hidden lg:block mt-12 lg:mt-0"
          >
            {/* Main Image Container */}
            <div className="relative w-full aspect-square max-h-[600px] ml-auto">
              <div className="absolute inset-0 rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden p-3">
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fm=webp&q=80&w=1200" 
                    alt="Professionals in a corporate office meeting representing Kayakam Solutions HR services" 
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-brand-navy/5 mix-blend-overlay"></div>
                </div>
              </div>

              {/* Floating Stat 1: HR Consultancy */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -left-12 top-20 bg-white border border-gray-100 p-5 rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-royal">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-heading font-bold text-brand-navy leading-none mb-1">HR Consultancy</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Expert HR Solutions</div>
                </div>
              </motion.div>

              {/* Floating Stat 2: Hospitality Staffing */}
              <motion.div 
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-32 bg-white border border-gray-100 p-5 rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-heading font-bold text-brand-navy leading-none mb-1">Hospitality Staffing</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Premium Staffing</div>
                </div>
              </motion.div>

              {/* Floating Stat 3: Labour Law Compliance */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-10 -bottom-6 bg-white border border-gray-100 p-4 rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-brand-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-navy leading-none mb-0.5">Labour Law Compliance</div>
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">100% Compliance</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

