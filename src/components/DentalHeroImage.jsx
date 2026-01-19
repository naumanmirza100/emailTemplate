
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

const DentalHeroImage = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-screen min-h-[450px] overflow-hidden flex items-center justify-center bg-[rgb(var(--navy-dark))]">
      {/* Background Image with Parallax-like fix */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 md:opacity-100"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1676536162760-aa58b48d2e89?q=80&w=2670&auto=format&fit=crop')",
        }}
      >
        {/* Premium Overlay - Navy to Charcoal Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--navy-dark))]/90 via-[rgb(var(--navy-dark))]/70 to-[rgb(var(--navy-dark))]/95 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[rgb(var(--navy-dark))]/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 md:gap-8"
        >
          {/* Logo / Brand Mark */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-16 h-16 md:w-28 md:h-28 bg-white/10 backdrop-blur-md rounded-full border border-[rgb(var(--gold))]/30 flex items-center justify-center mb-2 md:mb-4 shadow-xl"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/e4b903d4-b994-403f-b219-13820e93bf71/869c87c9edab93b02e47fc143809cdc2.png" 
              alt="Logo" 
              className="w-10 h-10 md:w-20 md:h-20 object-contain drop-shadow-lg"
            />
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
          >
             <h2 className="text-[rgb(var(--gold))] text-xs md:text-lg tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium mb-2 md:mb-4">
               Excellence in Dentistry
             </h2>
             <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-tight md:leading-[1.1]">
               Bolton Road <br/>
               <span className="italic font-light text-[rgb(var(--cream))]">Dental Practice</span>
             </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xs md:max-w-xl mx-auto text-sm md:text-xl text-[rgb(var(--gray-light))] leading-relaxed font-light mt-2 md:mt-4"
          >
            Emergency & private dental care. 
            <span className="block md:inline"> Same-day appointments available.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 w-full sm:w-auto px-4 sm:px-0"
          >
             <Button variant="premium" size="lg" className="w-full sm:w-auto gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-base md:text-lg py-6 md:py-7">
               <Phone className="w-5 h-5" />
               Emergency: 07375064619
             </Button>
             <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10 gap-2 text-base md:text-lg py-6 md:py-7">
               <Calendar className="w-5 h-5" />
               Book Consultation
             </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-[rgb(var(--background))] to-transparent"></div>
    </div>
  );
};

export default DentalHeroImage;
