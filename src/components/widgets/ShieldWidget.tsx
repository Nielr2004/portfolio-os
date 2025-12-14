'use client';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShieldWidget = () => {
  const [protectedMode, setProtectedMode] = useState(true);

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      onClick={() => setProtectedMode(!protectedMode)}
      className={`h-full w-full rounded-3xl p-4 flex flex-col justify-between cursor-pointer transition-colors duration-500 border relative overflow-hidden ${
        protectedMode 
          ? 'bg-orange-600 border-orange-400/50' 
          : 'bg-zinc-900 border-zinc-800'
      }`}
    >
      <div className="flex justify-between items-start z-10">
        <div className={`p-2 rounded-full ${protectedMode ? 'bg-white/20' : 'bg-zinc-800'}`}>
          <Shield className={`w-6 h-6 ${protectedMode ? 'text-white' : 'text-zinc-500'}`} />
        </div>
        {protectedMode ? <EyeOff size={18} className="text-white/70" /> : <Eye size={18} className="text-zinc-600" />}
      </div>

      <div className="z-10">
        <h3 className={`text-lg font-bold leading-tight ${protectedMode ? 'text-white' : 'text-zinc-300'}`}>
          Spoiler Shield
        </h3>
        
        <div className="relative mt-1">
           {/* The Text that gets blurred */}
           <p className={`text-xs transition-all duration-300 ${protectedMode ? 'blur-sm text-white/80' : 'blur-0 text-zinc-500'}`}>
             Blocks movie spoilers automatically.
           </p>
           
           {/* Overlay text when blurred */}
           <AnimatePresence>
             {protectedMode && (
               <motion.span 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                 className="absolute inset-0 flex items-center text-[10px] font-bold text-white uppercase tracking-widest"
               >
                 Protected
               </motion.span>
             )}
           </AnimatePresence>
        </div>
      </div>
      
      {/* Background Pulse Effect when active */}
      {protectedMode && (
         <motion.div 
           layoutId="pulse"
           className="absolute -right-4 -bottom-4 w-24 h-24 bg-orange-400 rounded-full blur-2xl opacity-50 pointer-events-none"
         />
      )}
    </motion.div>
  );
};

export default ShieldWidget;