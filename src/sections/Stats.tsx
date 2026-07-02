import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const stats = [
  { title: 'HR Consultancy', desc: 'Expert Workforce Solutions' },
  { title: 'Hospitality Staffing', desc: 'Premium Industry Talent' },
  { title: 'Labour Law Compliance', desc: '100% Statutory Adherence' },
  { title: 'Payroll & Documentation', desc: 'Accurate & Timely Processing' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-dark p-8 rounded-2xl border-t-4 border-brand-gold"
            >
              <div className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                {stat.title}
              </div>
              <div className="text-sm md:text-base font-medium text-brand-gold-light uppercase tracking-wider">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
