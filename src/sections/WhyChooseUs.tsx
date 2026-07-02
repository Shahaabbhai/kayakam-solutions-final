import { motion } from 'motion/react';
import { Award, Zap, Shield, Cpu, MapPin, Users } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Professional understanding of HR operations and hospitality workforce management.'
  },
  {
    icon: Zap,
    title: 'Fast Hiring Process',
    description: 'Quick and efficient recruitment solutions to meet urgent staffing requirements.'
  },
  {
    icon: Users,
    title: 'Reliable Workforce',
    description: 'Skilled, trained, and dependable manpower solutions tailored to your specific needs.'
  },
  {
    icon: Shield,
    title: 'Compliance-Focused',
    description: 'Ensuring businesses stay legally compliant and operationally secure at all times.'
  },
  {
    icon: Cpu,
    title: 'Technology-Driven',
    description: 'Smart HR systems for efficient business management and streamlined operations.'
  },
  {
    icon: MapPin,
    title: 'Pan-India Services',
    description: 'Serving businesses, hotels, and restaurants across all major locations in India.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-blue via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-gold font-semibold tracking-wider uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              The Kayakam Advantage
            </h3>
            <p className="text-gray-300 text-lg">
              Partner with us to experience a seamless approach to HR management, statutory compliance, and talent acquisition.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-dark p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center text-brand-gold mb-6">
                <reason.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
