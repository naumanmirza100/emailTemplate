
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DentalCallToActionEmergency = ({ onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12"
    >
      <Button
        size="lg"
        onClick={onClick}
        className="relative group overflow-hidden bg-gradient-to-r from-emergency-600 to-emergency-700 hover:from-emergency-500 hover:to-emergency-600 text-white border-0 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] text-lg px-8 py-7 h-auto rounded-full w-full sm:w-auto transition-all duration-300"
      >
        <span className="absolute inset-0 w-full h-full bg-emergency-shimmer animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        <div className="flex items-center gap-3 relative z-10">
          <div className="bg-white/20 p-2 rounded-full animate-pulse">
             <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" />
          </div>
          <div className="text-left">
             <span className="block text-xs uppercase tracking-wider opacity-90 font-medium">Emergency Line</span>
             <span className="block text-xl font-bold font-mono tracking-tight">07375064619</span>
          </div>
        </div>
      </Button>
      
      <p className="text-emergency-800/80 text-sm font-medium animate-pulse mt-2 sm:mt-0 flex items-center gap-2">
         <span className="w-2 h-2 rounded-full bg-emergency-600"></span>
         High priority line active
      </p>
    </motion.div>
  );
};

export default DentalCallToActionEmergency;
