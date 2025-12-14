'use client';
import { MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const MapWidget = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="h-full w-full bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-5 relative overflow-hidden cursor-pointer border border-blue-500/20 group"
    >
      {/* CSS-only Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} 
      />
      
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <div className="bg-blue-500/20 p-2 rounded-full">
            <MapPin className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-xs font-mono text-blue-300 bg-blue-900/50 px-2 py-1 rounded-full border border-blue-500/30">
            CASE STUDY
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-1">NYC Analysis</h3>
          <p className="text-sm text-blue-200">
            Uncovered <span className="font-bold text-white">150+</span> hidden gems.
          </p>
        </div>
        
        <div className="absolute bottom-4 right-4 opacity-50">
           <TrendingUp className="w-12 h-12 text-blue-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default MapWidget;