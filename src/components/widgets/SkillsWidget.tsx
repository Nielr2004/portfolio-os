'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, Server, Database, Code2, Terminal, Zap, Shield, 
  Hexagon, Activity, CircuitBoard, Layers, Globe, Cpu, 
  Cloud, GitBranch, Box, PenTool, Command, BarChart, BrainCircuit
} from 'lucide-react';

// --- YOUR SKILLS DATA ---
const categories = [
  {
    id: 'frontend',
    label: 'Frontend Arch',
    icon: <Layout size={16} />,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500',
    border: 'border-cyan-500/30',
    skills: [
      { name: 'JavaScript', level: 95, version: 'ES6+', desc: 'Core Logic & DOM' },
      { name: 'React', level: 90, version: 'v18', desc: 'Component Library' },
      { name: 'Next.js', level: 88, version: 'v14', desc: 'Full Stack Framework' },
      { name: 'HTML5/CSS3', level: 98, version: 'W3C', desc: 'Semantic Layouts' },
      { name: 'Tailwind', level: 92, version: 'v3.4', desc: 'Utility-First Styling' },
    ]
  },
  {
    id: 'backend',
    label: 'Core Processing',
    icon: <Server size={16} />,
    color: 'text-orange-400',
    bg: 'bg-orange-500',
    border: 'border-orange-500/30',
    skills: [
      { name: 'Python', level: 90, version: 'v3.12', desc: 'General Purpose' },
      { name: 'Node.js', level: 85, version: 'v20', desc: 'JS Runtime' },
      { name: 'Express.js', level: 82, version: 'v4', desc: 'REST API Framework' },
      { name: 'Flask', level: 80, version: 'v3', desc: 'Micro-Framework' },
      { name: 'REST APIs', level: 88, version: 'Std', desc: 'Protocol Design' },
    ]
  },
  {
    id: 'datascience',
    label: 'Data Intel',
    icon: <BrainCircuit size={16} />,
    color: 'text-pink-400',
    bg: 'bg-pink-500',
    border: 'border-pink-500/30',
    skills: [
      { name: 'Pandas', level: 85, version: 'Py', desc: 'Data Manipulation' },
      { name: 'NumPy', level: 82, version: 'Py', desc: 'Numerical Analysis' },
      { name: 'Matplotlib', level: 78, version: 'Viz', desc: 'Static Plotting' },
      { name: 'Seaborn', level: 80, version: 'Viz', desc: 'Statistical Viz' },
      { name: 'PowerBI', level: 75, version: 'MS', desc: 'Business Intel' },
      { name: 'Excel', level: 90, version: '365', desc: 'Advanced Sheets' },
      { name: 'Tableau', level: 80, version: 'MS', desc: 'Interactive Viz' },
    ]
  },
  {
    id: 'database',
    label: 'Memory Banks',
    icon: <Database size={16} />,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500',
    border: 'border-emerald-500/30',
    skills: [
      { name: 'MongoDB', level: 85, version: 'v7', desc: 'NoSQL Document Store' },
      { name: 'PostgreSQL', level: 80, version: 'v16', desc: 'Relational SQL' },
      { name: 'Firebase', level: 78, version: 'Google', desc: 'BaaS & Realtime' },
      { name: 'Supabase', level: 82, version: 'OSS', desc: 'Postgres Wrapper' },
      { name: 'SQL', level: 80, version: 'Std', desc: 'Structured Query' },
      { name: 'NoSQL', level: 78, version: 'Std', desc: 'Unstructured Data' },
    ]
  },
  {
    id: 'tools',
    label: 'Design & Ops',
    icon: <PenTool size={16} />,
    color: 'text-purple-400',
    bg: 'bg-purple-500',
    border: 'border-purple-500/30',
    skills: [
      { name: 'Git', level: 92, version: 'SCM', desc: 'Version Control' },
      { name: 'GitHub', level: 90, version: 'Web', desc: 'Repo Management' },
      { name: 'Figma', level: 85, version: 'Web', desc: 'UI/UX Prototyping' },
      { name: 'Canva', level: 88, version: 'Pro', desc: 'Graphic Design' },
      { name: 'Illustrator', level: 70, version: 'CC', desc: 'Vector Graphics' },
      { name: 'Jupyter', level: 75, version: 'OSS', desc: 'Notebook Environment' },
    ]
  }
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  exit: { 
    y: -10, 
    opacity: 0, 
    scale: 0.95, 
    transition: { duration: 0.2 }
  }
};

const SkillsWidget = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab];

  return (
    <div className="w-full h-full bg-black relative flex flex-col font-sans overflow-hidden">
      
      {/* 1. BACKGROUND VISUALS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Animated Glow Blob - Smooth color transitions */}
        <motion.div 
          animate={{ backgroundColor: activeCategory.color.includes('cyan') ? '#06b6d4' : activeCategory.color.includes('orange') ? '#f97316' : activeCategory.color.includes('pink') ? '#ec4899' : activeCategory.color.includes('emerald') ? '#10b981' : '#a855f7' }}
          className="absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full opacity-20 transition-all duration-700" 
        />
      </div>

      {/* 2. HEADER */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/40 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${activeCategory.border}`}>
            <Activity size={18} className={`relative z-10 transition-colors duration-500 ${activeCategory.color}`} />
            <div className={`absolute inset-0 opacity-10 animate-pulse ${activeCategory.bg}`} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-widest font-display">Neural Upgrade</h2>
            <p className="text-[10px] text-zinc-500 font-mono">SYS.OPTIMIZED // V.3.1</p>
          </div>
        </div>
        
        {/* Global Sync Rate */}
        <div className="text-right">
           <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Global Sync</span>
           <div className="flex items-end justify-end gap-1">
             <span className="text-lg font-mono text-white font-bold leading-none">
               {Math.round(categories.flatMap(c => c.skills).reduce((acc, curr) => acc + curr.level, 0) / categories.flatMap(c => c.skills).length)}%
             </span>
             <span className={`h-1.5 w-1.5 rounded-full mb-1 animate-pulse ${activeCategory.bg}`} />
           </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT (Split Layout) */}
      <div className="flex-1 flex flex-col md:flex-row relative z-10 overflow-hidden">
        
        {/* --- LEFT: NAVIGATION --- */}
        <div className="
          w-full md:w-64 bg-zinc-900/40 border-b md:border-b-0 md:border-r border-white/5 
          flex flex-row md:flex-col p-2 gap-2 overflow-x-auto md:overflow-y-auto no-scrollbar shrink-0
        ">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(index)}
              className={`
                relative flex items-center gap-3 p-3 rounded-xl transition-all w-full min-w-[140px] md:min-w-0 text-left border group duration-300
                ${activeTab === index 
                  ? `bg-white/5 border-white/10 text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]` 
                  : 'bg-transparent border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/5'}
              `}
            >
              {/* Active Indicator */}
              {activeTab === index && (
                <motion.div 
                  layoutId="nav-indicator"
                  className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-r-full ${cat.bg}`} 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <div className={`
                p-1.5 rounded-md border border-white/5 transition-colors duration-300
                ${activeTab === index ? `${cat.bg} bg-opacity-10 ${cat.color}` : 'bg-black/40 text-zinc-600'}
              `}>
                {cat.icon}
              </div>
              
              <div className="flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider">{cat.label}</span>
                <div className="flex items-center justify-between">
                   <span className="text-[9px] font-mono opacity-50">{cat.skills.length} Nodes</span>
                   {activeTab === index && <div className={`md:hidden w-1 h-1 rounded-full ${cat.bg}`} />}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* --- RIGHT: GRID CONTENT --- */}
        <div className="flex-1 relative flex flex-col bg-black/20 overflow-hidden">
          
          {/* Section Title */}
          <div className="px-6 pt-6 pb-2 shrink-0 flex items-center gap-3">
             <motion.div 
               key={activeCategory.id}
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className={`p-1 rounded bg-white/5 ${activeCategory.color}`}
             >
                <Cpu size={14} />
             </motion.div>
             <div>
                <motion.h3 
                   key={`title-${activeCategory.id}`}
                   initial={{ x: -10, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   className="text-sm font-bold text-white font-display uppercase tracking-wide"
                >
                  {activeCategory.label} Matrix
                </motion.h3>
             </div>
             <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-2" />
          </div>

          {/* SCROLLABLE GRID */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-2">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={activeCategory.id} // Re-trigger stagger on tab change
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3"
            >
              <AnimatePresence mode="popLayout">
                {activeCategory.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    layoutId={`skill-${skill.name}`}
                    className="group relative overflow-hidden bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-xl p-3 hover:bg-zinc-800/50 transition-colors duration-300"
                  >
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]`} />
                    
                    <div className="flex justify-between items-start relative z-10">
                      {/* Icon & Name */}
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                           <Hexagon size={32} className={`absolute stroke-1 text-zinc-800 group-hover:text-zinc-600 transition-colors`} />
                           <span className={`text-[9px] font-bold font-mono relative z-10 ${activeCategory.color}`}>
                              {skill.name.slice(0,1)}
                           </span>
                        </div>
                        <div>
                           <div className="flex items-baseline gap-2">
                              <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                                {skill.name}
                              </h4>
                              <span className="text-[9px] text-zinc-600 font-mono group-hover:text-zinc-500 transition-colors">
                                {skill.version}
                              </span>
                           </div>
                           <p className="text-[9px] text-zinc-500 leading-tight mt-0.5">
                             {skill.desc}
                           </p>
                        </div>
                      </div>

                      {/* Level Indicator */}
                      <div className="text-right">
                         <span className={`text-[10px] font-mono font-bold ${activeCategory.color}`}>
                           {skill.level}%
                         </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 h-1 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: `${skill.level}%` }}
                         transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                         className={`h-full rounded-full ${activeCategory.bg} opacity-80 shadow-[0_0_8px_currentColor]`}
                       />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {/* Bottom spacer */}
            <div className="h-8" />
          </div>

        </div>
      </div>

      {/* 4. FOOTER DECORATION */}
      <div className="h-1 w-full bg-zinc-950 border-t border-white/5 flex shrink-0">
         <motion.div 
           layoutId="footer-bar"
           className={`w-32 h-full ${activeCategory.bg} opacity-60`} 
         />
         <div className="flex-1 flex gap-1 px-1">
            {[...Array(10)].map((_, i) => (
               <div key={i} className="w-full h-full bg-zinc-900 opacity-50" />
            ))}
         </div>
      </div>

    </div>
  );
};

export default SkillsWidget;