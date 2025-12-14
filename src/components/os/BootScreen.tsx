'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react'; // Or your logo icon

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit before unmounting
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center text-white"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="flex flex-col items-center gap-4"
      >
        <div className="p-4 bg-white rounded-3xl">
           {/* Replace with your Logo or Icon */}
           <Shield size={48} className="text-black" />
        </div>
        <h1 className="text-2xl font-bold tracking-widest mt-4">Snehashis OS</h1>
      </motion.div>

      {/* Loading Bar */}
      <div className="absolute bottom-20 w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default BootScreen;