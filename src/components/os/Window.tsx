'use client';
import { motion } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';
import { ReactNode } from 'react';

interface WindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Window = ({ title, children, onClose }: WindowProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* 1. Backdrop (Click to close) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* 2. The Window Frame */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-5xl h-[85vh] bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
      >
        
        {/* Window Header (Mac OS / Windows Hybrid Style) */}
        <div className="h-10 bg-[#252526] border-b border-white/5 flex items-center justify-between px-4 shrink-0 select-none">
           {/* Traffic Lights (Visual only) */}
           <div className="flex gap-2 group">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors">
                <X size={8} className="text-black opacity-0 group-hover:opacity-100" />
              </button>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center">
                <Minus size={8} className="text-black opacity-0 group-hover:opacity-100" />
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center">
                <Square size={6} className="text-black opacity-0 group-hover:opacity-100 fill-black" />
              </div>
           </div>

           {/* Title */}
           <span className="text-xs font-medium text-zinc-400">{title}</span>

           {/* Spacer to center title */}
           <div className="w-14" />
        </div>

        {/* Window Body (The App Content) */}
        <div className="flex-1 overflow-hidden relative bg-black">
           {children}
        </div>

      </motion.div>
    </div>
  );
};

export default Window;