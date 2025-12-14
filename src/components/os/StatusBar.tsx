'use client';
import { Wifi, Battery } from 'lucide-react';
import { useState, useEffect } from 'react';

const StatusBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    // Update time every minute
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 py-2 flex justify-between items-center text-xs font-medium text-white/90 z-50 select-none mix-blend-difference">
      <span>{time}</span>
      <div className="flex items-center gap-2">
        <Wifi size={14} />
        <div className="flex items-center gap-1">
          <span className="text-[10px]">100%</span>
          <Battery size={14} className="fill-white" />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;