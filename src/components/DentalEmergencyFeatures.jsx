
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  "No registration required",
  "Same-day guaranteed appointments",
  "Transparent fixed pricing",
  "Nervous patients welcome",
  "0% Finance available",
  "Full diagnostic x-rays included"
];

const DentalEmergencyFeatures = () => {
  return (
    <div className="py-8 border-t border-emergency-100/50 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-5 h-5 rounded-full bg-emergency-100 text-emergency-600 flex items-center justify-center shrink-0 group-hover:bg-emergency-600 group-hover:text-white transition-colors">
               <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className="text-emergency-900/80 text-sm font-medium group-hover:text-emergency-700 transition-colors">
               {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DentalEmergencyFeatures;
