'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Cpu } from 'lucide-react'; // Changed from Shield to Cpu

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth, slow simulation for a premium feel (like an OS starting up)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a final moment before unlocking
          return 100;
        }
        // Very slow, consistent loading
        return Math.min(100, prev + 1.2); 
      });
    }, 70); // Update every 70ms

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center text-white"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Minimalist Logo Icon */}
        <motion.div 
           initial={{ scale: 0.8 }}
           animate={{ scale: [1, 1.05, 1], rotate: 0 }} // Subtle breathing animation
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="p-5 bg-transparent rounded-full"
        >
           {/* Clean White CPU Icon */}
           <Cpu size={64} className="text-white drop-shadow-md" />
        </motion.div>
        
        {/* Portfolio Name - Changed font class to font-display */}
        <h1 className="text-3xl font-display font-light tracking-wide mt-4">
           Snehashis OS
        </h1>
      </motion.div>

      {/* Modern Loading Bar (Apple/Pixel inspired) */}
      <div className="absolute bottom-1/4 w-32 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }} // Progress updates linearly
        />
      </div>

      {/* Subtle bottom text for clarity */}
      <p className="absolute bottom-8 text-xs text-zinc-500 tracking-wider font-medium uppercase">
         Loading Portfolio OS
      </p>
    </motion.div>
  );
};

export default BootScreen;