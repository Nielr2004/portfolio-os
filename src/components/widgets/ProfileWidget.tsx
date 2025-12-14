'use client';
import { motion } from 'framer-motion';
import { 
  MoreHorizontal, Star, Clock, MessageSquare, 
  Menu, CheckSquare, Hash, FileText, Link as LinkIcon, 
  MapPin, GripVertical, CornerUpLeft, ChevronRight
} from 'lucide-react';

const ProfileWidget = () => {
  return (
    <div className="w-full h-full bg-[#191919] text-[#d4d4d4] relative flex flex-col font-sans selection:bg-[#2383e2]/30 selection:text-white overflow-hidden">
      
      {/* 1. NOTION TOP BAR (Sticky) */}
      <div className="h-11 flex items-center justify-between px-3 text-sm shrink-0 bg-[#191919] z-50 sticky top-0 border-b border-[#2f2f2f] w-full">
        <div className="flex items-center gap-2 text-[#9b9b9b] hover:bg-[#2c2c2c] px-2 py-1 rounded cursor-pointer transition-colors max-w-[60%]">
            <Menu size={18} className="shrink-0" />
            <span className="truncate text-[#d4d4d4] font-medium text-xs">Snehashis / Profile</span>
        </div>
        <div className="flex items-center gap-0.5 text-[#d4d4d4] shrink-0">
            <span className="hidden sm:inline text-xs text-[#9b9b9b] mr-2">Edited 1m ago</span>
            <NavBtn label="Share" />
            <NavBtn icon={<MessageSquare size={16} />} />
            <NavBtn icon={<MoreHorizontal size={16} />} />
        </div>
      </div>

      {/* 2. SCROLLABLE PAGE CONTENT */}
      <motion.div 
        className="flex-1 overflow-y-auto custom-scrollbar relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        
        {/* COVER IMAGE */}
        <div className="h-[180px] w-full relative group cursor-pointer border-b border-[#2f2f2f]">
            <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" 
                alt="Cover" 
                className="w-full h-full object-cover opacity-80"
            />
            {/* Cover Controls */}
            <div className="absolute bottom-2 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <button className="bg-[#191919]/60 backdrop-blur-sm text-xs px-2 py-1 rounded text-[#d4d4d4] hover:bg-[#2c2c2c] border border-white/5 transition-colors">
                    Change cover
                </button>
                <button className="bg-[#191919]/60 backdrop-blur-sm text-xs px-2 py-1 rounded text-[#d4d4d4] hover:bg-[#2c2c2c] border border-white/5 transition-colors">
                    Reposition
                </button>
            </div>
        </div>

        {/* PAGE BODY */}
        <div className="max-w-[900px] mx-auto px-6 md:px-24 pb-24 relative">
            
            {/* TITLE & ICON AREA */}
            {/* Added explicit top margin (pt-[50px]) to clear the absolute icon space */}
            <div className="group relative mb-8 pt-[50px]">
                
                {/* Icon (Absolute positioned relative to this container) */}
                <div className="absolute -top-[90px] left-0 z-30 group-icon">
                    <div className="text-[72px] leading-none hover:scale-110 transition-transform cursor-pointer select-none filter drop-shadow-lg">
                    </div>
                </div>
                
                {/* Icon Controls */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-4 left-0 flex gap-4 text-xs text-[#9b9b9b] select-none z-30">
                    <button className="hover:text-[#d4d4d4] flex items-center gap-1"><span className="text-[10px]">☺</span> Change icon</button>
                </div>

                <h1 className="text-4xl font-bold text-white break-words mt-2">
                    Snehashis Roy
                </h1>

                {/* PROPERTIES (Metadata) */}
                <div className="mt-6 flex flex-col gap-0.5 text-sm text-[#d4d4d4] border-b border-[#2f2f2f] pb-6">
                    <PropertyRow label="Status" icon={<CheckSquare size={16} />}>
                         <Badge color="bg-[#2c3d34] text-[#70c997]" label="Open to Work" />
                    </PropertyRow>
                    <PropertyRow label="Role" icon={<Hash size={16} />}>
                         <Badge color="bg-[#252525] text-[#d4d4d4] border border-[#373737]" label="Full Stack Developer" />
                         <Badge color="bg-[#252525] text-[#d4d4d4] border border-[#373737]" label="Data Analyst" />
                    </PropertyRow>
                    <PropertyRow label="Contact" icon={<FileText size={16} />}>
                         <a href="mailto:roysnehashis2004@gmail.com" className="hover:bg-[#2c2c2c] px-1 -ml-1 rounded transition-colors text-[#d4d4d4] underline decoration-[#9b9b9b] underline-offset-4 break-all">
                             roysnehashis2004@gmail.com
                         </a>
                    </PropertyRow>
                    <PropertyRow label="Socials" icon={<LinkIcon size={16} />}>
                         <div className="flex flex-wrap gap-3">
                             <a href="https://github.com/Nielr2004" target="_blank" className="hover:bg-[#2c2c2c] px-1 -ml-1 rounded transition-colors text-[#d4d4d4] underline decoration-[#9b9b9b] underline-offset-4">GitHub</a>
                             <a href="www.linkedin.com/in/snehashis-roy-40691725a" target="_blank" className="hover:bg-[#2c2c2c] px-1 rounded transition-colors text-[#d4d4d4] underline decoration-[#9b9b9b] underline-offset-4">LinkedIn</a>
                         </div>
                    </PropertyRow>
                </div>
            </div>

            {/* --- BLOCKS --- */}

            <Spacer />

            {/* BLOCK: Intro Paragraph */}
            <Block>
                <p className="text-[16px] leading-7 text-[#d4d4d4]">
                    Hi, I'm a recent <strong className="font-semibold text-white">Computer Science graduate</strong> from Kaziranga University.
                </p>
            </Block>
            <Block>
                <p className="text-[16px] leading-7 text-[#d4d4d4]">
                    My work sits at the intersection of <span className="bg-[#2383e2]/20 text-[#5e9de6] px-1 rounded">Application Development</span> and <span className="bg-[#6c429c]/30 text-[#ad84d6] px-1 rounded">Data Intelligence</span>. 
                    I don't just build user interfaces; I engineer the logic and data pipelines that power them.
                </p>
            </Block>

            <Spacer />

            {/* BLOCK: Callout (Philosophy) */}
            <Block>
                <div className="w-full bg-[#252525] p-4 rounded-md border border-transparent hover:border-[#373737] flex gap-4 transition-colors">
                    <div className="text-xl pt-0.5 shrink-0">💡</div>
                    <div className="space-y-1 min-w-0">
                        <h3 className="font-bold text-white text-sm">Development Philosophy</h3>
                        <p className="text-sm text-[#d4d4d4] leading-6 break-words">
                            "I build tools that solve actual user problems. From raw idea to live deployment."
                        </p>
                    </div>
                </div>
            </Block>

            <Spacer />

            {/* BLOCK: Toggle (Context) */}
            <Block>
                 <details className="group w-full">
                    <summary className="list-none flex items-center gap-1 cursor-pointer hover:bg-[#2c2c2c] py-1 px-1 rounded -ml-1 text-[#d4d4d4] font-medium select-none">
                        <div className="w-5 h-5 flex items-center justify-center transition-transform group-open:rotate-90 text-[#9b9b9b] shrink-0">
                            <ChevronRight size={18} />
                        </div>
                        Why me?
                    </summary>
                    <div className="pl-2 sm:pl-7 py-2 text-sm text-[#9b9b9b] space-y-2 border-l border-[#2f2f2f] ml-3.5 my-1">
                        <p className="pl-2">1. <span className="text-[#d4d4d4]">Hybrid Skillset:</span> I speak both React and Python fluently.</p>
                        <p className="pl-2">2. <span className="text-[#d4d4d4]">Proven Impact:</span> 96% accuracy in AI research, 10% bug reduction in prod.</p>
                        <p className="pl-2">3. <span className="text-[#d4d4d4]">Ownership:</span> I handle the full stack, not just one slice.</p>
                    </div>
                 </details>
            </Block>

            <Spacer />

            {/* BLOCK: Navigation Hint */}
            <Block>
                 <div className="flex items-center gap-2 text-sm text-[#777] italic mt-4 hover:text-[#9b9b9b] transition-colors cursor-default">
                    <CornerUpLeft size={14} />
                    <span>Explore the OS dock to view my Projects & Experience.</span>
                 </div>
            </Block>

        </div>
      </motion.div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const Spacer = () => <div className="h-3" />;

const NavBtn = ({ icon, label }: any) => (
    <button className={`
        h-7 rounded hover:bg-[#2c2c2c] text-[#d4d4d4] transition-colors flex items-center justify-center
        ${label ? 'px-2 text-xs font-medium' : 'w-7 text-[#9b9b9b]'}
    `}>
        {label || icon}
    </button>
);

const PropertyRow = ({ label, icon, children }: any) => (
    <div className="flex items-start py-1.5 group min-h-[34px]">
        {/* Fixed width label column */}
        <div className="w-[120px] flex items-center gap-2 text-[#7f7f7f] shrink-0 text-sm h-full pt-0.5">
            {icon}
            <span className="group-hover:text-[#9b9b9b] transition-colors truncate">{label}</span>
        </div>
        {/* Flexible content column */}
        <div className="flex-1 text-[#d4d4d4] flex flex-wrap gap-2 items-center min-w-0 break-words">
            {children}
        </div>
    </div>
);

const Badge = ({ color, label }: any) => (
    <span className={`px-1.5 py-0.5 rounded-sm text-xs font-medium whitespace-nowrap ${color}`}>
        {label}
    </span>
);

const Block = ({ children }: any) => (
    // Added specific padding-left to ensure Drag Handles don't overlap content
    <div className="group flex items-start relative pl-0 sm:pl-2 py-[2px] w-full">
        {/* Drag Handle Area - Hidden on mobile, visible on hover desktop */}
        <div className="absolute -left-10 top-0.5 hidden sm:flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity select-none">
             <div className="w-4 h-6 flex items-center justify-center text-[#454545] hover:bg-[#2c2c2c] hover:text-[#d4d4d4] rounded cursor-pointer">
                <span className="text-lg leading-none pb-1">+</span>
             </div>
             <div className="w-4 h-6 flex items-center justify-center text-[#454545] hover:bg-[#2c2c2c] hover:text-[#d4d4d4] rounded cursor-grab">
                <GripVertical size={14} />
             </div>
        </div>
        <div className="flex-1 min-w-0">
            {children}
        </div>
    </div>
);

export default ProfileWidget;