'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  User, Chrome, Github, Linkedin, Instagram, Mail, 
  AppWindow, ShieldCheck, Search, Mic, Camera, 
  Wifi, Battery, Signal, Terminal, 
  Command, Triangle, Circle, Square, 
  Cpu as CpuIcon, HardDrive, Bluetooth, FolderOpen, Grid,
  Folder, FileText, Download, Cloud, Map as MapIcon,
  Settings, Globe, ExternalLink, RefreshCw, Lock, Trash2
} from 'lucide-react';


// Widgets
import SkillsWidget from '@/components/widgets/SkillsWidget';
import ExperienceWidget from '@/components/widgets/ExperienceWidget';
import ProfileWidget from '@/components/widgets/ProfileWidget';
import WeatherWidget from '@/components/widgets/WeatherWidget';
import PhotoWidget from '@/components/widgets/PhotoWidget';
import MapWidget from '@/components/widgets/MapWidget';
import ShieldWidget from '@/components/widgets/ShieldWidget';

// OS Components
import Window from '@/components/os/Window';
import BootScreen from '@/components/os/BootScreen'; 
import LockScreen from '@/components/os/LockScreen'; 

// --- BROWSER WIDGET ---
const BrowserWidget = ({ url }: { url: string }) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-full w-full bg-white text-black">
       {/* Browser Toolbar */}
       <div className="h-9 bg-[#f1f1f1] border-b border-[#e1e1e1] flex items-center px-2 gap-2 shrink-0">
          <div className="flex gap-1 text-zinc-500">
             <div className="p-1 hover:bg-zinc-200 rounded"><Triangle size={12} className="-rotate-90 fill-zinc-500" /></div>
             <div className="p-1 hover:bg-zinc-200 rounded"><Triangle size={12} className="rotate-90 fill-zinc-500" /></div>
             <div className="p-1 hover:bg-zinc-200 rounded"><RefreshCw size={12} /></div>
          </div>
          
          {/* Address Bar */}
          <div className="flex-1 bg-white border border-[#e1e1e1] rounded-md h-6 flex items-center px-2 text-xs gap-2 text-zinc-600">
             <Lock size={10} className="text-green-600" />
             <span className="truncate flex-1">{currentUrl}</span>
          </div>

          <div className="p-1 hover:bg-zinc-200 rounded text-zinc-500">
             <Settings size={14} />
          </div>
       </div>

       {/* Browser Content */}
       <div className="flex-1 relative bg-white overflow-hidden">
          <iframe 
             src={currentUrl}
             className="w-full h-full border-none"
             onLoad={() => setIsLoading(false)}
             sandbox="allow-scripts allow-same-origin allow-forms allow-popups" 
             title="Browser"
          />
          
          {/* Fallback Overlay */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center bg-zinc-50/50 backdrop-blur-[2px]">
              <div className="bg-white p-6 rounded-xl shadow-2xl border border-zinc-200 text-center pointer-events-auto max-w-sm">
                  <Globe size={48} className="mx-auto text-blue-500 mb-4" />
                  <h3 className="text-zinc-800 font-bold text-lg mb-2">External Content</h3>
                  <p className="text-zinc-500 text-sm mb-6">
                     Some websites prevent being displayed inside a simulated window.
                  </p>
                  <a 
                    href={currentUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full"
                  >
                     Open in New Tab <ExternalLink size={14} />
                  </a>
              </div>
          </div>
       </div>
    </div>
  );
};


// --- CUSTOM WIDGETS ---

// File Manager Widget
const FileManagerWidget = () => (
  <div className="flex flex-col md:flex-row h-full w-full bg-[#1e1e1e] text-zinc-200">
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

     <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
           <FolderOpen size={24} className="text-zinc-500" />
           Documents
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="https://drive.google.com/file/d/1vL7WkzYvod_-lNVtZNaVpkIv247P2ILj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
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

// --- APP DATA ---
const coreApps = [
  { id: 'files', title: 'File Manager', icon: <Folder size={24} />, bg: 'bg-blue-500', widget: <FileManagerWidget /> },
  { id: 'about', title: 'Profile', icon: <User size={24} />, bg: 'bg-zinc-800', widget: <ProfileWidget /> },
  { id: 'work', title: 'Work', icon: <Chrome size={24} />, bg: 'bg-zinc-700', widget: <ExperienceWidget /> },
  { id: 'skills', title: 'Skills', icon: <Settings size={24} />, bg: 'bg-purple-600', widget: <SkillsWidget /> },
];

const projectApps = [
  { 
    id: 'airbnb', title: 'Airbnb NYC', icon: <MapIcon size={24} />,
    bg: 'bg-gradient-to-br from-rose-500 to-pink-600', 
    widget: <MapWidget />
  },
  { 
    id: 'spoiler', title: 'Spoiler Shield', icon: <ShieldCheck size={24} />, 
    bg: 'bg-gradient-to-br from-emerald-500 to-teal-600', 
    widget: <ShieldWidget /> 
  },
  { 
    id: 'input', title: 'TheInput', icon: <Terminal size={24} />, 
    bg: 'bg-gradient-to-br from-amber-400 to-orange-600', 
    url: 'https://github.com/snehashis/TheInput' 
  },
];

const socialApps = [
  { id: 'github', title: 'GitHub', icon: <Github size={24} />, bg: 'bg-black', url: 'https://github.com/Nielr2004' },
  { id: 'linkedin', title: 'LinkedIn', icon: <Linkedin size={24} />, bg: 'bg-[#0077b5]', url: 'https://www.linkedin.com/in/snehashis-roy-40691725a/' },
  { id: 'mail', title: 'Gmail', icon: <Mail size={24} />, bg: 'bg-red-500', url: 'mailto:roysnehashis2004@gmail.com' },
  { id: 'instagram', title: 'Instagram', icon: <Instagram size={24} />, bg: 'bg-gradient-to-br from-pink-500 to-violet-600', url: 'https://www.instagram.com/_.roybabu._/' },
];

const trashApp = { id: 'trash', title: 'Trash', icon: <Trash2 size={24} />, bg: 'bg-zinc-800' };

const allApps = [...coreApps, ...projectApps, ...socialApps, trashApp];

export default function Home() {
  const [openApps, setOpenApps] = useState<string[]>([]);
  const [zStack, setZStack] = useState<string[]>([]); 
  const [launchingApp, setLaunchingApp] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(0); 
  const [time, setTime] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [osState, setOsState] = useState<'booting' | 'locked' | 'unlocked'>('booting');

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

  const handleBootComplete = () => setOsState('locked');
  const handleUnlock = () => setOsState('unlocked');

  // --- HANDLERS ---
  const openApp = (appId: string) => {
    if (appId === 'trash') return; 
    if (!openApps.includes(appId)) {
        setOpenApps((prev) => [...prev, appId]);
    }
    focusApp(appId);
  };

  const closeApp = (appId: string) => {
    setOpenApps((prev) => prev.filter(id => id !== appId));
    setZStack((prev) => prev.filter(id => id !== appId));
  };

  const focusApp = (appId: string) => {
    setZStack((prev) => {
        const others = prev.filter(id => id !== appId);
        return [...others, appId]; 
    });
  };

  const handleAppLaunch = (app: any) => {
    if (app.id === 'trash') {
        setLaunchingApp('trash');
        setTimeout(() => setLaunchingApp(null), 500);
        return;
    }

    if (openApps.includes(app.id)) {
        focusApp(app.id);
        return;
    }
    setLaunchingApp(app.id);
    setTimeout(() => {
        openApp(app.id);
        setLaunchingApp(null);
    }, 800);
  };

  const handleAppClick = (app: any) => openApp(app.id);

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
  
  const handleHome = () => { if (currentPage === 1) setCurrentPage(0); };
  const handleRecents = () => setCurrentPage(currentPage === 0 ? 1 : 0);
  
  // --- SUB-COMPONENTS ---

  // CLEAN DOCK ICON - Fixed Size, No Magnification
  const DockIcon = ({ app }: { app: any }) => {
    const isLaunching = launchingApp === app.id;
    const isOpen = openApps.includes(app.id);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button 
          onClick={() => handleAppLaunch(app)}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          // Keep the bounce logic for launching
          animate={isLaunching ? { y: [0, -20, 0] } : { y: 0 }}
          transition={isLaunching 
            ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" } 
            : { type: "spring", stiffness: 300, damping: 20 }
          }
          // Slight hover scale for feedback, but NO width change
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center gap-1 relative pb-1.5 outline-none w-12 h-12 shrink-0" // Fixed w-12 h-12 (48px)
        >
          {/* Icon Container */}
          <div className={`w-full h-full ${app.bg} rounded-[12px] flex items-center justify-center text-white shadow-lg shadow-black/20 border border-white/5 relative z-10`}>
             {app.icon}
          </div>
          
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
                <motion.div 
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: -8, x: "-50%" }}
                    exit={{ opacity: 0, y: 5, x: "-50%" }}
                    className="absolute -top-12 left-1/2 bg-[#1d1d1de6] backdrop-blur-md text-white/90 font-medium text-[11px] px-3 py-1 rounded-md border border-white/10 shadow-xl whitespace-nowrap pointer-events-none z-50"
                >
                    {app.title}
                </motion.div>
            )}
          </AnimatePresence>

          {/* Active Dot Indicator */}
          {isOpen && <div className="absolute -bottom-1 w-1 h-1 bg-white/60 rounded-full" />}
        </motion.button>
    );
  };

  const MobileAppIcon = ({ app, showTitle = true }: { app: any, showTitle?: boolean }) => (
    <motion.button 
      onClick={() => handleAppLaunch(app)}
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
  //  MAIN APP RENDERER
  // =================================================================================
  return (
    <main 
      className="h-screen w-screen bg-cover bg-center overflow-hidden flex flex-col font-sans selection:bg-blue-500/30 relative"
      style={!isMobile && osState === 'unlocked' ? { backgroundImage: "url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2532&auto=format&fit=crop')" } : {}}
      onTouchStart={isMobile && osState === 'unlocked' ? onTouchStart : undefined}
      onTouchMove={isMobile && osState === 'unlocked' ? onTouchMove : undefined}
      onTouchEnd={isMobile && osState === 'unlocked' ? onTouchEnd : undefined}
    >
      <AnimatePresence>
        {osState === 'booting' && <BootScreen onComplete={handleBootComplete} />}
        {osState === 'locked' && <LockScreen onUnlock={handleUnlock} />}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {osState === 'unlocked' && (
            <motion.div
                key={isMobile ? "mobile-os" : "mac-os"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col"
            >
              {!isMobile && (
                <>
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                  {/* TOP MENU */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-5 text-white text-sm z-[100] shadow-sm shrink-0">
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

                  {/* DESKTOP AREA */}
                  <div className="absolute inset-0 top-8 z-0">
                     <div className="absolute inset-0 flex items-center justify-center opacity-100 pointer-events-none">
                        <h1 className="text-white/5 text-[180px] font-bold tracking-tighter blur-sm select-none">OS X</h1>
                     </div>

                     {/* WIDGETS COLUMN */}
                     <div className="absolute right-8 top-4 w-80 flex flex-col gap-4 pointer-events-auto">
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
                         <div className="w-full h-40"><WeatherWidget /></div>
                         <MacWidget className="flex justify-between items-center gap-4 hover:bg-zinc-900/50 transition-colors cursor-default">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><CpuIcon size={20} /></div>
                              <div><div className="text-xs font-bold text-white">CPU Load</div><div className="text-[10px] text-zinc-400">Apple M2 Pro</div></div>
                           </div>
                           <span className="text-xl font-mono text-white">12%</span>
                         </MacWidget>
                         <MacWidget className="flex justify-between items-center gap-4 hover:bg-zinc-900/50 transition-colors cursor-default">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><HardDrive size={20} /></div>
                              <div><div className="text-xs font-bold text-white">Macintosh HD</div><div className="text-[10px] text-zinc-400">450GB Free</div></div>
                           </div>
                           <div className="w-10 h-10 rounded-full border-4 border-zinc-700 border-t-purple-500" />
                         </MacWidget>
                     </div>
                     
                     {/* LEFT COLUMN ICONS */}
                     <div className="absolute left-8 top-4 flex flex-col gap-8">
                         <div className="w-32 group cursor-pointer" onClick={() => handleAppLaunch(coreApps[1])}> 
                             <motion.div 
                                drag dragMomentum={false}
                                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="shadow-xl rounded-2xl overflow-hidden w-60 h-100 relative"
                             >
                                <PhotoWidget />
                             </motion.div>
                             <div className="text-center mt-2">
                                 <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-md shadow-sm border border-white/5">Me.jpg</span>
                             </div>
                         </div>
                         <div className="flex flex-row gap-8">
                             <div className="w-32 group cursor-pointer flex flex-col items-center" onClick={() => handleAppLaunch(coreApps[0])}> 
                                 <div className="w-20 h-20 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-500/30 transition-colors">
                                    <Folder size={40} className="text-blue-400 fill-blue-400/20" />
                                 </div>
                                 <div className="text-center mt-2">
                                     <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-md shadow-sm border border-white/5">File Manager</span>
                                 </div>
                             </div>
                             <div className="w-32 group cursor-pointer flex flex-col items-center" onClick={() => openApp('projects-folder')}>
                                 <div className="w-20 h-20 bg-zinc-700/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-zinc-600/50 transition-colors">
                                    <FolderOpen size={40} className="text-yellow-400 fill-yellow-400/20" />
                                 </div>
                                 <div className="text-center mt-2">
                                     <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-md shadow-sm border border-white/5">Projects</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                  </div>

                  {/* DOCK - CLEAN & STATIC SIZE */}
                  <div 
                    className={`absolute bottom-0 left-0 w-full flex justify-center z-50 group transition-all duration-300
                      ${openApps.length > 0 ? 'h-6 hover:h-24' : 'h-auto'}
                    `}
                  >
                     <div 
                        // Visuals: Darker bg (black/40), consistent layout
                        className={`pointer-events-auto bg-black/40 backdrop-blur-3xl border border-white/10 px-3 pb-3 pt-3 rounded-[20px] flex items-end gap-2 shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                           ${openApps.length > 0 
                                ? 'translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:mb-4' 
                                : 'translate-y-0 opacity-100 mb-6'}
                        `}
                     >
                        {coreApps.map(app => <DockIcon key={app.id} app={app} />)}
                        
                        <div className="w-[1px] h-8 bg-white/10 mx-1 mb-1" />
                        
                        {socialApps.map(app => <DockIcon key={app.id} app={app} />)}

                        <div className="w-[1px] h-8 bg-white/10 mx-1 mb-1" />

                        <DockIcon key={trashApp.id} app={trashApp} />
                     </div>
                  </div>

                  {/* RENDER OPEN WINDOWS */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {openApps.map(appId => {
                        const app = allApps.find(a => a.id === appId) || (appId === 'projects-folder' ? { id: 'projects-folder', title: 'My Projects', widget: null } : null);
                        
                        if (!app) return null;

                        let content = null;
                        if (app.id === 'projects-folder') {
                            content = (
                                <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                                   {projectApps.map(p => (
                                      <button key={p.id} onClick={() => openApp(p.id)} className="flex flex-col items-center gap-2 group hover:scale-105 transition-transform">
                                          <div className={`w-16 h-16 ${p.bg} rounded-2xl flex items-center justify-center text-white shadow-lg`}>{p.icon}</div>
                                          <span className="text-white text-sm font-medium">{p.title}</span>
                                      </button>
                                   ))}
                                </div>
                            );
                        } else if (app.widget) {
                            content = app.widget;
                        } else if (app.url) {
                            content = <BrowserWidget url={app.url} />;
                        }

                        const zIndex = 10 + zStack.indexOf(appId);

                        return (
                            <div key={appId} className="pointer-events-auto" style={{ zIndex, position: 'relative' }} onMouseDown={() => focusApp(appId)}>
                                <Window title={app.title} onClose={() => closeApp(appId)}>
                                    {content}
                                </Window>
                            </div>
                        );
                    })}
                  </div>
                </>
              )}

              {/* MOBILE VIEW (Unchanged) */}
              {isMobile && (
                <>
                  <div className="h-10 w-full flex justify-between items-end pb-2 text-white px-6 shrink-0 z-30 relative">
                      <span className="text-xs font-semibold tracking-wide">{time}</span>
                      <div className="flex gap-2 items-center opacity-90"><Wifi size={14} /><Signal size={14} /><Battery size={16} /></div>
                  </div>
                  <div className="flex-1 relative w-full overflow-hidden z-20">
                     <AnimatePresence mode="wait">
                        {currentPage === 0 ? (
                           <motion.div 
                             key="home"
                             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                             className="w-full h-full px-5 pt-10 grid grid-cols-4 grid-rows-[auto_auto_auto_1fr] gap-4"
                           >
                              <div className="col-span-4 mb-2 pl-1"><span className="text-xs font-bold text-white/80 uppercase tracking-widest drop-shadow-md">{dateStr}</span><h1 className="text-[64px] font-thin text-white leading-none tracking-tight drop-shadow-lg">{time}</h1></div>
                              <div className="col-span-2 aspect-square"><PhotoWidget /></div>
                              <div className="col-span-2 aspect-square"><WeatherWidget /></div>
                              <div className="col-span-4 grid grid-cols-4 gap-4 mt-8">
                                 <MobileAppIcon app={coreApps[0]} /> <MobileAppIcon app={coreApps[1]} /> <MobileAppIcon app={coreApps[3]} />
                                 <button onClick={() => setCurrentPage(1)} className="flex flex-col items-center gap-1.5 opacity-90">
                                    <div className="w-[60px] h-[60px] bg-blue-500/20 backdrop-blur-md rounded-[22px] border border-blue-400/30 flex items-center justify-center">
                                        <div className="grid grid-cols-2 gap-1.5 p-3"><div className="w-1.5 h-1.5 bg-white rounded-full"/><div className="w-1.5 h-1.5 bg-white rounded-full"/><div className="w-1.5 h-1.5 bg-white rounded-full"/><div className="w-1.5 h-1.5 bg-white rounded-full"/></div>
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
                              <div className="w-full h-12 bg-zinc-800 rounded-full flex items-center px-4 gap-3 mb-8 border border-white/5"><Search size={20} className="text-zinc-500" /><span className="text-sm text-zinc-400">Search apps...</span></div>
                              <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Core</h3>
                              <div className="grid grid-cols-4 gap-y-8 mb-8">{coreApps.map(app => <MobileAppIcon key={app.id} app={app} />)}</div>
                              <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Projects</h3>
                              <div className="grid grid-cols-4 gap-y-8 mb-8">{projectApps.map(app => <MobileAppIcon key={app.id} app={app} />)}</div>
                              <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Social</h3>
                              <div className="grid grid-cols-4 gap-y-8 mb-8">{socialApps.map(app => <MobileAppIcon key={app.id} app={app} />)}</div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
                  <AnimatePresence>
                     {currentPage === 0 && (
                        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="w-full px-4 pb-4 z-30 flex flex-col gap-5">
                           <div onClick={() => setCurrentPage(1)} className="w-full h-[52px] bg-white/5 backdrop-blur-xl rounded-full flex items-center px-5 gap-3 shadow-2xl border border-white/10 active:scale-95 transition-transform cursor-pointer">
                               <div className="w-5 h-5 flex items-center justify-center font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">G</div>
                               <input type="text" placeholder="Search..." className="flex-1 bg-transparent text-sm text-white border-none outline-none pointer-events-none" readOnly /><Mic size={20} className="text-zinc-400" /><Camera size={20} className="text-zinc-400" />
                           </div>
                           <div className="flex justify-between items-end px-4 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl">
                              {socialApps.map(app => <MobileAppIcon key={app.id} app={app} showTitle={false} />)}
                              {projectApps.slice(0, 1).map(app => <MobileAppIcon key={app.id} app={app} showTitle={false} />)}
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
                  <div className="h-6 w-full flex items-center justify-center shrink-0 z-50 bg-black/90 backdrop-blur-lg"><div className="w-32 h-1 bg-white/40 rounded-full" /></div>
                  <AnimatePresence>
                    {/* Only show window if activeApp is set (logic for mobile handles this separately via openApps[0] if we wanted, but sticking to single app for now) */}
                  </AnimatePresence>
                </>
              )}
            </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}