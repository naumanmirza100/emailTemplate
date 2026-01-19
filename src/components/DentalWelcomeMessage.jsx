
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const DentalWelcomeMessage = () => {
  return (
    <section className="relative py-10 md:py-20 px-4 md:px-6 overflow-hidden bg-[rgb(var(--cream))]">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
             <Star className="w-3 h-3 md:w-4 md:h-4 text-[rgb(var(--gold))]" fill="currentColor" />
             <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[rgb(var(--navy-dark))]/60">World Class Care</span>
             <Star className="w-3 h-3 md:w-4 md:h-4 text-[rgb(var(--gold))]" fill="currentColor" />
          </div>
          
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-[rgb(var(--navy-dark))] mb-4 md:mb-6 leading-tight">
             Experience the highest standard <br/>
             of <span className="relative inline-block text-[rgb(var(--gold))] md:text-inherit">
               dental excellence
             </span>.
          </h2>
          
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light px-2">
             We combine state-of-the-art technology with a compassionate approach to provide you with a dental experience that is as comfortable as it is effective.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DentalWelcomeMessage;
