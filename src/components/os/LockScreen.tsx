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

  useEffect(() => {
    const now = new Date();
    setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setDate(now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xl flex flex-col items-center justify-between pt-24 pb-12 text-white cursor-grab active:cursor-grabbing"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.y < -100) onUnlock(); // Unlock on swipe up
      }}
      onClick={onUnlock} // Fallback click to unlock
    >
      <div className="flex flex-col items-center">
        <Lock size={24} className="mb-6 text-white/50" />
        <h1 className="text-7xl md:text-8xl font-thin tracking-tighter">{time}</h1>
        <p className="text-xl font-light text-white/80 mt-2">{date}</p>
      </div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-3 opacity-70"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Swipe up to open</span>
        <div className="w-16 h-1.5 rounded-full bg-white/50" />
      </motion.div>
    </motion.div>
  );
};

export default LockScreen;