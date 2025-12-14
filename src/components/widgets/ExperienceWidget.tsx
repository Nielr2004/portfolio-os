'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, RefreshCw, Search, Lock, Globe, Share, Book, 
  ChevronRight, CheckCircle2, Code, Database, Users, TrendingUp,
  MoreVertical, Plus, Square, Home, ShieldCheck, ExternalLink
} from 'lucide-react';

// --- DATA: "SEARCH RESULTS" ---
const sites: any = {
  'gratia': {
    url: 'gratia-tech.com/careers',
    domain: 'gratia-tech.com',
    title: 'Web Developer Intern',
    company: 'Gratia Technology Pvt. Ltd',
    desc: 'Full-stack development of 2 enterprise web applications.',
    date: 'Nov 2024 – Jan 2025',
    color: 'bg-blue-600',
    certificate: 'https://drive.google.com/file/d/15IqKmWXCAqTckbcRAE_bW6GD5L2BhsqS/view?usp=drive_link', // Replace with real link
    content: (
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="p-5 rounded-xl bg-zinc-900 border border-white/5">
           <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
             <Code size={16} className="text-blue-400" />
             The Mission
           </h3>
           <p className="text-sm text-zinc-400 leading-relaxed">
             Tasked with the full development lifecycle of <strong className="text-white">two web applications</strong>. Focused on reducing technical debt and optimizing high-traffic database interactions.
           </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 gap-3">
           <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/10">
              <div className="text-2xl font-bold text-blue-400">-10%</div>
              <div className="text-[10px] uppercase font-bold text-blue-300/60">Bugs Pre-launch</div>
           </div>
           <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/10">
              <div className="text-2xl font-bold text-green-400">2x</div>
              <div className="text-[10px] uppercase font-bold text-green-300/60">Query Efficiency</div>
           </div>
        </div>

        {/* Breakdown */}
        <div>
           <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Technical Contributions</h4>
           <ul className="space-y-4">
              <li className="flex gap-3">
                 <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                    <span className="text-[9px] font-bold text-white">1</span>
                 </div>
                 <div>
                    <h5 className="text-sm font-bold text-zinc-200">Rigorous QA Testing</h5>
                    <p className="text-sm text-zinc-400 mt-1">Implemented comprehensive testing protocols to resolve critical edge cases.</p>
                 </div>
              </li>
              <li className="flex gap-3">
                 <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                    <span className="text-[9px] font-bold text-white">2</span>
                 </div>
                 <div>
                    <h5 className="text-sm font-bold text-zinc-200">DB Optimization</h5>
                    <p className="text-sm text-zinc-400 mt-1">Refactored SQL queries, improving dashboard load times significantly.</p>
                 </div>
              </li>
           </ul>
        </div>
      </div>
    )
  },
  'nit': {
    url: 'nita.ac.in/research/ai-lab',
    domain: 'nita.ac.in',
    title: 'AI Research Intern',
    company: 'NIT Agartala',
    desc: 'Research on "Face Track+" facial recognition system.',
    date: 'Jun 2025 – Jul 2025',
    color: 'bg-amber-600',
    certificate: 'https://drive.google.com/file/d/1a9FcD6DxhFeyhlm3xR8iK-2UVw0erozX/view?usp=drive_link', // Replace with real link
    content: (
      <div className="space-y-8">
        <div className="p-5 rounded-xl bg-zinc-900 border border-white/5">
           <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
             <Database size={16} className="text-amber-400" />
             Project Face Track+
           </h3>
           <p className="text-sm text-zinc-400 leading-relaxed">
             R&D for an AI-enabled access control system. Leveraged <strong className="text-white">AI & HCI Lab</strong> resources to engineer core recognition modules.
           </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
           <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/10">
              <div className="text-2xl font-bold text-amber-400">96%</div>
              <div className="text-[10px] uppercase font-bold text-amber-300/60">Accuracy Rate</div>
           </div>
           <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/10">
              <div className="text-2xl font-bold text-purple-400">9</div>
              <div className="text-[10px] uppercase font-bold text-purple-300/60">Team Size</div>
           </div>
        </div>

        <div>
           <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Research Outcomes</h4>
           <ul className="space-y-4">
              <li className="flex gap-3">
                 <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                    <TrendingUp size={12} className="text-green-400" />
                 </div>
                 <div>
                    <h5 className="text-sm font-bold text-zinc-200">High-Accuracy Engineering</h5>
                    <p className="text-sm text-zinc-400 mt-1">Achieved 96% success rate in test environments, surpassing targets.</p>
                 </div>
              </li>
              <li className="flex gap-3">
                 <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                    <Users size={12} className="text-blue-400" />
                 </div>
                 <div>
                    <h5 className="text-sm font-bold text-zinc-200">Team Leadership</h5>
                    <p className="text-sm text-zinc-400 mt-1">Coordinated frontend/backend integration across a team of 9 researchers.</p>
                 </div>
              </li>
           </ul>
        </div>
      </div>
    )
  }
};

const ExperienceWidget = () => {
  const [view, setView] = useState<'search' | 'browser'>('search');
  const [activeSite, setActiveSite] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const openSite = (key: string) => {
    setActiveSite(key);
    setView('browser');
    setLoadingProgress(10);
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 200);
  };

  const goHome = () => {
    setView('search');
    setLoadingProgress(0);
    setTimeout(() => setActiveSite(null), 300);
  };

  const currentData = activeSite ? sites[activeSite] : null;

  return (
    <div className="w-full h-full bg-[#202124] flex flex-col font-sans relative overflow-hidden">
      
      {/* 1. MAIN VIEWPORT */}
      <div className="flex-1 relative overflow-hidden bg-[#202124]">
        <AnimatePresence mode="popLayout">
          
          {/* === VIEW A: CHROME HOME (Search) === */}
          {view === 'search' && (
            <motion.div
              key="search-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col p-4 overflow-y-auto custom-scrollbar"
            >
              {/* Google Style Logo */}
              <div className="mt-16 mb-8 flex flex-col items-center">
                 <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-6">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                 </h1>
                 
                 {/* Search Bar */}
                 <div className="w-full bg-[#303134] rounded-full p-3 px-5 flex items-center gap-3 shadow-lg border border-[#5f6368]/30">
                    <Search size={18} className="text-[#9aa0a6]" />
                    <span className="text-sm text-[#e8eaed]">Search work history or type URL</span>
                 </div>
              </div>

              {/* Shortcuts (Recent Projects) */}
              <div className="flex justify-center gap-6 mb-8">
                 {Object.entries(sites).map(([key, data]: any) => (
                    <button 
                       key={key}
                       onClick={() => openSite(key)}
                       className="flex flex-col items-center gap-2 group"
                    >
                       <div className="w-12 h-12 rounded-full bg-[#303134] flex items-center justify-center text-white border border-[#5f6368]/30 group-hover:bg-[#3c4043] transition-colors">
                          <span className="font-bold text-lg">{data.domain[0].toUpperCase()}</span>
                       </div>
                       <span className="text-[10px] text-[#e8eaed] w-16 truncate text-center">{data.company.split(' ')[0]}</span>
                    </button>
                 ))}
                 <button className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-[#303134] flex items-center justify-center text-[#9aa0a6] border border-[#5f6368]/30">
                       <Plus size={20} />
                    </div>
                    <span className="text-[10px] text-[#e8eaed]">Add</span>
                 </button>
              </div>

              {/* Discover Feed Title */}
              <div className="mt-auto">
                 <div className="flex justify-between items-center border-t border-[#5f6368]/30 pt-4 px-2">
                    <span className="text-xs font-bold text-[#9aa0a6]">Discover</span>
                    <MoreVertical size={14} className="text-[#9aa0a6]" />
                 </div>
                 {/* Fake Feed Item */}
                 <div className="mt-4 p-4 rounded-xl bg-[#303134] border border-[#5f6368]/30">
                    <div className="text-[10px] text-[#9aa0a6] mb-1">RECOMMENDED FOR YOU</div>
                    <div className="text-sm text-white font-medium">Why hiring Snehashis is the best decision for your team.</div>
                 </div>
              </div>
            </motion.div>
          )}

          {/* === VIEW B: CHROME BROWSER VIEW === */}
          {view === 'browser' && currentData && (
            <motion.div
              key="browser-view"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute inset-0 flex flex-col bg-[#202124]"
            >
              {/* URL Bar (Top) */}
              <div className="h-14 bg-[#303134] flex items-center gap-3 px-3 z-20 shrink-0 border-b border-[#5f6368]/50">
                 <div className="flex-1 h-9 bg-[#202124] rounded-full flex items-center px-4 gap-2 relative overflow-hidden">
                    {/* Loading Progress */}
                    <motion.div 
                       className="absolute bottom-0 left-0 h-[2px] bg-blue-500 z-10"
                       initial={{ width: 0 }}
                       animate={{ width: `${loadingProgress}%` }}
                    />
                    
                    <Lock size={12} className="text-[#9aa0a6]" />
                    <span className="text-sm text-white truncate flex-1">{currentData.domain}</span>
                    <RefreshCw size={14} className="text-[#9aa0a6]" />
                 </div>
                 <div className="w-7 h-7 rounded-full overflow-hidden border border-white/10">
                     <div className={`w-full h-full ${currentData.color} flex items-center justify-center text-[10px] font-bold text-white`}>
                        {currentData.domain[0].toUpperCase()}
                     </div>
                 </div>
              </div>

              {/* Webpage Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#202124] relative">
                 <div className="p-5 pb-24 max-w-xl mx-auto">
                    <p className="text-[10px] text-[#9aa0a6] uppercase font-bold tracking-wider mb-2">{currentData.date}</p>
                    <h1 className="text-2xl font-bold text-[#e8eaed] leading-tight mb-2">{currentData.title}</h1>
                    <div className="flex items-center gap-2 mb-6">
                       <Globe size={12} className="text-blue-400" />
                       <span className="text-xs text-blue-400">{currentData.company}</span>
                    </div>
                    
                    {/* Dynamic Content */}
                    {currentData.content}

                    {/* CERTIFICATE VERIFICATION */}
                    <div className="mt-8 pt-6 border-t border-[#5f6368]/30">
                       <h4 className="text-xs font-bold text-[#9aa0a6] uppercase tracking-widest mb-3 flex items-center gap-2">
                          <ShieldCheck size={14} className="text-green-500" /> 
                          Credential Verification
                       </h4>
                       <a 
                          href={currentData.certificate} 
                          target="_blank"
                          className="flex items-center justify-between p-3 rounded-lg bg-[#303134] border border-[#5f6368]/50 group hover:bg-[#3c4043] transition-colors"
                       >
                          <div className="flex flex-col">
                             <span className="text-sm font-bold text-white">View Certificate</span>
                             <span className="text-[10px] text-[#9aa0a6]">Authenticity Verified</span>
                          </div>
                          <ExternalLink size={16} className="text-[#9aa0a6] group-hover:text-white" />
                       </a>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 3. CHROME BOTTOM TOOLBAR */}
      <div className="h-12 bg-[#303134] border-t border-[#5f6368]/30 flex items-center justify-between px-6 z-50 shrink-0">
         <button 
           onClick={goHome} 
           disabled={view === 'search'}
           className={`p-2 rounded-full ${view === 'browser' ? 'text-[#9aa0a6] hover:text-white' : 'text-[#5f6368] cursor-default'}`}
         >
            <ArrowLeft size={20} />
         </button>
         
         <button 
            className={`p-2 rounded-full ${view === 'browser' ? 'text-[#9aa0a6] hover:text-white' : 'text-[#5f6368] cursor-default'}`}
            disabled={view === 'search'}
         >
            <ChevronRight size={20} />
         </button>

         <button 
            onClick={goHome}
            className="p-2 rounded-full text-blue-400 hover:text-blue-300 transform active:scale-95 transition-transform"
         >
            <Search size={24} />
         </button>

         <button className="p-2 text-[#9aa0a6] hover:text-white">
            <div className="w-5 h-5 border-2 border-current rounded flex items-center justify-center text-[10px] font-bold">
               {view === 'browser' ? '1' : '0'}
            </div>
         </button>

         <button className="p-2 text-[#9aa0a6] hover:text-white">
            <MoreVertical size={20} />
         </button>
      </div>

    </div>
  );
};

export default ExperienceWidget;