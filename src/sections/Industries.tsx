import { motion } from 'motion/react';
import { Building, Coffee, Factory, ShoppingBag, Stethoscope, Briefcase, GraduationCap, MonitorSmartphone, PackageOpen, HardHat } from 'lucide-react';

const industries = [
  { icon: Building, name: 'Hotels', desc: 'Luxury and business accommodation staffing.' },
  { icon: Coffee, name: 'Restaurants', desc: 'F&B, culinary, and service professionals.' },
  { icon: Stethoscope, name: 'Healthcare', desc: 'Administrative and support medical staff.' },
  { icon: ShoppingBag, name: 'Retail', desc: 'Store management and customer service teams.' },
  { icon: Factory, name: 'Manufacturing', desc: 'Skilled workforce for production operations.' },
  { icon: Briefcase, name: 'Corporate Offices', desc: 'Executive, administrative, and operations talent.' },
  { icon: GraduationCap, name: 'Education', desc: 'Institutional support and faculty staffing.' },
  { icon: MonitorSmartphone, name: 'Facility Management', desc: 'Comprehensive property and facility services.' },
  { icon: HardHat, name: 'Construction', desc: 'Engineering and project management professionals.' },
  { icon: PackageOpen, name: 'Logistics', desc: 'Supply chain and distribution workforce.' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-blue bg-blue-50 px-3 py-1.5 rounded-sm mb-6 inline-block">
              Sector Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-6 tracking-tight leading-[1.1]">
              Industries We Serve
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Delivering highly specialized workforce and meticulous compliance solutions engineered for diverse corporate sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-white rounded-[1.5rem] p-6 text-center border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-brand-blue/20 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-1 flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-navy group-hover:bg-gradient-to-br group-hover:from-brand-royal group-hover:to-brand-blue group-hover:text-white transition-all duration-500 mb-5 shadow-sm group-hover:shadow-md">
                  <industry.icon size={24} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors duration-300 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                  {industry.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
