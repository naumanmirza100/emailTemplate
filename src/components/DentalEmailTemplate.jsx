import React from 'react';
import { Phone, Mail } from 'lucide-react';
import DentalHeroImage from '@/components/DentalHeroImage';
import DentalWelcomeMessage from '@/components/DentalWelcomeMessage';
import DentalCallToAction from '@/components/DentalCallToAction';
import DentalEmergencyServices from '@/components/DentalEmergencyServices';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

const DentalEmailTemplate = () => {
  const { toast } = useToast();

  const handleLearnMore = (serviceName) => {
    toast({
      title: "Premium Service Inquiry",
      description: `We've noted your interest in ${serviceName}. A specialist will guide you through the booking process using code XMAS25.`,
      duration: 6000,
    });
  };

  return (
    <div className="bg-[rgb(var(--background))] min-h-screen font-sans flex flex-col">
      
      {/* Mobile-Optimized Top Bar */}
      <div className="bg-[rgb(var(--navy-dark))] text-white py-2 md:py-3 px-4 border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center text-xs md:text-sm font-medium tracking-wide">
          <span className="opacity-90 font-serif italic text-[rgb(var(--gold))] md:text-white md:font-sans md:not-italic md:opacity-80">Bolton Road Dental</span>
          <div className="flex gap-4">
             <a href="tel:07375064619" className="flex items-center gap-1.5 hover:text-[rgb(var(--gold))] transition-colors">
                <Phone className="w-3 h-3 text-[rgb(var(--gold))]" /> 
                <span>24/7 Support</span>
             </a>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <DentalHeroImage />
      <DentalWelcomeMessage />

      {/* Premium Emergency Section */}
      <DentalEmergencyServices onBook={() => handleLearnMore('Emergency Section')} />
      
      <DentalCallToAction />

      {/* Footer */}
      <footer className="bg-[rgb(var(--navy-dark))] text-white pt-12 pb-8 md:pt-20 md:pb-10 border-t border-[rgb(var(--gold))]/30">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
              <div className="col-span-1 md:col-span-2">
                 <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 text-white">Bolton Road <span className="text-[rgb(var(--gold))]">.</span></h3>
                 <p className="text-[rgb(var(--gray-light))] max-w-md font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    Setting the standard for private and emergency dental care in the North West.
                 </p>
              </div>
              
              <div>
                 <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-[rgb(var(--gold))] uppercase tracking-wider text-xs">Contact</h4>
                 <ul className="space-y-3 md:space-y-4 text-[rgb(var(--gray-light))] font-light text-sm md:text-base">
                    <li className="flex items-start gap-3">
                       <Phone className="w-4 h-4 md:w-5 md:h-5 text-[rgb(var(--gold))]" />
                       <span>07375064619</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <Mail className="w-4 h-4 md:w-5 md:h-5 text-[rgb(var(--gold))]" />
                       <span className="break-all">info@boltonroaddentalpractice.co.uk</span>
                    </li>
                 </ul>
              </div>

              <div>
                 <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-[rgb(var(--gold))] uppercase tracking-wider text-xs">Legal</h4>
                 <ul className="space-y-2 md:space-y-4 text-[rgb(var(--gray-light))] font-light text-sm md:text-base">
                    <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                 </ul>
              </div>
           </div>
           
           <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-2 md:gap-0">
              <p>&copy; 2025 Bolton Road Dental Practice.</p>
           </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default DentalEmailTemplate;
