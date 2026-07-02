import { motion } from 'motion/react';
import { ChefHat, Building2, Users } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Hotel & Restaurant Staffing',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    features: ['Skilled Hospitality Workforce', 'Front Office & Housekeeping Staff', 'Food & Beverage Service Staff', 'Kitchen & Support Staff']
  },
  {
    icon: ChefHat,
    title: 'Pre-Opening Hotels & Restaurants',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    features: ['Manpower Planning & Recruitment', 'Department Setup & Operational Support', 'Staff Training & Development']
  },
  {
    icon: Users,
    title: 'Outsourced Manpower Solutions',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800',
    features: ['Flexible Staffing Solutions', 'Temporary & Permanent Workforce', 'Reliable Hospitality Professionals']
  }
];

export default function Hospitality() {
  return (
    <section id="hospitality" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-brand-blue font-semibold tracking-wider uppercase mb-3">Specialized Services</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
                Hospitality Solutions
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                We understand the unique demands of the hospitality industry. Our specialized staffing solutions ensure your hotel, resort, or restaurant delivers exceptional guest experiences.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-1 flex justify-start lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-navy p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="text-brand-gold font-bold text-4xl mb-2">100%</div>
              <div className="text-white text-lg font-medium">Dedication to Service Excellence</div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center text-brand-navy flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                </div>
              </div>
              
              <div className="p-8">
                <ul className="space-y-3">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
