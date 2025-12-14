'use client';
import { useState } from 'react';
import { CloudSun, Wind, Droplets, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WeatherWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-5 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden shadow-lg border border-white/10"
    >
      {/* Background Decor */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 blur-2xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-start z-10">
         <div className="flex flex-col">
            <span className="text-xs font-medium opacity-80 flex items-center gap-1">
               <MapPin size={10} /> Bengaluru
            </span>
            <span className="text-sm font-bold">Partly Cloudy</span>
         </div>
         <CloudSun size={28} className="text-yellow-300" />
      </div>

      {/* Main Temp or Details */}
      <div className="z-10 mt-auto">
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div 
              key="temp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
               <div className="text-4xl font-bold tracking-tighter">28°</div>
               <div className="text-xs opacity-70">H:32° L:21°</div>
            </motion.div>
          ) : (
            <motion.div 
              key="details"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2"
            >
               <div className="flex items-center gap-2 text-xs">
                  <Wind size={12} className="opacity-70" />
                  <span>12 km/h</span>
               </div>
               <div className="flex items-center gap-2 text-xs">
                  <Droplets size={12} className="opacity-70" />
                  <span>64% Hum</span>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WeatherWidget;