import React, { useState, useEffect } from 'react';
import { subscribeToVisitorCount } from '../firebase';
import { Eye } from 'lucide-react';

interface VisitorCounterProps {
  className?: string;
}

export function VisitorCounter({ className = '' }: VisitorCounterProps) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  // Read and increment visitor_count on component mount
  useEffect(() => {
    const unsubscribe = subscribeToVisitorCount((count) => {
      setVisitorCount(count);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8e1d6] text-xs text-[#6a6258] shadow-2xs transition-all hover:border-[#e8662a] ${className}`}
      title="Live portfolio visitor count stored persistently in Firebase"
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="flex items-center gap-1 font-medium text-[#6a6258]">
        <Eye size={12} className="text-[#e8662a]" />
        <span>Views:</span>
      </span>
      <span className="font-mono font-bold text-[#1f1b16] tracking-tight">
        {visitorCount !== null ? visitorCount.toLocaleString() : (
          <span className="inline-block w-4 h-3 bg-[#e8e1d6]/50 animate-pulse rounded"></span>
        )}
      </span>
    </div>
  );
}

export default VisitorCounter;
