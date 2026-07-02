import { motion } from 'motion/react';
import { ChefHat, Building2, Users, UtensilsCrossed, Store, Sparkles, UserCircle, Coffee, Wine } from 'lucide-react';

const hospitalityServices = [
  { name: 'Hotels', icon: Building2 },
  { name: 'Resorts', icon: Sparkles },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Cafes', icon: Coffee },
  { name: 'Cloud Kitchens', icon: Store },
  { name: 'Banquet Operations', icon: Wine },
  { name: 'Housekeeping', icon: Users },
  { name: 'Front Office', icon: UserCircle },
  { name: 'Kitchen Staff', icon: ChefHat },
  { name: 'F&B Service', icon: UtensilsCrossed }
];

export default function Hospitality() {
  return (
    <section id="hospitality" className="py-24 lg:py-32 bg-[#FAFCFF] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold bg-amber-50 px-3 py-1.5 rounded-sm mb-6 inline-block border border-brand-gold/20">
                Luxury & Service
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-brand-navy mb-8 tracking-tight leading-[1.1]">
                Premium Hospitality <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-600">Staffing Solutions</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                We understand the exacting standards of the luxury hospitality industry. Our specialized staffing solutions ensure your establishment consistently delivers impeccable guest experiences through a meticulously vetted and highly trained workforce.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                {hospitalityServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-brand-gold/30 transition-all duration-300 group"
                  >
                    <div className="text-brand-gold group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={18} />
                    </div>
                    <span className="text-sm font-semibold text-brand-navy">{service.name}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-navy bg-gradient-to-r from-brand-gold to-amber-500 rounded-full shadow-[0_8px_20px_rgba(245,158,11,0.25)] hover:shadow-[0_12px_25px_rgba(245,158,11,0.35)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold group"
              >
                Request Hospitality Staffing
              </motion.a>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold/10 rounded-[2.5rem] -rotate-3 scale-105 transform origin-center" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-white/50 bg-white p-2">
                <div className="relative w-full h-[500px] lg:h-[700px] rounded-[1.5rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fm=webp&q=80&w=1200" 
                    alt="Professional luxury hotel staff member representing Kayakam's hospitality staffing services" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                      <div className="text-3xl font-heading font-bold text-white mb-1">100%</div>
                      <div className="text-brand-gold font-medium">Dedication to Service Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
