'use client';
import { useState, useEffect } from 'react';
import { CloudSun, CloudMoon, Wind, Droplets, MapPin, Sun, Moon, Cloud } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WeatherWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour < 6 || hour > 18);
  }, []);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`w-full h-full rounded-3xl p-5 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden shadow-lg border border-white/10 transition-colors duration-1000 ${
        isNight 
          ? 'bg-gradient-to-br from-indigo-900 via-violet-900 to-slate-900' 
          : 'bg-gradient-to-br from-blue-400 via-sky-400 to-blue-500'
      }`}
    >
      {/* --- AMBIENT BACKGROUND ANIMATIONS --- */}
      {/* Rotating Sun/Moon Glow */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className={`absolute -top-12 -right-12 w-40 h-40 blur-3xl rounded-full opacity-60 pointer-events-none ${
           isNight ? 'bg-purple-500' : 'bg-yellow-300'
        }`} 
      />
      
      {/* Drifting Cloud 1 */}
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 opacity-10 pointer-events-none"
      >
         <Cloud size={64} fill="currentColor" />
      </motion.div>

      {/* --- HEADER --- */}
      <div className="flex justify-between items-start z-10">
         <div className="flex flex-col">
            <span className="text-xs font-medium opacity-90 flex items-center gap-1 drop-shadow-md">
               <MapPin size={10} /> Bengaluru
            </span>
            <span className="text-sm font-bold drop-shadow-md">
                {isNight ? 'Clear Night' : 'Sunny'}
            </span>
         </div>
         <div className="filter drop-shadow-lg">
            {isNight ? <Moon size={24} className="text-violet-200" fill="currentColor" /> : <Sun size={24} className="text-yellow-100" fill="currentColor" />}
         </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="z-10 mt-auto">
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            /* COMPACT VIEW */
            <motion.div 
              key="temp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
               <div className="text-5xl font-thin tracking-tighter drop-shadow-xl">
                   28°
               </div>
               <div className="text-xs font-medium opacity-80 mt-1">
                   H:32° L:21°
               </div>
            </motion.div>
          ) : (
            /* EXPANDED VIEW (HOURLY FORECAST) */
            <motion.div 
              key="details"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-between items-end pt-2"
            >
               {/* Tiny simulated hourly forecast */}
               <ForecastItem time="Now" icon={<Sun size={12} />} temp="28°" />
               <ForecastItem time="1PM" icon={<CloudSun size={12} />} temp="29°" />
               <ForecastItem time="2PM" icon={<Cloud size={12} />} temp="27°" />
               <ForecastItem time="3PM" icon={<Wind size={12} />} temp="26°" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Helper Component for the Forecast Row
const ForecastItem = ({ time, icon, temp }: any) => (
    <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] opacity-70">{time}</span>
        <div className="opacity-90">{icon}</div>
        <span className="text-xs font-bold">{temp}</span>
    </div>
);

export default WeatherWidget;