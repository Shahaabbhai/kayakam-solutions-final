import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-blue font-semibold tracking-wider uppercase mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
              Let's Build a Stronger Tomorrow
            </h3>
            <p className="text-gray-600 text-lg">
              Reach out for expert advice, timely delivery, and results-driven HR solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Left - Contact Info & Map */}
          <div className="p-8 md:p-12 bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-screen filter blur-[80px] opacity-50" />
            
            <h4 className="text-3xl font-heading font-bold mb-8 relative z-10">Contact Information</h4>
            
            <div className="space-y-8 relative z-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1 text-white">Office Address</h5>
                  <p className="text-gray-300 leading-relaxed">
                    #61, 3rd Floor, Opp HP Petrol Bunk<br />
                    Surya Bakery Road, Vijayanagara 2nd Stage,<br />
                    Mysuru – 570016
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1 text-white">Phone Number</h5>
                  <p className="text-gray-300">+91 9731822789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1 text-white">Email Address</h5>
                  <p className="text-gray-300">info@kayakamsolutions.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/20">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1 text-white">Working Hours</h5>
                  <p className="text-gray-300">Mon - Sat: 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-brand-navy/80 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                  View on Google Maps
                </span>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="p-8 md:p-12 bg-white">
            <h4 className="text-2xl font-bold text-brand-navy mb-6">Send Us a Message</h4>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-gray-50 hover:bg-white focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-gray-50 hover:bg-white focus:bg-white"
                    placeholder="+91 xxxxx xxxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="Your Organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-gray-50 hover:bg-white focus:bg-white resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-brand-royal to-brand-blue text-white font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
