
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface SyncMeterProps {
  progress: number;
}

const SyncMeter: React.FC<SyncMeterProps> = ({ progress }) => {
  const springValue = useSpring(progress, { stiffness: 100, damping: 30 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    springValue.set(progress);
  }, [progress, springValue]);

  useEffect(() => {
    return springValue.on('change', (latest: string) => {
      setDisplayValue(Math.floor(parseFloat(latest)));
    });
  }, [springValue]);

  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-blue-500/30 h-16 flex items-center px-8">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-1">
          <span className="text-[10px] text-blue-400 font-tech uppercase tracking-[0.2em]">Project Progress</span>
          <span className="text-xl font-tech text-blue-400">{displayValue}%</span>
        </div>
        <div className="w-full h-1.5 bg-gray-900 overflow-hidden relative border border-blue-500/20">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500"
            style={{ 
              width: `${displayValue}%`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SyncMeter;
