import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-xl mt-24">
      {/* Chrome accent line at the top */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Bio */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-slate-400 via-white to-zinc-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-xs chrome-text">TS</span>
                </div>
              </div>
              <span className="font-heading font-bold text-base tracking-wider chrome-text">
                THIAGO DE SOUZA
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Desenvolvedor Frontend especializado na criação de interfaces modernas de alta performance (HTML5, CSS3, Tailwind CSS, JavaScript, React, TypeScript) e sistemas integrados com backends robustos (Java & Spring Boot).
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>SÃO PAULO, BRASIL • UTC-3</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 mb-3.5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-zinc-400">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Início (Hero & Hub)
                </NavLink>
              </li>
              <li>
                <NavLink to="/projetos" className="hover:text-white transition-colors">
                  Projetos & Estudos de Caso
                </NavLink>
              </li>
              <li>
                <NavLink to="/techs" className="hover:text-white transition-colors">
                  Stack Tecnológica
                </NavLink>
              </li>
              <li>
                <NavLink to="/contato" className="hover:text-white transition-colors">
                  Contatos Oficiais
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 mb-3.5">
              Conexões
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://github.com/tgsf18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  github.com/tgsf18
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn / Thiago de Souza
                </a>
              </li>
              <li>
                <NavLink
                  to="/contato"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  thiagosouzaferreira1a@gmail.com
                </NavLink>
              </li>
              <li className="text-xs font-mono text-zinc-400 pt-1">
                Discord: <span className="text-zinc-200">tsouza_08</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 text-center sm:text-left">
            © {new Date().getFullYear()} Thiago de Souza Ferreira. Todos os direitos reservados. Tema escuro futurista com estética cromada.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
