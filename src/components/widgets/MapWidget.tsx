'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Navigation, Globe, Train, ChevronLeft, ChevronRight, ScanLine, Github, Database, FileBarChart, BrainCircuit, ArrowRight, Layers, Map as MapIcon, Heart } from 'lucide-react';

// 1. DATA SAMPLES
const listings = [
  {
    id: 1,
    neighborhood: "Tribeca",
    borough: "Manhattan",
    title: "The High-End Baseline",
    subtitle: "Market Analysis: Luxury Sector",
    price: "$850",
    rating: "4.96",
    metric: "Price Density: High",
    distance: "2.1 km",
    coords: "40.7163° N, 74.0086° W",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    tags: ["Benchmark", "Outlier", "Luxury"]
  },
  {
    id: 2,
    neighborhood: "Times Square",
    borough: "Manhattan",
    title: "The 'Tourist Trap'",
    subtitle: "Detected: Overpriced / Avg Rating",
    price: "$450",
    rating: "3.80",
    metric: "Value Score: Low",
    distance: "0.1 km",
    coords: "40.7580° N, 73.9855° W",
    // FIX: Updated to a stable Times Square/Busy Street image
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
    tags: ["Avoid", "High Traffic", "Noise"]
  },
  {
    id: 3,
    neighborhood: "Harlem",
    borough: "Manhattan",
    title: "The 'Hidden Gem'",
    subtitle: "Identified: <$150 & 100+ Reviews",
    price: "$135",
    rating: "4.92",
    metric: "Value Score: Elite",
    distance: "8.2 km",
    coords: "40.8115° N, 73.9465° W",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    tags: ["Recommended", "Verified", "Value"]
  }
];

// 2. FINAL PROJECT DASHBOARD
const projectInfo = {
  id: 'final',
  title: "NYC Geospatial Analysis",
  subtitle: "The Airbnb Insider",
  description: "A location intelligence project that helps users distinguish between overpriced 'Tourist Traps' and high-value 'Hidden Gems' using spatial data analysis.",
  image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=800&q=80", 
  stats: [
    { label: "Hidden Gems", value: "150+", icon: <Star size={14} className="text-yellow-400" /> },
    { label: "Visualization", value: "Folium", icon: <MapIcon size={14} className="text-green-400" /> },
    { label: "Data Engine", value: "Pandas", icon: <Database size={14} className="text-blue-400" /> },
  ],
  stack: ["Python", "Pandas", "Folium", "Seaborn"]
};

const MapWidget = () => {
  const [index, setIndex] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Determine if we are at the final slide
  const isProjectView = index === listings.length;
  const active: any = isProjectView ? projectInfo : listings[index];

  // NAVIGATION HANDLERS
  const nextLocation = () => {
    if (isProjectView) return; 
    triggerWarp(() => {
        setIndex((prev) => prev + 1);
        setIsLiked(false);
    });
  };

  const prevLocation = () => {
    if (index === 0) return;
    triggerWarp(() => {
        setIndex((prev) => prev - 1);
        setIsLiked(false);
    });
  };

  const triggerWarp = (callback: () => void) => {
    setIsWarping(true);
    setTimeout(() => {
        callback();
        setIsWarping(false);
    }, 400);
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-black font-sans flex flex-col">
      
      {/* 1. BACKGROUND LAYER */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={isProjectView ? 'final-bg' : active.id}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={active.image} 
            alt={active.title} 
            className={`w-full h-full object-cover ${isProjectView ? 'opacity-30' : 'opacity-60'}`}
          />
          {/* Tech Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Warp Flash Effect */}
      <AnimatePresence>
        {isWarping && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white z-50 pointer-events-none mix-blend-overlay"
            />
        )}
      </AnimatePresence>

      {/* 2. TOP BAR (Stats) */}
      <div className="relative z-10 flex justify-between items-start p-6">
        <div className="flex gap-4 items-center">
          <div className={`w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center relative shadow-lg ${isProjectView ? 'border-orange-500/30' : ''}`}>
            {/* Radar Animation */}
            <div className={`absolute inset-0 rounded-full border-t border-l-transparent border-r-transparent border-b-transparent rotate-45 animate-[spin_3s_linear_infinite] ${isProjectView ? 'border-t-orange-400/80' : 'border-t-emerald-400/80'}`} />
            
            {isProjectView ? (
               <Layers size={16} className="text-orange-400" />
            ) : (
               <>
                 <div className="w-1 h-1 bg-emerald-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#34d399]" />
                 <Navigation size={16} className="text-white/80" />
               </>
            )}
          </div>
          <div>
            <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-0.5 font-mono ${isProjectView ? 'text-orange-400' : 'text-emerald-400'}`}>
              {isProjectView ? <BrainCircuit size={10} /> : <Globe size={10} />} 
              {isProjectView ? 'DATA PROCESSED' : 'LIVE FEED'}
            </div>
            <div className="text-xs font-mono text-zinc-400">
              {isProjectView ? 'INSIGHTS GENERATED' : active.coords}
            </div>
          </div>
        </div>
      </div>

      {/* 3. CENTER CONTENT (Glass Card) */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-6">
        <motion.div 
          key={isProjectView ? 'final-card' : active.id + "-card"}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-sm bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative"
        >
           <div className="space-y-5">
               {/* Like Button (Hidden on Project View) */}
              {!isProjectView && (
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[#09090b] border border-white/10 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-20 group/heart"
                >
                  <Heart size={20} className={`transition-colors duration-300 ${isLiked ? "fill-rose-500 text-rose-500" : "text-zinc-600 group-hover/heart:text-white"}`} />
                </button>
              )}
              
              {/* === LISTING VIEW === */}
              {!isProjectView && (
                <>
                  <div className="flex justify-between items-start">
                     <div>
                        <div className="flex items-center gap-2 text-orange-400 mb-1">
                           <MapPin size={12} className="fill-orange-400" />
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">{active.neighborhood}, {active.borough}</span>
                        </div>
                        <h2 className="text-2xl font-display font-bold text-white leading-none tracking-tight mb-1">{active.title}</h2>
                        <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">{active.subtitle}</p>
                     </div>
                  </div>

                  <div className="flex items-end gap-2 border-b border-white/5 pb-4">
                     <span className="text-3xl font-display font-bold text-white tracking-tight">{active.price}</span>
                     <span className="text-xs text-zinc-500 font-mono mb-1.5 uppercase">/ Night</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                     <StatBox label="Rating" value={active.rating} icon={<Star size={14} className="text-yellow-400 fill-yellow-400" />} />
                     <StatBox label="Analysis" value={active.metric === "Value Score: Elite" ? "Gem" : "Avg"} icon={<FileBarChart size={14} className="text-rose-400" />} />
                     <StatBox label="Distance" value={active.distance} icon={<Train size={14} className="text-blue-400" />} />
                  </div>
                </>
              )}

              {/* === PROJECT VIEW (FINAL SLIDE) === */}
              {isProjectView && (
                 <div className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest border border-orange-500/20 mb-3">
                       <ScanLine size={12} /> Analysis Complete
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">{active.title}</h2>
                    <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-6 border-l-2 border-orange-500/50 pl-3">
                       {active.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                       {active.stats.map((s: any, i: number) => (
                          <StatBox key={i} label={s.label} value={s.value} icon={s.icon} />
                       ))}
                    </div>
                 </div>
              )}

              {/* Tags / Stack */}
              <div className="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start">
                {(isProjectView ? active.stack : active.tags).map((tag: string) => (
                  <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-colors font-mono ${isProjectView ? 'bg-orange-500/5 text-orange-200 border-orange-500/20' : 'bg-white/5 text-zinc-300 border-white/5 hover:bg-white/10'}`}>
                    #{tag}
                  </span>
                ))}
              </div>
           </div>
        </motion.div>
      </div>

      {/* 4. CONTROLS (Bottom Bar) */}
      <div className="relative z-10 p-6 pt-0 pb-8 flex gap-3">
        
        {/* BACK BUTTON (Visible unless on first slide) */}
        {index > 0 && (
          <button 
            onClick={prevLocation}
            className="w-14 flex items-center justify-center bg-zinc-900 text-white border border-white/10 rounded-xl hover:bg-zinc-800 active:scale-95 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {isProjectView ? (
          // GITHUB LINK BUTTON
          <a 
            href="https://github.com/Nielr2004/NYC-Airbnb-Geospatial.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 group relative overflow-hidden bg-white text-black py-4 rounded-xl font-bold text-xs uppercase tracking-[0.15em] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-[0.98] transition-all font-mono flex items-center justify-center"
          >
             <span className="relative z-10 flex items-center gap-3">
               <Github size={16} /> ACCESS REPOSITORY <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </span>
             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-zinc-300/50 to-transparent z-0" />
          </a>
        ) : (
          // NEXT BUTTON
          <button 
            onClick={nextLocation}
            className="flex-1 group relative overflow-hidden bg-zinc-900 text-white border border-white/10 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.15em] hover:bg-zinc-800 active:scale-[0.98] transition-all font-mono"
          >
            <span className="relative z-10 flex items-center justify-center gap-3 text-zinc-300 group-hover:text-white">
               <ScanLine size={16} /> SCAN NEXT SECTOR <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        )}

      </div>

    </div>
  );
};

// --- Subcomponents ---

const StatBox = ({ label, value, icon }: any) => (
  <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-colors cursor-default group">
    <div className="text-zinc-500 group-hover:text-white transition-colors">{icon}</div>
    <span className="text-sm font-bold text-white font-mono">{value}</span>
    <span className="text-[7px] text-zinc-600 uppercase tracking-widest font-bold group-hover:text-zinc-400 transition-colors text-center leading-tight">{label}</span>
  </div>
);

export default MapWidget;