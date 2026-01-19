
import React from 'react';
import DentalServiceCard from './DentalServiceCard';
import { motion } from 'framer-motion';

const DentalEmergencyDentalServices = ({ onBook }) => {
  const services = [
    {
      title: "Severe Toothache",
      description: "Rapid relief for intense, throbbing pain. We diagnose the root cause—decay, infection, or trauma—and provide immediate comfort.",
      icon: "⚡"
    },
    {
      title: "Surgical Extractions",
      description: "Safe, sterile removal of damaged teeth that cannot be saved. Expert care to minimize discomfort and promote quick healing.",
      icon: "🦷"
    },
    {
      title: "Broken or Chipped Tooth",
      description: "Cosmetic and structural repair for fractured teeth using high-strength bonding or veneers to restore your smile instantly.",
      icon: "🔧"
    },
    {
      title: "Emergency Dentures",
      description: "Quick repairs for broken dentures or temporary replacements to ensure you're never without your smile.",
      icon: "😁"
    },
    {
      title: "Wisdom Tooth Pain",
      description: "Specialized management of impacted wisdom teeth causing swelling, pain, or infection, including surgical removal if needed.",
      icon: "🤕"
    },
    {
      title: "Lost Tooth or Filling",
      description: "Urgent replacement of lost fillings or re-implantation of knocked-out teeth. Time is critical for saving natural teeth.",
      icon: "⏳"
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced therapy to save infected teeth. We remove the infection and seal the tooth, relieving pain while preserving your natural bite.",
      icon: "🔬"
    },
    {
      title: "Dental Abscess & Trauma",
      description: "Immediate intervention for severe infections and facial swelling. We drain abscesses and prescribe antibiotics to prevent spread.",
      icon: "💊"
    },
    {
      title: "Lost Crowns & Veneers",
      description: "Re-cementing or replacing dislodged restorative work to protect exposed sensitive tooth structure and restore aesthetics.",
      icon: "👑"
    },
    {
      title: "Digital Smile Design",
      description: "Future-ready cosmetic planning using AI and 3D imaging to preview your perfect smile before treatment begins.",
      icon: "✨",
      status: "coming-soon"
    },
    {
      title: "Emergency Teledentistry",
      description: "Virtual consultations for initial triage and advice, perfect for when you can't make it to the clinic immediately.",
      icon: "📱"
    },
    {
      title: "Pediatric Emergencies",
      description: "Gentle, specialized emergency care for children. We handle knocked-out baby teeth, falls, and toothaches with extra care.",
      icon: "🧸"
    },
    {
      title: "Aesthetic Temporaries",
      description: "High-quality temporary solutions for missing front teeth so you can smile with confidence while waiting for permanent restorations.",
      icon: "🎨"
    },
    {
      title: "In-Clinic Sedation",
      description: "Anxiety-free emergency treatment options including IV sedation for nervous patients undergoing urgent procedures.",
      icon: "😴"
    },
    {
      title: "TMJ & Lockjaw",
      description: "Urgent management of jaw joint pain, locking, or dislocation to restore movement and relieve acute muscle spasms.",
      icon: "🤐"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50" id="services-list">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-dental-red-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block"
          >
            Comprehensive Care
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Emergency Dental <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-red-500 to-dental-red-700">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            From severe toothaches to cosmetic repairs, our specialist team is equipped to handle the full spectrum of dental emergencies.
          </motion.p>
          <div className="w-24 h-1 bg-dental-red-200 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <DentalServiceCard 
              key={index}
              service={service}
              index={index}
              onBook={onBook}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DentalEmergencyDentalServices;
