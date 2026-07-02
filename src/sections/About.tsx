import { motion } from 'motion/react';
import { Target, Lightbulb, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image & Cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/10" />
            </motion.div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs border-t-4 border-brand-gold"
            >
              <div className="text-brand-navy font-bold text-4xl mb-2">Excellence</div>
              <p className="text-gray-600 text-sm">Delivering quality-driven services with professionalism, trust, and long-term business support.</p>
            </motion.div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-brand-blue font-semibold tracking-wider uppercase mb-3">About Kayakam</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6 leading-tight">
                Building Teams.<br />
                <span className="text-brand-gold">Empowering Hospitality.</span>
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Kayakam Solutions is a professional HR consultancy and hospitality service provider specializing in recruitment, staffing, and statutory compliance. By combining modern tools and practical industry expertise, we provide fast, reliable, and cost-effective solutions that help businesses streamline operations and build efficient teams.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                    <Target size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-navy mb-2">Our Mission</h4>
                  <p className="text-gray-600">To connect businesses with the right talent through efficient recruitment, ensure seamless workforce management, and support hospitality ventures with skilled manpower and compliance-driven services.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-brand-gold">
                    <Lightbulb size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-navy mb-2">Our Vision</h4>
                  <p className="text-gray-600">To become a leading HR and hospitality consultancy known for excellence, trust, and delivering world-class talent solutions.</p>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
