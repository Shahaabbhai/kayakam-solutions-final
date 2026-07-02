import { motion } from 'motion/react';
import { Award, Zap, ShieldCheck, Cpu, Users, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Deep understanding of corporate HR operations and specialized hospitality workforce management.'
  },
  {
    icon: Zap,
    title: 'Fast Recruitment',
    description: 'Rapid, efficient recruitment methodologies to meet urgent enterprise staffing requirements.'
  },
  {
    icon: Users,
    title: 'Verified Candidates',
    description: 'Skilled, thoroughly vetted, and dependable manpower tailored precisely to your needs.'
  },
  {
    icon: ShieldCheck,
    title: '100% Compliance Support',
    description: 'Ensuring your business stays legally compliant and operationally secure at all times.'
  },
  {
    icon: Cpu,
    title: 'Technology Driven HR',
    description: 'Leveraging smart systems for seamless payroll, attendance, and workforce management.'
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Client Support',
    description: 'Continuous engagement and dedicated relationship managers for long-term success.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Premium Decorative Background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-brand-blue/[0.02] rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold bg-amber-50 px-3 py-1.5 rounded-sm mb-6 inline-block">
              The Kayakam Advantage
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-brand-navy mb-6 tracking-tight leading-[1.1]">
              Why Businesses Choose <br className="hidden md:block" />
              <span className="text-brand-blue">Kayakam Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Partner with us to experience a seamless, technology-driven approach to strategic HR management and talent acquisition.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-white p-8 md:p-10 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-brand-navy mb-8 group-hover:from-brand-gold group-hover:to-amber-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                  <reason.icon size={32} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-navy mb-4 leading-snug group-hover:text-brand-blue transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
