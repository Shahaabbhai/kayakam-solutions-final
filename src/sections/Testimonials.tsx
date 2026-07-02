import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Kayakam Solutions has transformed our hiring process. Their deep understanding of the hospitality sector meant we got staff who were perfectly aligned with our luxury brand standards.",
    name: "Rajesh Kumar",
    designation: "General Manager",
    company: "Grand Horizon Hotels",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    content: "Their compliance management services are top-notch. Since partnering with Kayakam, we have had zero compliance issues, and our payroll processes are completely automated and error-free.",
    name: "Priya Sharma",
    designation: "HR Director",
    company: "TechNova Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    content: "Setting up a new restaurant is chaotic, but Kayakam provided us with an entire pre-opening team within weeks. Highly professional and deeply reliable.",
    name: "Vikram Mehta",
    designation: "Founder",
    company: "Spice Route Dining",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-blue font-semibold tracking-wider uppercase mb-3">Client Success</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
              What Our Clients Say
            </h3>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-brand-blue/10 transform -translate-x-1/2 -translate-y-1/2">
            <Quote size={120} />
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 font-medium mb-10 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold shadow-md"
                  />
                  <div className="text-left">
                    <div className="font-bold text-brand-navy text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentIndex].designation}, {testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
