import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What industries does Kayakam Solutions specialize in?",
    answer: "We specialize heavily in the Hospitality sector (Hotels, Resorts, Restaurants) but also provide comprehensive HR and staffing solutions for Corporate Offices, Manufacturing, Retail, Healthcare, and Start-ups."
  },
  {
    question: "Do you provide Pan-India recruitment services?",
    answer: "Yes, we have a robust network and provide recruitment, staffing, and compliance services to businesses across all major locations in India."
  },
  {
    question: "What does your compliance audit cover?",
    answer: "Our compliance audits cover Shops & Establishment, PF, ESIC, PT, LWF registrations, GST, FSSAI, MSME support, and comprehensive Labour Law Compliance to ensure you are 100% legally secure."
  },
  {
    question: "Can you help with pre-opening hotel staff setup?",
    answer: "Absolutely. We excel in pre-opening support. We handle manpower planning, mass recruitment for all departments (Front Office, Housekeeping, F&B, Kitchen), and assist in department operational setup."
  },
  {
    question: "Do you offer automated payroll solutions?",
    answer: "Yes, we provide tech-enabled, automated payroll and attendance management systems that ensure accurate processing and timely salary disbursements for your workforce."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-blue bg-blue-50 px-3 py-1.5 rounded-sm mb-6 inline-block">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-6 tracking-tight leading-[1.1]">
              Frequently Asked <span className="text-brand-blue">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Everything you need to know about our services and process.
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                activeIndex === index 
                  ? 'border-brand-blue/30 shadow-[0_8px_30px_rgb(0,0,0,0.06)]' 
                  : 'border-gray-100 shadow-sm hover:border-brand-blue/20 hover:shadow-md'
              }`}
            >
              <button
                className="w-full px-6 py-6 md:px-8 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg md:text-xl pr-8 transition-colors duration-300 ${
                  activeIndex === index ? 'text-brand-blue' : 'text-brand-navy group-hover:text-brand-blue'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-brand-blue text-white rotate-180' 
                    : 'bg-gray-50 text-brand-navy group-hover:bg-blue-50 group-hover:text-brand-blue'
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed text-lg">
                      <div className="pt-4 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
