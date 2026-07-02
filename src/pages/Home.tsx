import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Trust from '../sections/Trust';
import About from '../sections/About';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import Process from '../sections/Process';
import Hospitality from '../sections/Hospitality';
import Industries from '../sections/Industries';
import Stats from '../sections/Stats';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { hash } = useLocation();

  useEffect(() => {
    // Simulate loading screen only on initial load
    if (sessionStorage.getItem('hasLoaded')) {
      setLoading(false);
      return;
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasLoaded', 'true');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash, loading]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-navy"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 mb-8 bg-white p-4 rounded-2xl flex items-center justify-center shadow-2xl">
                <img src="/logo.png" alt="Kayakam Solutions" className="w-full h-auto" onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-brand-navy font-bold text-2xl">KAYAKAM</span>';
                }} />
              </div>
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-1 bg-brand-gold w-48 rounded-full overflow-hidden"
              >
                <div className="h-full w-full bg-brand-gold-light opacity-50" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />
      <Trust />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Hospitality />
      <Industries />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
