'use client';
import { cn } from '@/lib/utils'; // Assuming you created this in Phase 2

const skills = [
  "Python", "React", "Next.js", "Pandas", "PowerBI", 
  "TypeScript", "Tailwind", "Figma", "MongoDB", "Node.js"
];

const SkillsWidget = () => {
  return (
    <div className="h-full w-full bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-zinc-800 flex items-center overflow-hidden relative">
      
      <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />

      {/* Marquee Animation */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <span 
            key={i} 
            className="text-zinc-400 font-mono text-sm mx-4 uppercase tracking-wider hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default SkillsWidget;