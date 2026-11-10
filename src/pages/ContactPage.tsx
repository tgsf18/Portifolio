import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Send,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, DiscordIcon } from '../components/BrandIcons';
import { SEO } from '../components/SEO';
import { BlurReveal } from '../components/TextReveal';
import { ChromeButton } from '../components/ChromeButton';

export const ContactPage: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2800);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Build mailto URI as direct email client trigger
    const mailtoUri = `mailto:thiagosouzaferreira1a@gmail.com?subject=${encodeURIComponent(
      subject || `Contato via Portfólio de ${name}`
    )}&body=${encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    )}`;

    window.location.href = mailtoUri;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <>
      <SEO
        title="Contatos Oficiais & Redes"
        description="Entre em contato com Thiago de Souza Ferreira: LinkedIn, Discord (tsouza_08), E-mail oficial (thiagosouzaferreira1a@gmail.com) e GitHub (tgsf18)."
        canonicalPath="/contato"
      />

      <div className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950/60 border border-white/20 backdrop-blur-md text-xs font-mono text-zinc-300 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.06)]">
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              <span>CANAIS OFICIAIS // CONEXÃO DIRETA</span>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-4 chrome-text">
              Contatos & Conexões
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <p className="text-base text-zinc-400 leading-relaxed font-sans">
              Pronto para colaborar em projetos inovadores, desafios de desenvolvimento frontend de alta fidelidade e engenharia de software corporativa. Conecte-se diretamente através dos canais abaixo.
            </p>
          </BlurReveal>
        </div>

        {/* ================= CARDS DE CONEXÃO RÁPIDA ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: LinkedIn */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="chrome-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-400 via-white to-zinc-600 p-[1px] mb-5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-blue-400">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30">
                  REDE PROFISSIONAL
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors">
                LinkedIn
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-3">
                Perfil Oficial: Thiago de Souza
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                Conecte-se para networking profissional, recomendações, histórico de carreira e novas oportunidades de colaboração.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <ChromeButton
                variant="primary"
                size="sm"
                href="https://www.linkedin.com"
                target="_blank"
                className="w-full"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Acessar Perfil no LinkedIn
              </ChromeButton>
            </div>
          </motion.div>

          {/* Card 2: Discord */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="chrome-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-400 via-white to-zinc-600 p-[1px] mb-5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-indigo-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/30">
                  MENSAGEM RÁPIDA
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  ONLINE
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors">
                Discord
              </h3>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-white/10 mb-3">
                <span className="text-xs font-mono text-zinc-100 font-bold">tsouza_08</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                Para alinhamento ágil, conversas técnicas sobre desenvolvimento e discussões em tempo real sobre projetos.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <ChromeButton
                variant={copiedType === 'discord' ? 'subtle' : 'outline'}
                size="sm"
                onClick={() => copyToClipboard('tsouza_08', 'discord')}
                className="w-full"
                icon={
                  copiedType === 'discord' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )
                }
              >
                {copiedType === 'discord' ? 'Copiado para o Clipboard!' : 'Copiar Usuário (tsouza_08)'}
              </ChromeButton>
            </div>
          </motion.div>

          {/* Card 3: E-mail */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="chrome-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-400 via-white to-zinc-600 p-[1px] mb-5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  CANAL PRINCIPAL
                </span>
                <span className="text-[10px] font-mono text-zinc-400">DIRETO</span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors">
                E-mail Profissional
              </h3>
              <p className="text-xs font-mono text-zinc-300 mb-3 truncate" title="thiagosouzaferreira1a@gmail.com">
                thiagosouzaferreira1a@gmail.com
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                Para propostas formais, convites para entrevistas, especificações de projetos freelance ou contato corporativo.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <ChromeButton
                variant="primary"
                size="sm"
                href="mailto:thiagosouzaferreira1a@gmail.com"
                className="w-full"
                icon={<Mail className="w-3.5 h-3.5" />}
              >
                Abrir Cliente de E-mail
              </ChromeButton>

              <ChromeButton
                variant="subtle"
                size="sm"
                onClick={() =>
                  copyToClipboard('thiagosouzaferreira1a@gmail.com', 'email')
                }
                className="w-full text-xs"
                icon={
                  copiedType === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )
                }
              >
                {copiedType === 'email' ? 'E-mail Copiado!' : 'Copiar E-mail'}
              </ChromeButton>
            </div>
          </motion.div>
        </div>

        {/* ================= FORMULÁRIO DE CONTATO & STATUS OPERACIONAL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Informações de Disponibilidade e GitHub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status card */}
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/15 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  DISPONÍVEL PARA CONTRATAÇÕES
                </span>
              </div>

              <h4 className="text-lg font-bold text-white font-heading mb-2">
                Pronto para novos desafios técnicos
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                Atualmente disponível para contratação em regime CLT / PJ ou projetos freelance de ponta a ponta em desenvolvimento Frontend (React, Vite, Tailwind CSS, TypeScript).
              </p>

              <div className="space-y-2.5 text-xs text-zinc-300 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Fuso Horário: São Paulo, Brasil (GMT-3)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Tempo Médio de Retorno: Menos de 24 horas</span>
                </div>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/15 backdrop-blur-xl shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    CÓDIGO ABERTO
                  </span>
                  <span className="text-sm font-bold text-white">github.com/tgsf18</span>
                  <span className="text-xs text-zinc-400 block">Repositórios e contribuições públicas</span>
                </div>
              </div>

              <ChromeButton
                variant="outline"
                size="sm"
                href="https://github.com/tgsf18"
                target="_blank"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Visitar
              </ChromeButton>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/70 border border-white/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1.5 flex items-center gap-2">
                  <span>Envie uma Mensagem Direta</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Preencha o formulário abaixo para iniciar uma conversa direta por e-mail.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Silva"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-white/15 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-white/15 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Assunto
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ex: Oportunidade Frontend / Novo Projeto"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-white/15 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Olá Thiago, gostaria de conversar sobre uma oportunidade de..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-white/15 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-zinc-400">
                    * Todos os dados são transmitidos de forma segura e direta.
                  </span>

                  <ChromeButton
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Enviar Mensagem
                  </ChromeButton>
                </div>

                {formSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Seu cliente de e-mail foi acionado com a mensagem formatada. Obrigado pelo contato!</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
