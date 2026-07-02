import { motion } from 'motion/react';
import { Search, Calculator, FileCheck, ShieldAlert, MonitorCheck, Users } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Strategic Talent Acquisition',
    description: 'Domestic & International recruitment, contract staffing solutions, and strong HR policies for better growth.',
    features: ['Right Talent for Right Roles', 'Contract Staffing', 'HR Policies']
  },
  {
    icon: Calculator,
    title: 'Automated Payroll & Attendance',
    description: 'Accurate & timely payroll processing with hassle-free attendance management solutions.',
    features: ['Accurate Processing', 'Timely Salary', 'Hassle-Free Attendance']
  },
  {
    icon: FileCheck,
    title: 'Strategic Business Registrations',
    description: 'End-to-end registration assistance including Shops & Establishment, PF, ESIC, GST, FSSAI, MSME, and more.',
    features: ['PF, ESIC, PT', 'GST, FSSAI, MSME', 'End-to-End Support']
  },
  {
    icon: ShieldAlert,
    title: 'Compliance Audits & Risk Assessment',
    description: 'Identify compliance gaps, reduce legal & operational risks, and ensure 100% statutory compliance.',
    features: ['Identify Gaps', 'Reduce Legal Risks', '100% Compliance']
  },
  {
    icon: MonitorCheck,
    title: 'Tech-Enabled HR Solutions',
    description: 'Smarter HR through technology. Automated & efficient HR systems for improved workforce management.',
    features: ['Automated Systems', 'Improved Management', 'Smart Technology']
  },
  {
    icon: Users,
    title: 'Risk-Free Statutory Compliance',
    description: 'Labour law compliance management, legal risk reduction, and comprehensive documentation support.',
    features: ['Labour Law Management', 'Risk Reduction', 'Audit Support']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-blue font-semibold tracking-wider uppercase mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
              HR Consultancy Services
            </h3>
            <p className="text-gray-600 text-lg">
              Comprehensive HR and compliance solutions tailored to streamline your business operations and foster sustainable growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-royal opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-white/20 group-hover:text-brand-gold transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                
                <h4 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 mb-6 group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="inline-flex items-center text-brand-blue font-semibold group-hover:text-brand-gold transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
