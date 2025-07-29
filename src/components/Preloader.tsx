import React from 'react';

interface PreloaderProps {
  visible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-blue-200 transition-opacity duration-500">
      {/* Circular Progress with Gear */}
      <div className="mb-8 relative w-24 h-24 flex items-center justify-center">
        {/* Circular Progress */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="url(#preloader-blue)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="60"
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) infinite',
              animation: 'preloader-spin 1.2s linear infinite',
            }}
          />
          <defs>
            <linearGradient id="preloader-blue" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
        {/* Gear Icon */}
        <svg
          className="relative z-10 animate-spin-slow"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22" cy="22" r="14" stroke="#38bdf8" strokeWidth="3" fill="none" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const x1 = 22 + Math.cos(angle) * 16;
            const y1 = 22 + Math.sin(angle) * 16;
            const x2 = 22 + Math.cos(angle) * 20;
            const y2 = 22 + Math.sin(angle) * 20;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>
      {/* Main Text */}
      <div className="text-2xl md:text-3xl font-bold tracking-wide mb-2 text-blue-200">
        Loading DevOps Portfolio
      </div>
      {/* Subtitle */}
      <div className="text-base opacity-80 text-blue-300">Initializing systems...</div>
      <style>{`
        @keyframes preloader-spin {
          100% { stroke-dashoffset: 251.2; }
        }
        .animate-spin-slow {
          animation: spin 2.2s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Preloader; 