'use client';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Data from your resume
const experiences = [
  {
    id: 1,
    company: 'NIT Agartala',
    role: 'AI Research Intern',
    time: 'Jun 2025 - Jul 2025',
    color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    icon: <Briefcase size={16} />,
    desc: 'Achieved 96% accuracy in facial recognition systems.'
  },
  {
    id: 2,
    company: 'Gratia Technology',
    role: 'Web Developer Intern',
    time: 'Nov 2024 - Jan 2025',
    color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    icon: <CheckCircle2 size={16} />,
    desc: 'Reduced bugs by 10% & optimized database queries.'
  }
];

const ExperienceWidget = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="h-full w-full bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-5 border border-white/5 flex flex-col relative overflow-hidden group"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-zinc-800 rounded-full">
          <Calendar size={18} className="text-zinc-400" />
        </div>
        <span className="text-sm font-semibold text-zinc-300 tracking-wide uppercase">
          Timeline
        </span>
      </div>

      {/* Notification List */}
      <div className="space-y-3 relative z-10 overflow-y-auto pr-1 custom-scrollbar">
        {experiences.map((job) => (
          <div 
            key={job.id} 
            className="p-3 rounded-2xl bg-zinc-950/50 border border-white/5 hover:bg-zinc-800/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-1">
              <span className={`text-xs px-2 py-0.5 rounded-md font-medium border ${job.color}`}>
                {job.company}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">{job.time}</span>
            </div>
            
            <h4 className="text-sm font-bold text-zinc-100 mt-1">{job.role}</h4>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              {job.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Fade effect at bottom for "scroll more" hint */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default ExperienceWidget;