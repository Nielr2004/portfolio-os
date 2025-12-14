'use client';
import { motion } from 'framer-motion';

interface AppIconProps {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const AppIcon = ({ id, name, color, icon, onClick }: AppIconProps) => {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={onClick}>
      <motion.div
        layoutId={`icon-${id}`}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.9 }}
        transition={{ 
          layout: { type: "spring", stiffness: 300, damping: 20 },
          scale: { type: "spring", stiffness: 300, damping: 15 },
          rotate: { duration: 0.4, ease: "easeInOut" }
        }}
        // Added 'shadow-lg' and 'shadow-current' (opacity controlled via style or class)
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl ${color} border border-white/20 relative overflow-hidden ring-2 ring-white/5`}
      >
        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none" />
        
        {/* Icon Content */}
        <motion.div layoutId={`icon-content-${id}`} className="z-10 drop-shadow-md">
          {icon}
        </motion.div>
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-medium text-white/90 drop-shadow-md group-hover:text-white transition-colors"
      >
        {name}
      </motion.span>
    </div>
  );
};

export default AppIcon;