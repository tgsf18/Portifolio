import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ChromeAvatar3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-72 sm:w-88 sm:h-88 mx-auto flex items-center justify-center cursor-pointer select-none perspective-1000"
      style={{ perspective: 1200 }}
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-white/10 to-indigo-500/20 filter blur-3xl opacity-60 animate-pulse" />

      {/* Main 3D Container reacting to mouse tilt */}
      <motion.div
        animate={{
          rotateY: mousePos.x * 25,
          rotateX: -mousePos.y * 25,
          y: [0, -10, 0],
        }}
        transition={{
          rotateY: { type: 'spring', damping: 20, stiffness: 120 },
          rotateX: { type: 'spring', damping: 20, stiffness: 120 },
          y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
        }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Orbital Chrome Ring 1 (Horizontal Inclined) */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute w-64 h-64 sm:w-76 sm:h-76 rounded-full border border-white/40 pointer-events-none"
          style={{
            transform: 'rotateX(68deg) rotateY(18deg)',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.3)',
          }}
        >
          {/* Orbiting Chrome Satellite / Flare bead */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-white via-zinc-200 to-slate-400 shadow-[0_0_12px_#ffffff]" />
        </motion.div>

        {/* Orbital Chrome Ring 2 (Vertical Counter-rotation) */}
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
          className="absolute w-56 h-56 sm:w-68 sm:h-68 rounded-full border border-slate-300/30 pointer-events-none"
          style={{
            transform: 'rotateX(25deg) rotateY(65deg)',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)',
          }}
        >
          {/* Secondary specular flare */}
          <div className="absolute bottom-0 right-1/4 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8]" />
        </motion.div>

        {/* Outer Metallic Shield Shell */}
        <div
          className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #64748b 0%, #ffffff 32%, #475569 55%, #f8fafc 82%, #334155 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
          }}
        >
          {/* Inner Dark Chrome Core */}
          <div
            className="w-full h-full rounded-full relative overflow-hidden flex flex-col items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #3f3f46 0%, #18181b 45%, #09090b 85%)',
              boxShadow: 'inset 0 8px 24px rgba(0, 0, 0, 0.9), inset 0 -4px 12px rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Reflective metallic horizon sweep */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background: 'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.7) 48%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.2) 53%, transparent 70%)',
              }}
            />

            {/* Specular high-gloss dome highlight */}
            <div
              className="absolute -top-1 left-3 right-3 h-1/2 rounded-t-full opacity-50 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)',
              }}
            />

            {/* Holographic grid lines inside sphere */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* Center Monogram Emblem */}
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="text-3xl sm:text-4xl font-extrabold tracking-tighter drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase mt-0.5 border-t border-zinc-700/80 pt-0.5">
                ENGINEER
              </span>
            </div>

            {/* Glowing core indicator */}
            <div className="absolute bottom-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900/80 border border-white/10 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[8px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                SYSTEM ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* Ambient base shadow simulating depth */}
        <div className="absolute -bottom-10 w-48 h-8 rounded-full bg-white/5 filter blur-xl transform scale-y-50" />
      </motion.div>
    </div>
  );
};
