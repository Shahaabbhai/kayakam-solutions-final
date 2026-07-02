import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Generate WhatsApp message
    const message = `Hello Kayakam Solutions,

I would like to enquire about your HR & Hospitality services.

Name: ${formData.name}
Company: ${formData.company || 'N/A'}
Phone: ${formData.phone}
Email: ${formData.email}
Service Required: ${formData.service}
Message: ${formData.message}

Please contact me at your earliest convenience.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '919731822789';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FAFCFF] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-blue/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-blue bg-blue-50 px-3 py-1.5 rounded-sm mb-6 inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-brand-navy mb-6 tracking-tight leading-[1.1]">
              Let's Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal to-brand-blue">Stronger Tomorrow</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Reach out for expert advice, timely delivery, and results-driven HR solutions. We aim to respond to all inquiries within 2 hours.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
          
          {/* Left - Contact Info & Map */}
          <div className="p-8 md:p-12 lg:p-16 bg-brand-navy text-white relative overflow-hidden flex flex-col justify-between">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full mix-blend-screen filter blur-[120px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-10 text-white tracking-tight">Contact Information</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 shadow-inner">
                    <MapPin size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-lg mb-2 text-white">Head Office</h4>
                    <p className="text-gray-300 leading-relaxed">
                      #61, 3rd Floor, Opp HP Petrol Bunk<br />
                      Surya Bakery Road, Vijayanagara 2nd Stage,<br />
                      Mysuru – 570016
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 shadow-inner">
                    <Phone size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-lg mb-2 text-white">Direct Line</h4>
                    <p className="text-gray-300 text-lg">+91 97318 22789</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 shadow-inner">
                    <Mail size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-lg mb-2 text-white">Email Desk</h4>
                    <p className="text-gray-300">info@kayakamsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/10 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 shadow-inner">
                    <Clock size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-lg mb-2 text-white">Business Hours</h4>
                    <p className="text-gray-300">Monday - Saturday<br />9:30 AM - 6:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <div className="mt-auto">
              <a 
                href="https://maps.app.goo.gl/W5Wjx3XdywqtwADq7"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 w-full h-48 bg-white/5 rounded-[1.5rem] border border-white/10 overflow-hidden group block mb-4"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fm=webp&q=80&w=800')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy shadow-[0_0_20px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} />
                  </div>
                </div>
              </a>
              <a 
                href="https://maps.app.goo.gl/W5Wjx3XdywqtwADq7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl text-base font-semibold backdrop-blur-md border border-white/20 transition-colors shadow-lg flex items-center justify-center gap-2 group"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center">
            <h3 className="text-3xl font-heading font-bold text-brand-navy mb-2 tracking-tight">Send a Message</h3>
            <p className="text-gray-500 mb-8 font-medium">We usually respond within 2 hours during business days.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'} transition-all outline-none bg-gray-50/50 hover:bg-gray-50 focus:bg-white font-medium`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'} transition-all outline-none bg-gray-50/50 hover:bg-gray-50 focus:bg-white font-medium`}
                    placeholder="+91 xxxxx xxxxx"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'} transition-all outline-none bg-gray-50/50 hover:bg-gray-50 focus:bg-white font-medium`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none bg-gray-50/50 hover:bg-gray-50 focus:bg-white font-medium"
                    placeholder="Your Organization"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Service Required <span className="text-red-500">*</span></label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.service ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'} transition-all outline-none bg-gray-50/50 hover:bg-gray-50 focus:bg-white font-medium appearance-none`}
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="HR Consultancy">HR Consultancy</option>
                    <option value="Hospitality Staffing">Hospitality Staffing</option>
                    <option value="Labour Law Compliance">Labour Law Compliance</option>
                    <option value="Payroll & Documentation">Payroll & Documentation</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">How can we help you? <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'} transition-all outline-none bg-gray-50/50 hover:bg-gray-50 focus:bg-white resize-none font-medium`}
                  placeholder="Tell us about your requirements..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit"
                  className="flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-royal to-brand-blue text-white font-bold text-lg hover:shadow-[0_8px_25px_rgba(23,60,135,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <a 
                  href="https://wa.me/919731822789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-4 px-8 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-lg hover:shadow-[0_8px_25px_rgba(37,211,102,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group border border-[#25D366]/20"
                >
                  <MessageCircle size={24} />
                  WhatsApp
                </a>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

