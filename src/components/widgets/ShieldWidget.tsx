'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Wifi, Github, ArrowRight, Lock, Zap, Cpu, Activity, EyeOff, Code2, Terminal } from 'lucide-react';

const ShieldWidget = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState<'blur' | 'pixel' | 'nuclear'>('blur');
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // FIX 1: overflow-y-auto allows scrolling so descriptions are never hidden
    <div className="w-full h-full bg-zinc-950 relative overflow-y-auto custom-scrollbar">
      
      {/* Background Visuals (Fixed to stay in place while scrolling) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-full">
        
        {/* === SECTION 1: THE INTERACTIVE CARD === */}
        <div className="w-full pt-10 pb-8 flex flex-col items-center justify-center perspective-1000">
          
          <div className="w-full max-w-[320px] aspect-[1.586/1] relative">
            <motion.div
              className="w-full h-full relative cursor-default"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              
              {/* --- FRONT FACE --- */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl flex flex-col p-5 text-white bg-[#171717]"
                onClick={(e) => { if (e.target === e.currentTarget) setIsFlipped(true); }}
                style={{ 
                  backfaceVisibility: 'hidden', 
                  WebkitBackfaceVisibility: 'hidden',
                  // FIX 2: Opacity Lock - Hides front completely when flipped to prevent glitches
                  opacity: isFlipped ? 0 : 1,
                  transition: 'opacity 0.2s ease-in-out',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset'
                }}
              >
                 {/* Header */}
                 <div className="flex justify-between items-start mb-3 pointer-events-none">
                   <div className="w-10 h-8 bg-white/10 rounded border border-white/20 relative overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                     <Cpu size={18} className={`text-white/80 ${isScanning ? 'animate-pulse text-orange-400' : ''}`} />
                   </div>
                   <div className="flex flex-col items-end">
                     <span className={`font-bold text-[10px] tracking-[0.2em] mb-1 ${isScanning ? 'text-orange-400' : 'text-zinc-400'}`}>
                       {isScanning ? 'SCANNING...' : 'SECURE'}
                     </span>
                     <Wifi size={18} className={`text-zinc-500 rotate-90 ${isScanning ? 'animate-ping text-white' : ''}`} />
                   </div>
                 </div>

                 {/* Simulator Screen */}
                 <div 
                    className="flex-1 relative bg-black/50 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden cursor-pointer group hover:border-white/20 transition-colors"
                    onClick={() => setIsFlipped(true)}
                 >
                    <span className="absolute top-2 left-3 text-[9px] font-mono text-zinc-500 group-hover:text-orange-400 transition-colors z-30">
                      DOM_PREVIEW
                    </span>
                    <div className="relative px-4 py-2 z-10">
                      <p className="font-serif text-2xl text-white font-bold leading-none text-center tracking-tight drop-shadow-lg">
                        "Iron Man dies."
                      </p>
                      <motion.div 
                        layout
                        className={`absolute inset-[-8px] rounded flex items-center justify-center select-none transition-all duration-300 z-20
                          ${mode === 'blur' ? 'backdrop-blur-sm bg-black/10' : ''} 
                          ${mode === 'pixel' ? 'backdrop-blur-none bg-zinc-900' : ''} 
                          ${mode === 'nuclear' ? 'bg-orange-600' : ''}
                        `}
                      >
                        {mode === 'blur' && <EyeOff size={24} className="text-white/80 drop-shadow-md" />}
                        {mode === 'pixel' && (
                           <div className="w-full h-full grid grid-cols-6 grid-rows-2 gap-[1px] opacity-100">
                             {[...Array(12)].map((_,i) => <div key={i} className="bg-zinc-800 animate-pulse" style={{ animationDelay: `${i*0.05}s` }} />)}
                           </div>
                        )}
                        {mode === 'nuclear' && (
                          <div className="flex flex-col items-center">
                            <Lock size={16} className="text-black mb-0.5" />
                            <span className="text-[8px] font-black uppercase text-black tracking-widest">Redacted</span>
                          </div>
                        )}
                      </motion.div>
                    </div>
                 </div>

                 {/* Footer Controls */}
                 <div className="flex justify-between items-center mt-4 gap-2">
                    <div className="flex gap-1.5 bg-zinc-900 p-1 rounded-lg border border-white/5 shadow-inner">
                       <ModeBtn label="Blur" active={mode === 'blur'} onClick={() => setMode('blur')} />
                       <ModeBtn label="Pixel" active={mode === 'pixel'} onClick={() => setMode('pixel')} />
                       <ModeBtn label="Nuke" active={mode === 'nuclear'} onClick={() => setMode('nuclear')} />
                    </div>
                    <div className="flex -space-x-2 opacity-100 pointer-events-none">
                       <div className="w-7 h-7 rounded-full bg-[#ff9800] mix-blend-screen flex items-center justify-center shadow-lg">
                         <Shield size={14} className="text-black/60" />
                       </div>
                       <div className="w-7 h-7 rounded-full bg-[#d50000] mix-blend-screen shadow-lg" />
                    </div>
                 </div>
              </div>

              {/* --- BACK FACE --- */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl flex flex-col overflow-hidden bg-[#171717]"
                onClick={() => setIsFlipped(false)}
                style={{ 
                  backfaceVisibility: 'hidden', 
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset'
                }}
              >
                 <div className="w-full h-8 bg-black/90 mt-5 relative border-b border-white/5">
                   <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#27272a,#27272a_10px,#18181b_10px,#18181b_20px)] opacity-100" />
                 </div>
                 <div className="px-6 py-4 flex-1 flex flex-col justify-center gap-4">
                    <div className="flex gap-3 items-center">
                       <div className="flex-1 h-7 bg-white rounded-[2px] flex items-center justify-start px-3 overflow-hidden shadow-sm">
                          <span className="font-mono text-[9px] text-black font-bold tracking-tighter uppercase">JS • MutationObserver • TreeWalker</span>
                       </div>
                       <div className="w-9 h-7 bg-white rounded-[2px] flex items-center justify-center shadow-sm">
                          <span className="font-bold text-[10px] text-black">MV3</span>
                       </div>
                    </div>
                    <div className="space-y-2.5">
                       <FeatureRow icon={<Lock size={12} className="text-orange-500" />} title="Smart Context" desc="Heuristic logic detects & blurs 'danger words'." />
                       <FeatureRow icon={<Zap size={12} className="text-orange-500" />} title="Automated" desc="Auto-fetches blocklists via TVMaze/Wiki APIs." />
                       <FeatureRow icon={<Activity size={12} className="text-orange-500" />} title="Optimized" desc="High-performance DOM manipulation." />
                    </div>
                 </div>
              </div>

            </motion.div>
          </div>

          {/* GitHub Drawer */}
          <AnimatePresence>
            {isFlipped && (
              <motion.div
                initial={{ y: -40, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -40, opacity: 0, scale: 0.95 }}
                className="mt-6 w-[90%] max-w-[280px] bg-zinc-800 border border-white/10 rounded-xl shadow-2xl flex items-center justify-between p-4 z-10"
              >
                <div className="flex items-center gap-3 pl-1">
                  <Github size={18} className="text-white" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white uppercase leading-none">GitHub</span>
                    <span className="text-[10px] text-zinc-400">Public Repository</span>
                  </div>
                </div>
                <a 
                  href="https://github.com/Nielr2004/spoiler-shield.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-[10px] font-bold flex items-center gap-1.5 transition-colors shadow-lg"
                  onClick={(e) => e.stopPropagation()} 
                >
                  View Code <ArrowRight size={12} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-6 text-[10px] text-zinc-500 font-bold animate-pulse tracking-widest uppercase text-center">
            {isFlipped ? "Tap card to return" : "Interactive Preview • Tap to Flip"}
          </p>
        </div>

        {/* === SECTION 2: DOCUMENTATION (Natural Flow) === */}
        <div className="w-full bg-zinc-900/50 border-t border-white/5 backdrop-blur-md px-6 py-8">
          <div className="max-w-md mx-auto space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-orange-500/10 rounded-xl border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <Terminal size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Project Documentation</h3>
                <p className="text-[10px] text-zinc-400">Manifest V3 • Chrome Extension</p>
              </div>
            </div>

            <div className="text-sm text-zinc-300 leading-relaxed space-y-4">
              <p>
                <strong className="text-white">Spoiler Shield</strong> is a privacy-focused Chrome Extension designed to preserve the viewing experience. It proactively scans web pages for potential media spoilers and obfuscates them in real-time before they can be read.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-zinc-200 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Code2 size={14} className="text-blue-400" /> Core Tech
                  </h4>
                  <p className="text-xs text-zinc-400 leading-5">
                    Built without heavy frameworks using vanilla <span className="text-zinc-200 font-medium">ES6+ JavaScript</span> and the <span className="text-zinc-200 font-medium">Chrome Extension API</span>. Utilizes <span className="text-zinc-200 font-medium">TreeWalker</span> for efficient DOM traversal.
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-zinc-200 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Activity size={14} className="text-green-400" /> Performance
                  </h4>
                  <p className="text-xs text-zinc-400 leading-5">
                    Zero-dependency architecture ensures lightweight operation. The <span className="text-zinc-200 font-medium">MutationObserver</span> handles dynamic content (SPA) without layout thrashing.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

// --- Helper Components ---

const ModeBtn = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
  <button
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all 
      ${active 
        ? 'bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.3)] scale-105' 
        : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
      }`}
  >
    {label}
  </button>
);

const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 shrink-0">{icon}</div>
    <p className="text-[11px] text-zinc-400 leading-tight">
      <strong className="text-zinc-100 block mb-0.5">{title}</strong> 
      {desc}
    </p>
  </div>
);

export default ShieldWidget;