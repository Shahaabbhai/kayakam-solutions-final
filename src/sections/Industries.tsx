import { motion } from 'motion/react';
import { Building, Coffee, Factory, ShoppingBag, Stethoscope, Briefcase, GraduationCap, MonitorSmartphone } from 'lucide-react';

const industries = [
  { icon: Building, name: 'Hotels & Resorts' },
  { icon: Coffee, name: 'Restaurants & Cafes' },
  { icon: Briefcase, name: 'Corporate Offices' },
  { icon: Factory, name: 'Manufacturing Units' },
  { icon: ShoppingBag, name: 'Retail Businesses' },
  { icon: MonitorSmartphone, name: 'Start-ups & SMEs' },
  { icon: Building, name: 'Facility Management' },
  { icon: Stethoscope, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-blue font-semibold tracking-wider uppercase mb-3">Our Reach</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
              Industries We Serve
            </h3>
            <p className="text-gray-600 text-lg">
              Providing specialized workforce and compliance solutions across diverse sectors to power your business growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 mb-4">
                <industry.icon size={28} />
              </div>
              <h4 className="font-semibold text-gray-800 group-hover:text-brand-blue transition-colors duration-300">
                {industry.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
