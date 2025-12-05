import React, { useState, useEffect, useRef } from 'react';

export function CircularTimer({ duration, active, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const expireRef = useRef(onExpire);

  useEffect(() => { expireRef.current = onExpire; }, [onExpire]);
  useEffect(() => { setTimeLeft(duration); }, [duration]);

  useEffect(() => {
    if (!active || timeLeft <= 0) {
      if (timeLeft <= 0) expireRef.current?.();
      return;
    }
    const id = setInterval(() => setTimeLeft(p => Math.max(p - 1, 0)), 1000);
    return () => clearInterval(id);
  }, [timeLeft, active]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');
  const percent = (timeLeft / duration) * 100;
  const circumference = 2 * Math.PI * 54;
  const dashOffset = circumference - (percent / 100) * circumference;
  const isLow = timeLeft < 60;

  return (
    <div className="flex items-center gap-6">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="8"/>
          <circle
            cx="60" cy="60" r="54" fill="none"
            stroke={isLow ? "#ef4444" : "url(#timerGrad)"}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            className="progress-ring"
          />
          <defs>
            <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-3xl font-bold ${isLow ? 'text-red-400' : 'text-white'}`}>
            {minutes}:{seconds}
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">Tersisa</span>
        </div>
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Progress Waktu</span>
          <span className={`font-semibold ${isLow ? 'text-red-400' : 'text-cyan-400'}`}>
            {percent.toFixed(0)}%
          </span>
        </div>
        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${isLow ? 'bg-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}
            style={{ width: `${percent}%` }}
          />
        </div>
        {isLow && (
          <p className="text-red-400 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 pulse-dot"></span>
            Waktu hampir habis!
          </p>
        )}
      </div>
    </div>
  );
}