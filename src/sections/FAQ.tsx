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
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-blue font-semibold tracking-wider uppercase mb-3">Got Questions?</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
              Frequently Asked Questions
            </h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-brand-navy pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
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
