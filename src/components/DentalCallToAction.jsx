
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CalendarCheck } from 'lucide-react';

const DentalCallToAction = () => {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6 overflow-hidden bg-[rgb(var(--navy-dark))] text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 opacity-10">
         <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-[rgb(var(--gold))]"></div>
         <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full border border-[rgb(var(--sage))]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl"
        >
          <h2 className="text-2xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-white">
            Ready to transform your smile?
          </h2>
          <p className="text-sm md:text-xl text-[rgb(var(--gray-light))] mb-6 md:mb-8 font-light max-w-2xl mx-auto">
            Prioritize your dental health today. Use our exclusive holiday code for premium savings on all private treatments.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
             <div className="w-full md:w-auto flex flex-col items-center bg-white/10 rounded-xl px-6 py-3 border border-white/10">
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-[rgb(var(--gold))] mb-1">Promo Code</span>
                <span className="text-xl md:text-2xl font-bold font-mono text-white">XMAS25</span>
             </div>
             
             <Button variant="premium" size="lg" className="w-full md:w-auto h-14 md:h-20 px-8 md:px-10 text-lg md:text-xl">
               <CalendarCheck className="mr-3 w-5 h-5 md:w-6 md:h-6" />
               Book Your Appointment
             </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DentalCallToAction;
