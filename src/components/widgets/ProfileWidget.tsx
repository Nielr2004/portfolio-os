'use client';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileWidget = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-full w-full bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group border border-zinc-800"
    >
      <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Top Section */}
      <div className="flex items-start justify-between z-10">
        {/* CSS-only Avatar Placeholder */}
        <div className="relative w-20 h-20 rounded-full border-2 border-white/10 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl">
           <span className="text-2xl font-bold text-white">SR</span>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-green-400 font-medium">Open to Work</span>
          </div>
          <div className="flex items-center gap-1 mt-2 text-zinc-500 text-xs">
            <MapPin size={12} />
            <span>Assam, India</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="z-10">
        <h1 className="text-3xl font-bold text-white tracking-tight">Snehashis Roy</h1>
        <p className="text-zinc-400 text-sm mt-1">Full Stack Developer & Data Analyst</p>
        
        <div className="flex gap-4 mt-6">
          <SocialLink href="https://github.com/your-username" icon={<Github size={20} />} />
          <SocialLink href="https://linkedin.com/in/your-profile" icon={<Linkedin size={20} />} />
          <SocialLink href="mailto:roysnehashis2004@gmail.com" icon={<Mail size={20} />} />
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-white text-zinc-400 transition-colors border border-white/5"
  >
    {icon}
  </a>
);

export default ProfileWidget;