import { motion } from 'motion/react';
import { ShieldCheck, Clock, HeartHandshake, Briefcase, CheckCircle2 } from 'lucide-react';

const commitments = [
  {
    icon: Briefcase,
    title: 'Uncompromising Professionalism',
    content: 'We adhere to the highest standards of corporate integrity, ensuring every interaction, placement, and process is handled with absolute professionalism.'
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    content: 'As a newly established consultancy, we provide dedicated, hands-on attention to every client. Your business goals become our primary focus.'
  },
  {
    icon: ShieldCheck,
    title: '100% Statutory Compliance',
    content: 'We navigate complex labor laws and regulations so you do not have to, guaranteeing full legal adherence for your peace of mind.'
  },
  {
    icon: Clock,
    title: 'Rapid Responsiveness',
    content: 'Agility is our strength. We pride ourselves on quick turnaround times, proactive communication, and swift resolution to all staffing needs.'
  },
  {
    icon: CheckCircle2,
    title: 'Dedicated Support',
    content: 'We are more than just a vendor; we are your strategic partner. Our team offers continuous support to ensure seamless workforce operations.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFCFF] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-brand-blue/[0.02] rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold bg-amber-50 px-3 py-1.5 rounded-sm mb-6 inline-block">
              Our Promise
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-6 tracking-tight leading-[1.1]">
              Why Choose <br className="hidden md:block" />
              <span className="text-brand-blue">Kayakam Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              As a dynamic new agency, we bring fresh energy, unparalleled dedication, and a modernized approach to HR and Hospitality solutions.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand-royal to-brand-blue rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
