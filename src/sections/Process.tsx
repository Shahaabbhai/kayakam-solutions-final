import { motion } from 'motion/react';
import { Target, Search, ShieldCheck, Users, FileCheck, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Target, title: 'Requirement Analysis', desc: 'Understanding your specific enterprise hiring needs and core company culture.' },
  { icon: Search, title: 'Candidate Sourcing', desc: 'Leveraging our vast network and methodologies to find the perfect match.' },
  { icon: ShieldCheck, title: 'Screening & Verification', desc: 'Rigorous vetting of skills, professional experience, and background.' },
  { icon: Users, title: 'Client Interviews', desc: 'Seamlessly coordinating interviews between clients and shortlisted candidates.' },
  { icon: FileCheck, title: 'Documentation & Compliance', desc: 'Handling all necessary legal paperwork and strict statutory compliance checks.' },
  { icon: CheckCircle, title: 'Successful Placement', desc: 'Ensuring smooth onboarding and providing dedicated post-placement support.' },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-blue/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-blue bg-blue-50 px-3 py-1.5 rounded-sm mb-6 inline-block">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-6 tracking-tight leading-[1.1]">
              The Recruitment Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              A streamlined, highly transparent, and effective approach to securing the top-tier talent your organization needs to thrive.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Desktop Animated Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-[2px] bg-gray-100 hidden lg:block" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-brand-blue/0 via-brand-blue to-brand-blue/0 hidden lg:block origin-left" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step Icon Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-white/50 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] flex items-center justify-center relative z-10 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:border-brand-blue/20 transition-all duration-500">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-royal to-brand-blue flex items-center justify-center text-white shadow-inner">
                      <step.icon size={28} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-gray-100 text-brand-navy text-sm font-bold rounded-full flex items-center justify-center shadow-md z-20 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold transition-colors duration-500">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-white/50 backdrop-blur-sm border border-transparent group-hover:border-gray-50 p-4 rounded-2xl transition-colors duration-500 h-full flex flex-col">
                  <h3 className="text-lg font-bold text-brand-navy mb-3 leading-snug group-hover:text-brand-blue transition-colors">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{step.desc}</p>
                </div>
                
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="w-[2px] h-12 bg-gradient-to-b from-brand-blue/20 to-transparent my-4 lg:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
