import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { StaffingEmail } from '@/pages/StaffingEmail';
import { GameDevEmail } from '@/pages/GameDevEmail';
import { CyberSecurityEmail } from '@/pages/CyberSecurityEmail';
import { DigitalMarketingEmail } from '@/pages/DigitalMarketingEmail';
import { CloudModernizationEmail } from '@/pages/CloudModernizationEmail';
import { SoftwareDevAIEmail } from '@/pages/SoftwareDevAIEmail';
import { ProductInnovationEmail } from '@/pages/ProductInnovationEmail';
import { SalesforceServicesEmail } from '@/pages/SalesforceServicesEmail';
import { DentalEmail } from '@/pages/DentalEmail';
import { Home } from '@/pages/Home';
import { Toaster } from '@/components/ui/toaster';
import { Users, Gamepad2, ShieldCheck, Home as HomeIcon, Megaphone, Cloud, Code2, Lightbulb, CloudCog, Moon, Sun, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

const NavItem = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all",
        isActive 
          ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 shadow-sm" 
          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
      )}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
};

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <>
      <Helmet>
        <title>Laskon Tech - Email Templates</title>
        <meta name="description" content="Professional HTML email templates for Laskon Tech." />
      </Helmet>
      
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="container mx-auto px-4 py-3 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-start">
                <Link to="/" className="flex items-center gap-3">
                  <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/66e33d06cd984435ee08a0d766ddb17c.png" alt="Laskon Tech Logo" className="h-8"/>
                  <div className="border-l border-slate-300 dark:border-slate-700 h-6 hidden sm:block"></div>
                  <span className="text-lg font-bold text-slate-800 dark:text-slate-200 hidden sm:block">
                    Email Generator
                  </span>
                </Link>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>
            
            <nav className="flex flex-wrap justify-center items-center gap-2 bg-slate-50 dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-700 w-full lg:w-auto">
              <NavItem to="/" icon={HomeIcon} label="Home" />
              <NavItem to="/dental" icon={Smile} label="Dental" />
              <NavItem to="/staffing" icon={Users} label="Staffing" />
              <NavItem to="/game-dev" icon={Gamepad2} label="Game Dev" />
              <NavItem to="/cyber-security" icon={ShieldCheck} label="Security" />
              <NavItem to="/digital-marketing" icon={Megaphone} label="Marketing" />
              <NavItem to="/cloud-mod" icon={Cloud} label="Cloud" />
              <NavItem to="/software-ai" icon={Code2} label="Software & AI" />
              <NavItem to="/product-innovation" icon={Lightbulb} label="Innovation" />
              <NavItem to="/salesforce" icon={CloudCog} label="Salesforce" />
            </nav>
        </div>
      </header>

      <main className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dental" element={<DentalEmail />} />
          <Route path="/staffing" element={<StaffingEmail />} />
          <Route path="/game-dev" element={<GameDevEmail />} />
          <Route path="/cyber-security" element={<CyberSecurityEmail />} />
          <Route path="/digital-marketing" element={<DigitalMarketingEmail />} />
          <Route path="/cloud-mod" element={<CloudModernizationEmail />} />
          <Route path="/software-ai" element={<SoftwareDevAIEmail />} />
          <Route path="/product-innovation" element={<ProductInnovationEmail />} />
          <Route path="/salesforce" element={<SalesforceServicesEmail />} />
        </Routes>
        <Toaster />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;