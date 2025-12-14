'use client';
import { motion } from 'framer-motion';

const PhotoWidget = () => {
  // Replace with your image
  const photoUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="w-full h-full relative group overflow-hidden rounded-3xl bg-zinc-900 shadow-lg">
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        src={photoUrl} 
        alt="Snehashis" 
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-bold text-lg leading-none">Snehashis</h3>
        <p className="text-zinc-400 text-xs font-medium">Bengaluru, IN</p>
      </div>
    </div>
  );
};

export default PhotoWidget;