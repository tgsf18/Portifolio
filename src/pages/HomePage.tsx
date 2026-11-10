import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  ExternalLink,
  Mail,
  CheckCircle2,
  Terminal,
  Zap,
  Globe
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { SEO } from '../components/SEO';
import { LetterReveal, BlurReveal } from '../components/TextReveal';
import { ChromeAvatar3D } from '../components/ChromeAvatar3D';
import { ChromeButton } from '../components/ChromeButton';
import { projectsData } from '../data/projects';

export const HomePage: React.FC = () => {
  const featuredProject = projectsData.find((p) => p.isFeatured) || projectsData[0];

  return (
    <>
      <SEO
        title="Thiago de Souza | Desenvolvedor Frontend & Engenheiro de Software"
        description="Portfólio profissional de Thiago de Souza Ferreira. Especialista Frontend com HTML5, CSS3, Tailwind CSS, JavaScript, React e ecossistemas corporativos Java/Spring Boot."
        canonicalPath="/"
      />

      <div className="relative z-10 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* ================= HERO SECTION ================= */}
        <section className="relative flex flex-col items-center text-center pt-6 pb-16">
          {/* Futuristic Terminal Badge */}
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950/60 border border-white/20 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.08)] mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono tracking-wider text-zinc-300">
                PORTFÓLIO PROFISSIONAL // FRONTEND & ENGENHARIA
              </span>
            </div>
          </BlurReveal>

          {/* Impact Title with Modern Typography and Letter Reveal */}
          <div className="max-w-4xl mx-auto mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-2 font-heading">
              <span className="block text-zinc-100">
                <LetterReveal text="THIAGO DE SOUZA" delay={0.2} />
              </span>
              <span className="block mt-2 chrome-text">
                <LetterReveal text="FRONTEND & SOFTWARE" delay={0.6} />
              </span>
            </h1>
          </div>

          {/* Subtitle highlighting frontend specialty & software engineering */}
          <BlurReveal delay={0.9} className="max-w-2xl mx-auto mb-10">
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-sans">
              Especialista em desenvolvimento de interfaces de alto impacto com{' '}
              <strong className="text-zinc-100 font-semibold">HTML5, CSS3, Tailwind CSS</strong> e{' '}
              <strong className="text-zinc-100 font-semibold">JavaScript / TypeScript</strong>, combinando precisão visual e engenharia de software para soluções web robustas e escaláveis.
            </p>
          </BlurReveal>

          {/* Centralized 3D Chrome Metallic Visual Avatar */}
          <BlurReveal delay={1.1} className="my-4 w-full">
            <ChromeAvatar3D />
          </BlurReveal>

          {/* Action CTAs */}
          <BlurReveal delay={1.3} className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <ChromeButton
              variant="primary"
              size="lg"
              href="/projetos"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Explorar Projetos
            </ChromeButton>

            <ChromeButton
              variant="outline"
              size="lg"
              href="/contato"
              icon={<Mail className="w-4 h-4" />}
            >
              Iniciar Conexão
            </ChromeButton>
          </BlurReveal>

          {/* Quick Tech Highlights Strip */}
          <BlurReveal delay={1.5} className="mt-14 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-3xl">
            {['React', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Java & Spring'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-zinc-900/60 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md hover:border-white/30 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </BlurReveal>
        </section>

        {/* ================= ÁREA DE DESTAQUE (3 CARDS) ================= */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              HUB DE NAVEGAÇÃO E DESTAQUES
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading chrome-silver-text">
              Pilares de Excelência Profissional
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Projetos em Destaque */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="chrome-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Metallic corner highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-400 via-white to-zinc-600 p-[1px] mb-5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-zinc-100">
                    <Layers className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30">
                    CASE CORPORATIVO
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">3 PROJETOS</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-cyan-300 transition-colors">
                  Projetos em Destaque
                </h4>

                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  Conheça o sistema corporativo <strong className="text-zinc-200">ELLENCO</strong> (React + Spring Boot) e interfaces frontend ultrarrápidas focadas em experiência de usuário.
                </p>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 mb-4">
                  <span className="text-xs font-mono text-zinc-300 block font-semibold mb-1">
                    ★ ELLENCO Plataforma
                  </span>
                  <span className="text-[11px] text-zinc-400 block line-clamp-2">
                    Controle de autenticação, níveis de acesso, gestão de estoque e operações logísticas.
                  </span>
                </div>
              </div>

              <NavLink
                to="/projetos"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 group-hover:text-white transition-colors pt-2 border-t border-white/10"
              >
                <span>Ver todos os projetos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </NavLink>
            </motion.div>

            {/* Card 2: Stack Tecnológica */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="chrome-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-400 via-white to-zinc-600 p-[1px] mb-5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-zinc-100">
                    <Cpu className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                    ECOSSISTEMA MODERNO
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">14+ TECHS</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-cyan-300 transition-colors">
                  Stack Tecnológica
                </h4>

                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  Domínio técnico abrangente em HTML5, CSS3, Tailwind CSS, JavaScript, React, TypeScript e ferramentas essenciais de desenvolvimento.
                </p>

                {/* Tech chips preview */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['HTML5', 'CSS3', 'Tailwind', 'JavaScript', 'React', 'TypeScript', 'Java/Spring'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <NavLink
                to="/techs"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 group-hover:text-white transition-colors pt-2 border-t border-white/10"
              >
                <span>Explorar competências</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </NavLink>
            </motion.div>

            {/* Card 3: Experiência/Conexões */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="chrome-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-400 via-white to-zinc-600 p-[1px] mb-5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-zinc-100">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
                    COMUNICAÇÃO DIRETA
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">RESPOSTA ÁGIL</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-cyan-300 transition-colors">
                  Experiência & Conexões
                </h4>

                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  Aberto para novos desafios, posições de Frontend Developer, projetos freelance e parcerias em engenharia de software.
                </p>

                {/* Quick connection chips */}
                <div className="flex flex-col gap-1.5 mb-4 text-xs font-mono text-zinc-300">
                  <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/60 border border-white/5">
                    <span className="text-zinc-400">LinkedIn:</span>
                    <span className="text-zinc-200">Thiago de Souza</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/60 border border-white/5">
                    <span className="text-zinc-400">Discord:</span>
                    <span className="text-zinc-200">tsouza_08</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/60 border border-white/5">
                    <span className="text-zinc-400">E-mail:</span>
                    <span className="text-zinc-200 truncate ml-2">thiagosouza...</span>
                  </div>
                </div>
              </div>

              <NavLink
                to="/contato"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 group-hover:text-white transition-colors pt-2 border-t border-white/10"
              >
                <span>Canais oficiais</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </NavLink>
            </motion.div>
          </div>
        </section>

        {/* ================= SPOTLIGHT PROJETO ELLENCO ================= */}
        <section className="py-12">
          <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-white/20 bg-zinc-950/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.06)]">
            {/* Background lighting */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-600/10 filter blur-[90px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between relative z-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-mono mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  CASE CORPORATIVO PRINCIPAL
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
                  ELLENCO — Plataforma Operacional
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.frontendStack.concat(featuredProject.backendStack || []).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <ChromeButton
                    variant="primary"
                    size="md"
                    href={featuredProject.liveUrl}
                    target="_blank"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Aplicação ao Vivo (Render)
                  </ChromeButton>

                  <ChromeButton
                    variant="outline"
                    size="md"
                    href={featuredProject.githubUrl}
                    target="_blank"
                    icon={<GithubIcon className="w-4 h-4" />}
                  >
                    Repositório GitHub
                  </ChromeButton>
                </div>
              </div>

              {/* Decorative Mock Metrics Card */}
              <div className="w-full lg:w-80 p-5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md">
                <div className="text-xs font-mono text-zinc-400 uppercase mb-3 flex items-center justify-between">
                  <span>Destaques Técnicos</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-3">
                  {featuredProject.metrics?.map((m) => (
                    <div key={m.label} className="flex items-center justify-between pb-2 border-b border-white/5">
                      <span className="text-xs text-zinc-400">{m.label}</span>
                      <span className="text-xs font-mono text-white font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <NavLink
                    to="/projetos"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Ver análise de arquitetura</span>
                    <ArrowRight className="w-3 h-3" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
