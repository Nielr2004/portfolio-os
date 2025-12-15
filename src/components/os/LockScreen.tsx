'use client';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  // Fix: Use useEffect with setInterval to update time every second for a real-time clock.
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      // Aesthetic refinement for the glassmorphic look
      className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-3xl flex flex-col items-center justify-between pt-24 pb-12 text-white cursor-grab active:cursor-grabbing"
      initial={{ opacity: 1 }}
      // Use clean vertical exit
      exit={{ y: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } }} 
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(_, info) => {
        // Unlock on swipe up (negative y offset) of at least 100 pixels
        if (info.offset.y < -100) onUnlock(); 
      }}
      // Fix: Removed onClick={onUnlock} to prevent accidental unlocks and enforce swipe
    >
      <div className="flex flex-col items-center">
        {/* Lock Icon */}
        <Lock size={24} className="mb-6 text-white/50 drop-shadow-md" />
        
        {/* Large Time - Uses font-display for better look */}
        <h1 className="text-7xl md:text-8xl font-display font-light tracking-tighter text-white drop-shadow-lg">
          {time}
        </h1>
        
        {/* Date */}
        <p className="text-xl font-medium text-white/90 mt-2 drop-shadow-md">
          {date}
        </p>
      </div>

      {/* Swipe Gesture Indicator - Refined Animation */}
      <motion.div 
        // Refined animation: Clean vertical bounce (more elegant and smooth)
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 opacity-80"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-white/90 drop-shadow-md">
          Swipe up to open
        </span>
        {/* Bottom indicator bar */}
        <div className="w-16 h-1.5 rounded-full bg-white/50" />
      </motion.div>
    </motion.div>
  );
};

export default LockScreen;