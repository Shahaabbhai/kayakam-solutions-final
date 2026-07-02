import { motion } from 'motion/react';
import { Target, Lightbulb, Users, MapPin, ShieldCheck, Coffee } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Users, title: 'Experienced HR Professionals' },
    { icon: MapPin, title: 'Pan India Recruitment' },
    { icon: ShieldCheck, title: 'Compliance Experts' },
    { icon: Coffee, title: 'Hospitality Specialists' }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAFCFF] relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 bg-brand-blue/[0.03] rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 bg-white p-2"
            >
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-[1.5rem] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fm=webp&q=80&w=1200" 
                  alt="Professional Team at Kayakam Solutions" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-brand-navy/5 mix-blend-overlay" />
              </div>
            </motion.div>

            {/* Glowing backdrop for image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue/10 rounded-[3rem] blur-[60px] -z-10" />
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-blue bg-blue-50 px-3 py-1.5 rounded-sm">
                  About Kayakam Solutions
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-6 leading-[1.15] tracking-tight"
              >
                Your Trusted HR & <br className="hidden sm:block" />
                <span className="text-brand-royal">Hospitality Partner</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-10 leading-relaxed"
              >
                Kayakam Solutions is a premier professional HR consultancy and hospitality service provider specializing in strategic recruitment, enterprise staffing, and 100% statutory compliance. We leverage modern methodologies and deep industry expertise to deliver fast, reliable, and cost-effective solutions that streamline operations and build high-performing teams for sustainable growth.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <feature.icon size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-royal to-brand-blue flex items-center justify-center text-white mb-8 shadow-md">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To connect ambitious businesses with the right talent through efficient recruitment, ensure seamless workforce management, and support enterprises with skilled manpower and highly compliant HR services.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-brand-gold flex items-center justify-center text-white mb-8 shadow-md">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become India's leading corporate HR and hospitality consultancy universally recognized for absolute excellence, unshakeable trust, and delivering world-class talent and compliance solutions.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
