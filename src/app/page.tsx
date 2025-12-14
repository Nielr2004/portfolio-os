import ProfileWidget from '@/components/widgets/ProfileWidget';
import MapWidget from '@/components/widgets/MapWidget'; 
import ShieldWidget from '@/components/widgets/ShieldWidget';
import ExperienceWidget from '@/components/widgets/ExperienceWidget';
import SkillsWidget from '@/components/widgets/SkillsWidget';

export default function Home() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
      
      {/* 1. Profile */}
      <div className="col-span-2 row-span-2">
        <ProfileWidget />
      </div>

      {/* 2. Airbnb Data Project */}
      <div className="col-span-2 row-span-1">
        <MapWidget /> 
      </div>

      {/* 3. Spoiler Shield */}
      <div className="col-span-1 row-span-1">
        <ShieldWidget />
      </div>

      {/* 4. Contact/Hello Placeholder */}
      <div className="col-span-1 row-span-1 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer group">
        <span className="text-4xl group-hover:scale-125 transition-transform duration-300">👋</span>
      </div>

      {/* 5. Experience */}
      <div className="col-span-2 row-span-2 md:col-span-2">
        <ExperienceWidget />
      </div>

      {/* 6. Skills Ticker */}
      <div className="col-span-2 md:col-span-4 row-span-1">
         <SkillsWidget />
      </div>

    </div>
  );
}