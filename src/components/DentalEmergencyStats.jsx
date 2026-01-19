
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: "< 1 Hr",
    label: "Wait Time Target",
    subtext: "For urgent cases"
  },
  {
    icon: CheckCircle2,
    value: "100%",
    label: "Pain Relief",
    subtext: "Immediate priority"
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    label: "Support Line",
    subtext: "Always available"
  }
];

const DentalEmergencyStats = () => {
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto my-6 md:my-8 px-2">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          className="bg-white/70 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-emergency-100 shadow-sm text-center group hover:border-emergency-200 transition-colors duration-200"
        >
          <div className="mx-auto w-6 h-6 md:w-8 md:h-8 rounded-full bg-emergency-50/70 text-emergency-500 flex items-center justify-center mb-1.5 md:mb-2 group-hover:scale-105 transition-transform duration-200">
             <stat.icon className="w-3 h-3 md:w-4 h-4" strokeWidth={2} />
          </div>
          <h4 className="text-base md:text-xl font-serif font-bold text-emergency-800 mb-0">{stat.value}</h4>
          <p className="text-[10px] md:text-xs font-bold text-emergency-700 uppercase tracking-wide">{stat.label}</p>
          <p className="hidden md:block text-[10px] text-emergency-600/70 mt-1">{stat.subtext}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DentalEmergencyStats;
