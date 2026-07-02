import { motion } from 'motion/react';
import { MessageSquare, Search, FileText, Users, FileCheck, CheckCircle } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Requirement Discussion', desc: 'Understanding your specific hiring needs and company culture.' },
  { icon: Search, title: 'Candidate Sourcing', desc: 'Leveraging our vast network to find the perfect match.' },
  { icon: FileText, title: 'Screening', desc: 'Rigorous vetting of skills, experience, and background.' },
  { icon: Users, title: 'Interview', desc: 'Coordinating interviews between clients and shortlisted candidates.' },
  { icon: FileCheck, title: 'Documentation', desc: 'Handling all necessary paperwork and compliance checks.' },
  { icon: CheckCircle, title: 'Placement', desc: 'Successful onboarding and post-placement support.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-blue font-semibold tracking-wider uppercase mb-3">How We Work</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
              Our Recruitment Process
            </h3>
            <p className="text-gray-600 text-lg">
              A streamlined, transparent, and effective approach to finding the right talent for your organization.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-brand-navy flex items-center justify-center text-brand-blue mb-6 relative z-10 group hover:border-brand-gold hover:scale-110 transition-all duration-300">
                  <step.icon size={24} className="group-hover:text-brand-gold transition-colors" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold text-brand-navy text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
                
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="w-1 h-8 bg-brand-blue/20 my-2 lg:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
