'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  User, Briefcase, Cpu, Github, Linkedin, Mail, 
  AppWindow, ShieldCheck, Search, Mic, Camera, 
  Wifi, Battery, Signal, Terminal, 
  Command, Triangle, Circle, Square, 
  Cpu as CpuIcon, HardDrive, Bluetooth, FolderOpen, Grid,
  Folder, FileText, Download, Cloud, Map as MapIcon
} from 'lucide-react';

// Widgets
import SkillsWidget from '@/components/widgets/SkillsWidget';
import ExperienceWidget from '@/components/widgets/ExperienceWidget';
import ProfileWidget from '@/components/widgets/ProfileWidget';
import WeatherWidget from '@/components/widgets/WeatherWidget';
import PhotoWidget from '@/components/widgets/PhotoWidget';
import MapWidget from '@/components/widgets/MapWidget';
import ShieldWidget from '@/components/widgets/ShieldWidget';

// App Window Component
import Window from '@/components/os/Window';

// --- CUSTOM WIDGETS ---

// File Manager Widget (The Resume Hub)
const FileManagerWidget = () => (
  <div className="flex flex-col md:flex-row h-full w-full bg-[#1e1e1e] text-zinc-200">
     {/* Sidebar */}
     <div className="w-full md:w-48 bg-black/20 md:border-r border-b md:border-b-0 border-white/5 p-4 flex md:flex-col gap-1 md:gap-2 shrink-0 overflow-x-auto">
        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1 hidden md:block">Locations</div>
        <button className="flex items-center gap-2 px-3 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm font-medium w-full md:w-auto whitespace-nowrap">
           <Folder size={16} /> Documents
        </button>
        <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-lg text-sm text-zinc-400 w-full md:w-auto whitespace-nowrap transition-colors">
           <Cloud size={16} /> iCloud Drive
        </button>
        <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-lg text-sm text-zinc-400 w-full md:w-auto whitespace-nowrap transition-colors">
           <Download size={16} /> Downloads
        </button>
     </div>

     {/* Main Content */}
     <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
           <FolderOpen size={24} className="text-zinc-500" />
           Documents
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* The Resume File */}
            <a 
              href="/resume.pdf" 
              download="Snehashis_Roy_Resume.pdf"
              className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-600/10 border border-transparent hover:border-blue-500/30 transition-all cursor-pointer"
            >
               <div className="w-16 h-20 bg-zinc-800 border border-white/10 rounded-md flex items-center justify-center relative shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute -right-2 -top-2 bg-red-500 rounded-full p-1 shadow-md">
                     <FileText size={12} className="text-white" />
                  </div>
                  <span className="text-[8px] font-mono text-zinc-500 absolute bottom-2">PDF</span>
                  <div className="w-8 h-1 bg-zinc-700 rounded-full mb-1" />
                  <div className="w-6 h-1 bg-zinc-700 rounded-full" />
               </div>
               <div className="text-center">
                  <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">My Resume</span>
                  <span className="block text-[10px] text-zinc-500">2.4 MB</span>
               </div>
            </a>

            {/* Dummy File 1 */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
               <div className="w-16 h-20 bg-zinc-800 border border-white/10 rounded-md flex items-center justify-center shadow-lg">
                  <Folder size={24} className="text-blue-400" />
               </div>
               <div className="text-center">
                  <span className="text-sm font-medium">Projects</span>
                  <span className="block text-[10px] text-zinc-500">Folder</span>
               </div>
            </div>

        </div>
     </div>
  </div>
);

// --- APP DATA DEFINITIONS ---

// 1. Core System Apps
const coreApps = [
  { id: 'files', title: 'Files', icon: <Folder size={26} />, bg: 'bg-blue-500', widget: <FileManagerWidget /> },
  { id: 'about', title: 'Profile', icon: <User size={26} />, bg: 'bg-zinc-800', widget: <ProfileWidget /> },
  { id: 'work', title: 'Work', icon: <Briefcase size={26} />, bg: 'bg-zinc-700', widget: <ExperienceWidget /> },
  { id: 'skills', title: 'Skills', icon: <Cpu size={26} />, bg: 'bg-purple-600', widget: <SkillsWidget /> },
];

// 2. Project Apps
const projectApps = [
  { 
    id: 'airbnb', title: 'Airbnb NYC', icon: <MapIcon size={26} />,
    bg: 'bg-gradient-to-br from-rose-500 to-pink-600', 
    widget: <MapWidget />
  },
  { 
    id: 'spoiler', title: 'Spoiler Shield', icon: <ShieldCheck size={26} />, 
    bg: 'bg-gradient-to-br from-emerald-500 to-teal-600', 
    widget: <ShieldWidget /> 
  },
  { 
    id: 'input', title: 'TheInput', icon: <Terminal size={26} />, 
    bg: 'bg-gradient-to-br from-amber-400 to-orange-600', 
    url: 'https://github.com/snehashis/TheInput' 
  },
];

// 3. Social Apps
const socialApps = [
  { id: 'github', title: 'GitHub', icon: <Github size={26} />, bg: 'bg-black', url: 'https://github.com/Nielr2004' },
  { id: 'linkedin', title: 'LinkedIn', icon: <Linkedin size={26} />, bg: 'bg-[#0077b5]', url: 'https://www.linkedin.com/in/snehashis-roy-40691725a/' },
  { id: 'mail', title: 'Gmail', icon: <Mail size={26} />, bg: 'bg-red-500', url: 'mailto:roysnehashis2004@gmail.com' },
];

const allApps = [...coreApps, ...projectApps, ...socialApps];

export default function Home() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0); 
  const [time, setTime] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Swipe refs
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      setDateStr(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const handleAppClick = (app: any) => {
    if (app.url) {
      window.open(app.url, '_blank');
    } else {
      setActiveApp(app.id);
    }
  };

  const closeApp = () => setActiveApp(null);

  // --- MOBILE HANDLERS ---
  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientY;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientY;
  };
  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (distance > 50 && currentPage === 0) setCurrentPage(1); 
    if (distance < -50 && currentPage === 1) setCurrentPage(0); 
  };
  const handleBack = () => {
    if (activeApp) closeApp();
    else if (currentPage === 1) setCurrentPage(0);
  };
  const handleHome = () => {
    if (activeApp) closeApp();
    if (currentPage === 1) setCurrentPage(0);
  };
  const handleRecents = () => setCurrentPage(currentPage === 0 ? 1 : 0);
  
  // --- CONTENT ---
  let activeWidget = null;
  let activeTitle = '';

  if (activeApp === 'projects-folder') {
     activeTitle = 'My Projects';
     activeWidget = (
        <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
           {projectApps.map(app => (
              <button 
                key={app.id} 
                onClick={() => handleAppClick(app)}
                className="flex flex-col items-center gap-2 group hover:scale-105 transition-transform"
              >
                  <div className={`w-16 h-16 ${app.bg} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {app.icon}
                  </div>
                  <span className="text-white text-sm font-medium">{app.title}</span>
              </button>
           ))}
        </div>
     );
  } else {
     const app = allApps.find(a => a.id === activeApp);
     if (app) {
        activeWidget = app.widget;
        activeTitle = app.title;
     }
  }

  // --- SUB-COMPONENTS ---
  const DockIcon = ({ app }: { app: any }) => (
    <motion.button 
      onClick={() => handleAppClick(app)}
      whileHover={{ scale: 1.15, y: -10 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center gap-1 group relative pb-2"
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 ${app.bg} rounded-[14px] md:rounded-[18px] flex items-center justify-center text-white shadow-lg shadow-black/40 border border-white/10`}>
        {app.icon}
      </div>
      <span className="absolute -top-12 bg-zinc-800/90 backdrop-blur text-white text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 whitespace-nowrap pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-200">
         {app.title}
      </span>
      {activeApp === app.id && <div className="absolute bottom-0 w-1 h-1 bg-white rounded-full" />}
    </motion.button>
  );

  const MobileAppIcon = ({ app, showTitle = true }: { app: any, showTitle?: boolean }) => (
    <motion.button 
      onClick={() => handleAppClick(app)}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center gap-1.5 group w-full"
    >
      <div className={`w-[60px] h-[60px] ${app.bg} rounded-[22px] flex items-center justify-center text-white shadow-lg border-t border-white/20 relative overflow-hidden`}>
         <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
         <div className="relative z-10 drop-shadow-md">{app.icon}</div>
      </div>
      {showTitle && <span className="text-xs text-white font-medium drop-shadow-md tracking-tight text-center leading-tight">{app.title}</span>}
    </motion.button>
  );

  const MacWidget = ({ children, title, className }: any) => (
    <div className={`bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl ${className}`}>
        {title && <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">{title}</h3>}
        {children}
    </div>
  );

  if (!mounted) return <div className="h-screen w-screen bg-black" />;

  // =================================================================================
  //  DESKTOP VIEW (macOS)
  // =================================================================================
  if (!isMobile) {
    return (
      <main className="h-screen w-screen bg-cover bg-center overflow-hidden flex flex-col font-sans selection:bg-blue-500/30 relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2532&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* TOP MENU (Fixed) */}
        <div className="absolute top-0 left-0 w-full h-8 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-5 text-white text-sm z-[100] shadow-sm">
           <div className="flex items-center gap-5">
              <Command size={16} className="fill-white" />
              <span className="font-bold tracking-tight">Portfolio OS</span>
              <span className="hidden lg:inline opacity-70 hover:opacity-100 cursor-default">File</span>
              <span className="hidden lg:inline opacity-70 hover:opacity-100 cursor-default">View</span>
              <span className="hidden lg:inline opacity-70 hover:opacity-100 cursor-default">Window</span>
              <span className="hidden lg:inline opacity-70 hover:opacity-100 cursor-default">Help</span>
           </div>
           <div className="flex items-center gap-4 opacity-90">
              <Bluetooth size={16} />
              <Wifi size={16} />
              <Search size={16} />
              <span className="font-medium tracking-wide ml-2">{dateStr} &nbsp; {time}</span>
           </div>
        </div>

        {/* DESKTOP AREA - FIXED LAYOUT */}
        <div className="absolute inset-0 top-8 z-0">
           {/* Center Logo */}
           <div className="absolute inset-0 flex items-center justify-center opacity-100 pointer-events-none">
              <h1 className="text-white/5 text-[180px] font-bold tracking-tighter blur-sm select-none">OS X</h1>
           </div>

           {/* --- WIDGETS COLUMN (Right Side - FIXED) --- */}
           <div className="absolute right-8 top-4 w-80 flex flex-col gap-4 pointer-events-auto">
               
               {/* Calendar Widget */}
               <MacWidget title="Calendar" className="hover:bg-zinc-900/50 transition-colors cursor-default">
                  <div className="flex flex-col items-center justify-center py-2">
                     <span className="text-red-500 font-bold uppercase text-xs tracking-widest">{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</span>
                     <span className="text-6xl font-extralight text-white">{new Date().getDate()}</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-500 mt-2">
                     {['S','M','T','W','T','F','S'].map((d, i) => <span key={i}>{d}</span>)}
                     {[...Array(30)].map((_,i)=><span key={i} className={`text-white font-medium ${i+1===new Date().getDate()?'bg-red-500 rounded-full text-white':''}`}>{i+1}</span>)}
                  </div>
               </MacWidget>

               {/* Weather Widget */}
               <div className="w-full h-40">
                  <WeatherWidget />
               </div>

               {/* CPU Widget */}
               <MacWidget className="flex justify-between items-center gap-4 hover:bg-zinc-900/50 transition-colors cursor-default">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><CpuIcon size={20} /></div>
                    <div><div className="text-xs font-bold text-white">CPU Load</div><div className="text-[10px] text-zinc-400">Apple M2 Pro</div></div>
                 </div>
                 <span className="text-xl font-mono text-white">12%</span>
               </MacWidget>

               {/* Storage Widget */}
               <MacWidget className="flex justify-between items-center gap-4 hover:bg-zinc-900/50 transition-colors cursor-default">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><HardDrive size={20} /></div>
                    <div><div className="text-xs font-bold text-white">Macintosh HD</div><div className="text-[10px] text-zinc-400">450GB Free</div></div>
                 </div>
                 <div className="w-10 h-10 rounded-full border-4 border-zinc-700 border-t-purple-500" />
               </MacWidget>
           </div>
           
           {/* --- LEFT COLUMN ICONS --- */}
           <div className="absolute left-8 top-4 flex flex-col gap-8">
               {/* Profile Photo - Increased from w-24 to w-32 */}
               <div className="w-32 group cursor-pointer" onClick={() => handleAppClick(coreApps[1])}> {/* Opens Profile */}
                   <div className="transform transition-transform group-hover:scale-105 shadow-xl rounded-xl overflow-hidden w-32 h-50">
                      <PhotoWidget />
                   </div>
                   <div className="text-center mt-2">
                       <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-md shadow-sm border border-white/5">Me.jpg</span>
                   </div>
               </div>
               
               {/* Files / Resume Icon Desktop Shortcut */}
               <div className="w-32 group cursor-pointer flex flex-col items-center" onClick={() => handleAppClick(coreApps[0])}> {/* Opens Files */}
                   <div className="w-20 h-20 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-500/30 transition-colors">
                      <Folder size={40} className="text-blue-400 fill-blue-400/20" />
                   </div>
                   <div className="text-center mt-2">
                       <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-md shadow-sm border border-white/5">Resume</span>
                   </div>
               </div>

               {/* Projects Folder */}
               <div className="w-32 group cursor-pointer flex flex-col items-center" onClick={() => setActiveApp('projects-folder')}>
                   <div className="w-20 h-20 bg-zinc-700/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-zinc-600/50 transition-colors">
                      <FolderOpen size={40} className="text-yellow-400 fill-yellow-400/20" />
                   </div>
                   <div className="text-center mt-2">
                       <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-md shadow-sm border border-white/5">Projects</span>
                   </div>
               </div>
           </div>
        </div>

        {/* 3. DOCK */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center z-50 pointer-events-none">
           <div className="pointer-events-auto bg-white/5 backdrop-blur-2xl border border-white/10 px-4 pb-3 pt-4 rounded-[24px] flex items-end gap-3 shadow-2xl transition-transform hover:scale-105 duration-300">
              {coreApps.map(app => <DockIcon key={app.id} app={app} />)}
              <div className="w-[1px] h-10 bg-white/10 mx-2 mb-2" />
              {socialApps.map(app => <DockIcon key={app.id} app={app} />)}
           </div>
        </div>

        <AnimatePresence>
          {activeApp && activeWidget && <Window title={activeTitle} onClose={closeApp}>{activeWidget}</Window>}
        </AnimatePresence>
      </main>
    );
  }

  // =================================================================================
  //  MOBILE VIEW (Android 14)
  // =================================================================================
  return (
    <main 
      className="h-[100dvh] w-screen bg-black overflow-hidden flex flex-col relative font-sans touch-none"
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out"
        style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2532&auto=format&fit=crop')",
            filter: currentPage === 1 ? 'brightness(0.3) blur(15px)' : 'brightness(0.7) blur(0px)',
            transform: currentPage === 1 ? 'scale(1.1)' : 'scale(1)'
        }}
      />

      {/* Status Bar */}
      <div className="h-10 w-full flex justify-between items-end pb-2 text-white px-6 shrink-0 z-30 relative">
          <span className="text-xs font-semibold tracking-wide">{time}</span>
          <div className="flex gap-2 items-center opacity-90">
             <Wifi size={14} />
             <Signal size={14} />
             <Battery size={16} />
          </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative w-full overflow-hidden z-20">
         <AnimatePresence mode="wait">
            {currentPage === 0 ? (
               <motion.div 
                 key="home"
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                 className="w-full h-full px-5 pt-10 grid grid-cols-4 grid-rows-[auto_auto_auto_1fr] gap-4"
               >
                  <div className="col-span-4 mb-2 pl-1">
                     <span className="text-xs font-bold text-white/80 uppercase tracking-widest drop-shadow-md">{dateStr}</span>
                     <h1 className="text-[64px] font-thin text-white leading-none tracking-tight drop-shadow-lg">{time}</h1>
                  </div>

                  <div className="col-span-2 aspect-square"><PhotoWidget /></div>
                  <div className="col-span-2 aspect-square"><WeatherWidget /></div>
                  
                  <div className="col-span-4 grid grid-cols-4 gap-4 mt-8">
                     <MobileAppIcon app={coreApps[0]} /> {/* Files */}
                     <MobileAppIcon app={coreApps[1]} /> {/* Profile */}
                     <MobileAppIcon app={coreApps[3]} /> {/* Skills */}
                     
                     <button onClick={() => setCurrentPage(1)} className="flex flex-col items-center gap-1.5 opacity-90">
                        <div className="w-[60px] h-[60px] bg-blue-500/20 backdrop-blur-md rounded-[22px] border border-blue-400/30 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-1.5 p-3">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"/><div className="w-1.5 h-1.5 bg-white rounded-full"/><div className="w-1.5 h-1.5 bg-white rounded-full"/><div className="w-1.5 h-1.5 bg-white rounded-full"/>
                            </div>
                        </div>
                        <span className="text-xs text-white font-medium drop-shadow-md">All Apps</span>
                     </button>
                  </div>
               </motion.div>
            ) : (
               <motion.div 
                 key="drawer"
                 initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
                 transition={{ type: "spring", damping: 30, stiffness: 350 }}
                 className="absolute inset-0 bg-zinc-950/80 backdrop-blur-2xl rounded-t-[32px] p-6 pt-4 overflow-y-auto"
               >
                  <div className="w-12 h-1 bg-zinc-600 rounded-full mx-auto mb-6 opacity-50" />
                  <div className="w-full h-12 bg-zinc-800 rounded-full flex items-center px-4 gap-3 mb-8 border border-white/5">
                      <Search size={20} className="text-zinc-500" />
                      <span className="text-sm text-zinc-400">Search apps...</span>
                  </div>
                  <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Core</h3>
                  <div className="grid grid-cols-4 gap-y-8 mb-8">
                     {coreApps.map(app => <MobileAppIcon key={app.id} app={app} />)}
                  </div>
                  <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Projects</h3>
                  <div className="grid grid-cols-4 gap-y-8 mb-8">
                     {projectApps.map(app => <MobileAppIcon key={app.id} app={app} />)}
                  </div>
                  <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Social</h3>
                  <div className="grid grid-cols-4 gap-y-8 mb-8">
                     {socialApps.map(app => <MobileAppIcon key={app.id} app={app} />)}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>

      <AnimatePresence>
         {currentPage === 0 && (
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="w-full px-4 pb-4 z-30 flex flex-col gap-5">
               <div onClick={() => setCurrentPage(1)} className="w-full h-[52px] bg-[#222]/90 backdrop-blur-xl rounded-full flex items-center px-5 gap-3 shadow-2xl border border-white/10 active:scale-95 transition-transform">
                   <div className="w-5 h-5 flex items-center justify-center font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">G</div>
                   <input type="text" placeholder="Search..." className="flex-1 bg-transparent text-sm text-white border-none outline-none pointer-events-none" readOnly />
                   <Mic size={20} className="text-zinc-400" /><Camera size={20} className="text-zinc-400" />
               </div>
               <div className="flex justify-between items-end px-2">
                  <MobileAppIcon app={socialApps[0]} showTitle={false} />
                  <MobileAppIcon app={socialApps[1]} showTitle={false} />
                  <MobileAppIcon app={socialApps[2]} showTitle={false} />
                  <MobileAppIcon app={projectApps[0]} showTitle={false} />
               </div>
            </motion.div>
         )}
      </AnimatePresence>

      <div className="h-14 w-full flex items-center justify-around shrink-0 z-50 bg-black/90 backdrop-blur-lg border-t border-white/5 pb-2">
          <button onClick={handleBack} className="w-20 h-full flex items-center justify-center active:bg-white/10 rounded-full transition-colors"><Triangle size={20} className="fill-white/80 rotate-[-90deg] text-white/80" /></button>
          <button onClick={handleHome} className="w-20 h-full flex items-center justify-center active:bg-white/10 rounded-full transition-colors"><Circle size={16} className="fill-white/80 text-white/80" /></button>
          <button onClick={handleRecents} className="w-20 h-full flex items-center justify-center active:bg-white/10 rounded-full transition-colors"><Square size={16} className="fill-white/80 text-white/80" /></button>
      </div>

      <AnimatePresence>
        {activeApp && activeWidget && <Window title={activeTitle} onClose={closeApp}>{activeWidget}</Window>}
      </AnimatePresence>
    </main>
  );
}