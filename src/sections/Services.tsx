import { motion } from 'motion/react';
import { Target, Globe, Calculator, FileCheck, Scale, Coffee, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Strategic Talent Acquisition',
    description: 'Find the right talent for the right roles with our strategic hiring processes and robust HR policies tailored for your sustainable growth.',
  },
  {
    icon: Globe,
    title: 'Domestic & International Recruitment',
    description: 'Expert recruitment solutions bridging local expertise with global reach to build your high-performing workforce anywhere in the world.',
  },
  {
    icon: Calculator,
    title: 'Payroll & Attendance Management',
    description: 'Accurate and timely payroll processing combined with hassle-free, tech-enabled attendance management systems.',
  },
  {
    icon: FileCheck,
    title: 'Business Registrations',
    description: 'End-to-end registration assistance including Shops & Establishment, PF, ESIC, GST, FSSAI, MSME, and comprehensive documentation.',
  },
  {
    icon: Scale,
    title: 'Labour Law Compliance',
    description: 'Identify compliance gaps, minimize legal and operational risks, and ensure 100% statutory compliance with expert guidance.',
  },
  {
    icon: Coffee,
    title: 'Hospitality Staffing Solutions',
    description: 'Premier staffing and reliable workforce management specialized for the hospitality sector to help you deliver exceptional service.',
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#FAFCFF] overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-blue/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-brand-navy mb-6 tracking-tight leading-[1.1]">
              Our Professional Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Comprehensive HR, Recruitment, Compliance and Hospitality solutions designed to help businesses grow with confidence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-brand-blue/20 transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle gradient hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-brand-gold transition-colors duration-500 shadow-sm">
                  <service.icon size={28} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-navy mb-4 leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed flex-1 text-base md:text-lg">
                  {service.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 group-hover:border-brand-blue/10 transition-colors duration-300">
                  <a href="/#contact" className="inline-flex items-center text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">
                    Learn More
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
