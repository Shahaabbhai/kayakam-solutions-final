import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, Briefcase, MapPin } from 'lucide-react';

export default function Trust() {
  const trustBadges = [
    { icon: Zap, text: 'Fast Hiring' },
    { icon: ShieldCheck, text: 'Compliance Experts' },
    { icon: Users, text: 'Trusted Partner' },
    { icon: Briefcase, text: 'Hospitality Specialists' },
    { icon: MapPin, text: 'Pan India Services' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Trusted by industry leaders across India</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <badge.icon size={24} />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-brand-navy transition-colors">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
