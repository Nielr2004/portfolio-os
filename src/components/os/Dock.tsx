'use client';
import { Home, FolderGit2, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Dock = () => {
  const items = [
    { icon: <Home size={22} />, label: 'Home', href: '#' },
    { icon: <FolderGit2 size={22} />, label: 'Projects', href: '#projects' },
    { icon: <User size={22} />, label: 'About', href: '#about' },
    { icon: <Mail size={22} />, label: 'Contact', href: 'mailto:roysnehashis2004@gmail.com' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center gap-2 px-4 py-3 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl ring-1 ring-black/5"
      >
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors relative group"
          >
            {item.icon}
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/5">
              {item.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;