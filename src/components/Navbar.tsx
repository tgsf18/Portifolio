import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Mail,
  ArrowUpRight,
  Code2,
  FolderGit2,
  Cpu,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', path: '/', icon: Code2 },
    { name: 'Projetos', path: '/projetos', icon: FolderGit2 },
    { name: 'Stack & Ferramentas', path: '/techs', icon: Cpu },
    { name: 'Contato', path: '/contato', icon: Send },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? 'bg-zinc-950/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.06)]'
            : 'bg-zinc-950/40 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Futuristic Chrome Mirrored Logo */}
        <NavLink
          to="/"
          className="group relative flex items-center gap-2.5 select-none focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center p-[1px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {/* Chrome metallic gradient border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 via-white to-zinc-600 rounded-xl animate-pulse" />
            <div className="relative w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
              <span className="font-extrabold text-sm tracking-tight chrome-text">
                TS
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider font-heading flex items-center gap-1.5 chrome-text">
              THIAGO SOUZA
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-cyan-400" />
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
              FRONTEND // DEV
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-xl border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-200 via-white to-zinc-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <link.icon className="w-3.5 h-3.5" />
                    {link.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Social Icons & Status Badge */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Active Status Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/70 border border-white/10 text-[11px] text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] tracking-wide text-zinc-300">DISPONÍVEL</span>
          </div>

          <div className="h-4 w-[1px] bg-white/15" />

          {/* Social Quick Buttons */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/tgsf18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Thiago de Souza"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-300 hover:text-white bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Thiago de Souza"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-300 hover:text-white bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <NavLink
              to="/contato"
              aria-label="Contato direto com Thiago"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-300 hover:text-white bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </NavLink>
          </div>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-900/80 border border-white/20 text-zinc-100 hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown with Glassmorphism & Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-zinc-950/90 backdrop-blur-2xl border border-white/20 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.08)] overflow-hidden"
          >
            {/* Status indicator */}
            <div className="flex items-center justify-between pb-4 mb-3 border-b border-white/10">
              <span className="text-xs font-mono text-zinc-400">STATUS OPERACIONAL:</span>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DISPONÍVEL P/ PROJETOS
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-slate-200 via-white to-zinc-300 text-zinc-950 font-bold shadow-md'
                        : 'text-zinc-200 hover:text-white hover:bg-zinc-900/80'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </NavLink>
              ))}
            </div>

            {/* Social Channels in Mobile */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">CONEXÃO DIRETA:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/tgsf18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:border-white/30"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:border-white/30"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <NavLink
                  to="/contato"
                  className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:border-white/30"
                >
                  <Mail className="w-4 h-4" />
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
