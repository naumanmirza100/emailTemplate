import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Users, ArrowRight, Gamepad2, ShieldCheck } from 'lucide-react';

export const Home = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Laskon Tech Email Templates
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Welcome to the central hub for Laskon Tech's professional email templates. Select a template below to view, copy, or download the HTML.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          {/* General Staffing */}
          <motion.div whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 border border-transparent hover:border-green-500 flex flex-col">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 mb-5 mx-auto">
              <Users className="h-7 w-7 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Staff Augmentation</h2>
            <p className="text-slate-500 mb-4 text-sm flex-grow">
              General staffing and dental practice growth templates.
            </p>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <Link to="/staffing">
                View Template <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Game Dev */}
          <motion.div whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 border border-transparent hover:border-purple-500 flex flex-col">
             <div className="flex items-center justify-center h-14 w-14 rounded-full bg-purple-100 mb-5 mx-auto">
              <Gamepad2 className="h-7 w-7 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Game Development</h2>
            <p className="text-slate-500 mb-4 text-sm flex-grow">
              Dark themed template for game studios and Unity/Unreal staffing.
            </p>
            <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
              <Link to="/game-dev">
                View Template <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Cybersecurity - NEW */}
          <motion.div whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} className="bg-slate-900 rounded-xl shadow-lg p-6 transition-all duration-300 border border-slate-700 hover:border-cyan-400 flex flex-col">
             <div className="flex items-center justify-center h-14 w-14 rounded-full bg-cyan-900/50 mb-5 mx-auto border border-cyan-500/30">
              <ShieldCheck className="h-7 w-7 text-cyan-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cybersecurity</h2>
            <p className="text-slate-400 mb-4 text-sm flex-grow">
              Enterprise-grade security solutions and infosec staffing.
            </p>
            <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
              <Link to="/cyber-security">
                View Template <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};