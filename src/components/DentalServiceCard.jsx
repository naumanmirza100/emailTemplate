
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DentalServiceCard = ({ service, index, onBook }) => {
  const isComingSoon = service.status === "coming-soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full flex flex-col bg-gradient-to-br from-dental-red-50 to-white rounded-2xl border border-dental-red-100 shadow-lg hover:shadow-2xl hover:shadow-dental-red-900/10 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative top accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-dental-red-400 to-dental-red-600 opacity-80"></div>
      
      <div className="p-5 md:p-8 flex flex-col h-full relative z-10">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md border border-dental-red-100 flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
             {service.icon || "🦷"}
          </div>
          {isComingSoon && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-dental-red-100 text-dental-red-800 border border-dental-red-200">
              Coming Soon
            </span>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-dental-red-700 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        <div className="mt-auto">
          {isComingSoon ? (
            <div className="w-full py-3 px-4 rounded-lg bg-gray-50 border border-gray-100 text-gray-400 text-sm font-medium text-center cursor-not-allowed flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Available late 2026
            </div>
          ) : (
            <Button 
              onClick={() => onBook(service.title)}
              className="w-full bg-gradient-to-r from-dental-red-500 to-dental-red-600 hover:from-dental-red-600 hover:to-dental-red-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-dental-red-200 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 touch-target"
            >
              Learn More & Inquire
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Subtle background pattern/gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-dental-red-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

export default DentalServiceCard;
