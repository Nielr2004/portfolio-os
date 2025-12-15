'use client';
import { motion } from 'framer-motion';
import { X, Minimize2, Square, Maximize2 } from 'lucide-react'; 
import { ReactNode, useState } from 'react';

interface WindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Window = ({ title, children, onClose }: WindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);

  // Helper to "make it small" (Restore)
  const handleRestore = (e: any) => {
    e.stopPropagation();
    setIsMaximized(false);
  };

  // Helper to Toggle Maximize
  const toggleMaximize = (e: any) => {
    e.stopPropagation();
    setIsMaximized(!isMaximized);
  };

  return (
    <motion.div 
      drag={!isMaximized} // Dragging disabled when maximized
      dragMomentum={false}
      dragElastic={0.05} 
      // Start centered with scale effect
      initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }} 
      animate={{ 
        scale: 1, 
        opacity: 1,
        // Centering Logic:
        // When Maximized: Top-left aligned relative to the container (x:0, y:0)
        // When Small: Center aligned relative to top-1/2 left-1/2 (x:-50%, y:-50%)
        x: isMaximized ? 0 : "-50%",
        y: isMaximized ? 0 : "-50%",
        
        // FIXED SIZE LOGIC:
        // Max: Full width, Full height minus the top bar (32px/2rem)
        // Small: Fixed 850px width, 600px height
        width: isMaximized ? "100vw" : "850px", 
        height: isMaximized ? "calc(100vh - 2rem)" : "600px", // 2rem accounts for the top menu bar
        borderRadius: isMaximized ? 0 : "12px"
      }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      // Positioning classes
      // FIX: Changed 'top-0' to 'top-8' (32px) so it starts BELOW the menu bar
      className={`fixed z-50 bg-[#1e1e1e] shadow-2xl border border-white/10 flex flex-col overflow-hidden
        ${isMaximized ? 'top-8 left-0' : 'top-1/2 left-1/2 max-w-[95vw] max-h-[95vh]'}
      `}
    >
        
        {/* Window Header - Drag Handle */}
        <div 
          className="h-10 bg-[#252526] border-b border-white/5 flex items-center justify-between px-4 shrink-0 select-none cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => {
             // Prevent dragging if clicking the buttons
             if ((e.target as HTMLElement).tagName === 'BUTTON') return;
          }}
        >
           {/* Traffic Lights (The "Buts") */}
           <div className="flex gap-2 group z-20">
              {/* RED: Close */}
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(); }} 
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors shadow-sm group/btn"
              >
                <X size={8} className="text-black opacity-0 group-hover/btn:opacity-100" />
              </button>

              {/* YELLOW: Make Small (Restore) */}
              <button 
                onClick={handleRestore}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center shadow-sm group/btn"
              >
                <Minimize2 size={8} className="text-black opacity-0 group-hover/btn:opacity-100" />
              </button>

              {/* GREEN: Toggle Big/Small */}
              <button 
                onClick={toggleMaximize}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-sm group/btn"
              >
                {isMaximized ? (
                    <Minimize2 size={6} className="text-black opacity-0 group-hover/btn:opacity-100" />
                ) : (
                    <Maximize2 size={6} className="text-black opacity-0 group-hover/btn:opacity-100" />
                )}
              </button>
           </div>

           {/* Title */}
           <span className="text-xs font-medium text-zinc-400 absolute left-0 right-0 text-center pointer-events-none">
              {title}
           </span>

           {/* Spacer */}
           <div className="w-14" />
        </div>

        {/* Window Body */}
        <div className="flex-1 overflow-hidden relative bg-black cursor-auto">
           {children}
        </div>

    </motion.div>
  );
};

export default Window;