import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
  Server,
  Database,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { SEO } from '../components/SEO';
import { BlurReveal } from '../components/TextReveal';
import { ChromeButton } from '../components/ChromeButton';
import { projectsData, type Project } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Full Stack' | 'Frontend Puro'>('Todos');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'Todos') return true;
    return project.category === activeFilter;
  });

  const featured = projectsData.find((p) => p.isFeatured);

  return (
    <>
      <SEO
        title="Projetos & Estudos de Caso"
        description="Explore os projetos desenvolvidos por Thiago de Souza, incluindo o sistema corporativo ELLENCO (React, TypeScript, Java, Spring Boot, PostgreSQL) e aplicações frontend puro de alta performance."
        canonicalPath="/projetos"
      />

      <div className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950/60 border border-white/20 backdrop-blur-md text-xs font-mono text-zinc-300 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.06)]">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>PORTFÓLIO DE PROJETOS // ENGENHARIA & FRONTEND</span>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-4 chrome-text">
              Projetos & Estudos de Caso
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <p className="text-base text-zinc-400 leading-relaxed font-sans">
              Engenharia de software aplicada: desde sistemas corporativos de alta densidade com arquitetura completa até interfaces web puras e leves focadas em fluidez, responsividade e código limpo.
            </p>
          </BlurReveal>

          {/* Filter Pills */}
          <BlurReveal delay={0.4} className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {(['Todos', 'Full Stack', 'Frontend Puro'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-slate-200 via-white to-zinc-300 text-zinc-950 font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                    : 'bg-zinc-900/60 text-zinc-400 border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {cat} {cat === 'Todos' ? `(${projectsData.length})` : ''}
              </button>
            ))}
          </BlurReveal>
        </div>

        {/* ================= PROJETO EM DESTAQUE OBRIGATÓRIO (ELLENCO) ================= */}
        {featured && (activeFilter === 'Todos' || activeFilter === 'Full Stack') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                ★ PROJETO DESTAQUE CORPORATIVO
              </h2>
            </div>

            <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 bg-zinc-950/70 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.1)] p-6 sm:p-10">
              {/* Reflected ambient light beam */}
              <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 filter blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Info Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-mono font-semibold">
                        SISTEMA CORPORATIVO COMPLETO
                      </span>
                      <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-mono">
                        PRODUÇÃO ATIVA
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading mb-2">
                      {featured.title}
                    </h3>
                    <h4 className="text-base text-zinc-300 font-medium mb-4">
                      {featured.subtitle}
                    </h4>

                    {/* Descrição oficial obrigatória */}
                    <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 mb-6">
                      <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans font-medium">
                        "{featured.description}"
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {featured.longDescription}
                    </p>

                    {/* Visible Technical Stack Section */}
                    <div className="mb-6">
                      <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-zinc-300" />
                        <span>Stack Técnica Visível:</span>
                      </h5>

                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono text-zinc-400 font-semibold min-w-[70px]">Frontend:</span>
                          {featured.frontendStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs font-mono text-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {featured.backendStack && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono text-zinc-400 font-semibold min-w-[70px]">Backend:</span>
                            {featured.backendStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key Architecture Features */}
                    <div className="mb-8">
                      <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2.5">
                        Funcionalidades Críticas Desenvolvidas:
                      </h5>
                      <ul className="space-y-2">
                        {featured.keyFeatures.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Botões Cromados de Ação (Obrigatórios) */}
                  <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4">
                    <ChromeButton
                      variant="primary"
                      size="md"
                      href={featured.liveUrl}
                      target="_blank"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Aplicação ao Vivo (onrender.com)
                    </ChromeButton>

                    <ChromeButton
                      variant="outline"
                      size="md"
                      href="https://ellenco-backend.onrender.com/"
                      target="_blank"
                      icon={<GithubIcon className="w-4 h-4" />}
                    >
                      Repositório GitHub
                    </ChromeButton>
                  </div>
                </div>

                {/* Right Interactive Architecture Spec Column */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* System Architecture Blueprint Card */}
                  <div className="rounded-2xl p-6 bg-black/70 border border-white/15 backdrop-blur-md shadow-inner">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                          DIAGRAMA DE ARQUITETURA
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                        ROBUSTEZ
                      </span>
                    </div>

                    <div className="space-y-4 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                        <span className="text-zinc-400 block text-[10px] uppercase">Camada 01: Client Side</span>
                        <span className="text-zinc-100 font-bold">React 19 + TypeScript + Vite + Tailwind CSS</span>
                        <p className="text-[11px] text-zinc-400 font-sans mt-1">
                          Interfaces de usuário performáticas com controle de estado previsível, formulários validados e microinterações.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                        <span className="text-zinc-400 block text-[10px] uppercase">Camada 02: API & Segurança</span>
                        <span className="text-zinc-100 font-bold">Java 17 + Spring Boot + Spring Security (JWT)</span>
                        <p className="text-[11px] text-zinc-400 font-sans mt-1">
                          Camada REST com autorização RBAC, rotas protegidas contra ataques e auditoria operacional.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                        <span className="text-zinc-400 block text-[10px] uppercase">Camada 03: Persistência & Logística</span>
                        <span className="text-zinc-100 font-bold">PostgreSQL Relacional + JPA/Hibernate</span>
                        <p className="text-[11px] text-zinc-400 font-sans mt-1">
                          Integridade ACID para transações de estoque, movimentações de expedição e relatórios de fluxo.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Architecture Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {featured.metrics?.map((m) => (
                      <div
                        key={m.label}
                        className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/10 text-center"
                      >
                        <span className="block text-[11px] text-zinc-400 font-sans mb-1">{m.label}</span>
                        <span className="block text-sm font-mono font-bold text-white chrome-silver-text">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= GRADE DE PROJETOS COMPLEMENTARES ================= */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Interfaces & Projetos Complementares
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Desenvolvidos com foco rigoroso em frontend puro: semântica HTML5, CSS3, Tailwind CSS e Vanilla JavaScript.
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
              {filteredProjects.filter((p) => !p.isFeatured).length} PROJETOS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects
                .filter((p) => !p.isFeatured)
                .map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="chrome-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Metallic glow accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

                    <div>
                      {/* Category Badge & Code Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                          {project.category}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors">
                          <Code2 className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1.5 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <h4 className="text-xs font-mono text-zinc-400 mb-4">
                        {project.subtitle}
                      </h4>

                      <p className="text-sm text-zinc-300 leading-relaxed mb-5 font-sans">
                        {project.description}
                      </p>

                      {/* Visible Tech Stack */}
                      <div className="mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                          Tecnologias Frontend:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.frontendStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6 space-y-1.5">
                        {project.keyFeatures.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Chrome Buttons */}
                    <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                      <ChromeButton
                        variant="primary"
                        size="sm"
                        href={project.liveUrl}
                        target="_blank"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                      >
                        Ver Demonstração
                      </ChromeButton>

                      <ChromeButton
                        variant="outline"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        icon={<GithubIcon className="w-3.5 h-3.5" />}
                      >
                        Código GitHub
                      </ChromeButton>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
