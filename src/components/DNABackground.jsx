import React from 'react';

export function DNABackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M${i * 25},0 Q${i * 25 + 12.5},25 ${i * 25},50 Q${i * 25 - 12.5},75 ${i * 25},100`}
            stroke="url(#dnaGrad)"
            strokeWidth="0.3"
            fill="none"
            className="float-animation"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

export function MedicalIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L12 22M2 12L22 12" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round"/>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}