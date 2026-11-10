import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Atom,
  Palette,
  Sparkles,
  Globe,
  Layers,
  Coffee,
  Server,
  ShieldCheck,
  Database,
  GitBranch,
  Terminal,
  Zap,
  CheckCircle,
  Cpu,
  Workflow,
  Lock
} from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { SEO } from '../components/SEO';
import { BlurReveal } from '../components/TextReveal';
import { technologiesData, type TechItem } from '../data/technologies';

export const TechsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Frontend', 'Backend', 'Database', 'Ferramentas'];

  const filteredTechs = technologiesData.filter((tech) => {
    if (activeCategory === 'Todos') return true;
    return tech.category === activeCategory;
  });

  // Map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-6 h-6" />;
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6" />;
      case 'Server':
        return <Server className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Database':
        return <Database className="w-6 h-6" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6" />;
      case 'Github':
        return <GithubIcon className="w-6 h-6" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <>
      <SEO
        title="Stack & Ferramentas Tecnológicas"
        description="Conheça a stack tecnológica dominada por Thiago de Souza: Frontend (HTML5, CSS3, Tailwind CSS, JavaScript, React, TypeScript), Backend (Java, Spring Boot, Spring Security, PostgreSQL) e ferramentas como Git e VS Code."
        canonicalPath="/techs"
      />

      <div className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950/60 border border-white/20 backdrop-blur-md text-xs font-mono text-zinc-300 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.06)]">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>ARSENAL TÉCNICO // TECNOLOGIAS & FERRAMENTAS</span>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-4 chrome-text">
              Stack & Ferramentas
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <p className="text-base text-zinc-400 leading-relaxed font-sans">
              Competências práticas consolidadas no desenvolvimento de aplicações frontend de alta performance e integração transparente com ecossistemas corporativos backend e bancos de dados relacionais.
            </p>
          </BlurReveal>

          {/* Category Tabs */}
          <BlurReveal delay={0.4} className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-slate-200 via-white to-zinc-300 text-zinc-950 font-bold shadow-[0_0_18px_rgba(255,255,255,0.35)]'
                    : 'bg-zinc-900/60 text-zinc-400 border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </BlurReveal>
        </div>

        {/* Tech Cards Grid with Metallic Sheen on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence>
            {filteredTechs.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -5 }}
                className="chrome-card rounded-2xl p-6 relative overflow-hidden group select-none flex flex-col justify-between"
              >
                {/* Metallic shine glide on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full filter blur-xl group-hover:bg-white/10 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Level Badge */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Metallic Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-400 via-white to-zinc-600 p-[1px] shadow-[0_0_15px_rgba(255,255,255,0.12)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-shadow">
                      <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-zinc-100 group-hover:text-cyan-300 transition-colors">
                        {getIcon(tech.iconName)}
                      </div>
                    </div>

                    {/* Level Pill */}
                    <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/15 text-[11px] font-mono text-zinc-300">
                      {tech.level}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                      {tech.category}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {tech.name}
                    </h3>
                  </div>

                  {/* Experience Focus */}
                  <div className="text-xs font-mono text-zinc-300 mb-3 pb-2 border-b border-white/10 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{tech.experience}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {tech.description}
                  </p>
                </div>

                {/* Bottom subtle metallic bar */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-400">STATUS</span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    DOMÍNIO ATIVO
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ================= SEÇÃO DE PRÁTICAS E ARQUITETURA ================= */}
        <div className="rounded-3xl p-8 sm:p-12 border border-white/20 bg-zinc-950/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 block">
              PADRÕES DE DESENVOLVIMENTO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Arquitetura, Boas Práticas & Metodologia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-cyan-400 mb-4 border border-white/10">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-heading">
                Clean Architecture & Component-Driven
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Separação estrita de responsabilidades, componentes atômicos desacoplados, hooks customizados e tipagem rigorosa para evitar regressões e simplificar manutenção.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-emerald-400 mb-4 border border-white/10">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-heading">
                Performance Extrema & Core Web Vitals
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Otimização contínua de métricas vitais (LCP, FID/INP, CLS), redução de re-renders desnecessários, carregamento dinâmico e compilações ultrarrápidas com Vite.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-purple-400 mb-4 border border-white/10">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-heading">
                Segurança Corporativa & Integração
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Integração segura com APIs RESTful via cabeçalhos Authorization (Bearer Token), tratamento unificado de erros HTTP e validação rigorosa de entradas de formulário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
