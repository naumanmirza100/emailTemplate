
import React from 'react';
import { motion } from 'framer-motion';
import DentalCallToActionEmergency from './DentalCallToActionEmergency';
import DentalEmergencyStats from './DentalEmergencyStats';
import DentalEmergencyFeatures from './DentalEmergencyFeatures';
import DentalEmergencyDentalServices from './DentalEmergencyDentalServices';

const DentalEmergencyServices = ({ onBook }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero / Intro Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-emergency-50 via-white to-gray-50">
        {/* Atmospheric Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emergency-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emergency-100/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emergency-100 border border-emergency-200 text-emergency-800 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emergency-600 animate-pulse"></span>
              Priority Emergency Service
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-bold text-emergency-950 mb-6 leading-tight"
            >
              Don't Suffer in Silence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emergency-600 to-emergency-800">
                Immediate Care Available.
              </span>
            </motion.h2>

            <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-lg md:text-xl text-emergency-900/70 font-light leading-relaxed"
            >
               Bolton Road Dental Practice specializes in rapid-response emergency dentistry. 
               We prioritize your comfort and pain relief above all else.
            </motion.p>
          </div>

          {/* Stats Section */}
          <DentalEmergencyStats />
          
          {/* Top CTA */}
          <DentalCallToActionEmergency onClick={() => onBook('Emergency Hero Banner')} />

        </div>
      </section>

      {/* Full Services Grid Section */}
      <DentalEmergencyDentalServices onBook={onBook} />

      {/* Features Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-emergency-50 to-white rounded-3xl p-6 md:p-12 shadow-xl shadow-emergency-900/5 border border-emergency-100 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-emergency-900 mb-4">Why Choose Our Emergency Service?</h3>
                 <p className="text-emergency-800/70 mb-8">We combine clinical excellence with compassionate care to ensure your dental emergency is resolved quickly and comfortably.</p>
                 <DentalEmergencyFeatures />
              </div>
              <div className="hidden md:block relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81?auto=format&fit=crop&q=80" 
                    alt="Professional Dental Care" 
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-medium">State-of-the-art Facilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DentalEmergencyServices;
