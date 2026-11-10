export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  isFeatured: boolean;
  category: 'Full Stack' | 'Frontend Puro' | 'Sistemas Corporativos';
  frontendStack: string[];
  backendStack?: string[];
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl: string;
  previewGradient: string;
}

export const projectsData: Project[] = [
  {
    id: 'ellenco-plataforma',
    title: 'ELLENCO — Plataforma Operacional',
    subtitle: 'Sistema Corporativo de Alta Robustez & Gestão Logística',
    description:
      'Sistema completo corporativo com arquitetura robusta para controle de autenticação, níveis de acesso, gestão de estoque e operações logísticas.',
    longDescription:
      'O ELLENCO é uma solução corporativa desenhada para centralizar e otimizar processos operacionais críticos. Com foco em segurança e alta disponibilidade, a plataforma integra controle rigoroso de autenticação JWT, gestão granular de permissões (RBAC), rastreabilidade ponta a ponta de movimentações de estoque e fluxo logístico automatizado.',
    isFeatured: true,
    category: 'Full Stack',
    frontendStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
    backendStack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker'],
    keyFeatures: [
      'Autenticação e Autorização multi-nível com Spring Security e JWT',
      'Controle em tempo real de inventário, entradas, saídas e ponto de reposição',
      'Módulo de logística com despacho, rastreio e relatórios gerenciais analíticos',
      'Interface responsiva com alta densidade de dados e tempo de resposta ultrarrápido',
      'Banco de dados PostgreSQL modelado para integridade transacional e escalabilidade'
    ],
    metrics: [
      { label: 'Arquitetura', value: 'Clean & Modular' },
      { label: 'Segurança', value: 'RBAC / JWT' },
      { label: 'Performance', value: 'Sub-second' },
      { label: 'Status', value: 'Em Produção' }
    ],
    liveUrl: 'https://ellenco.onrender.com',
    githubUrl: 'https://github.com/tgsf18/Projeto-Ellenco',
    previewGradient: 'from-blue-600/30 via-slate-800/40 to-zinc-950'
  },
  {
    id: 'cyberstore-ecommerce',
    title: 'CyberStore — E-Commerce Futurista',
    subtitle: 'Interface E-Commerce Moderna & Ultra-Rápida',
    description:
      'Aplicação de comércio eletrônico futurista desenvolvida com foco em performance pura, semântica web impecável e experiência de compra fluida.',
    longDescription:
      'Interface de loja virtual de alta fidelidade desenvolvida com tecnologias web fundamentais. Conta com catálogo interativo de produtos tecnológicos, carrinho de compras reativo persistido em LocalStorage, filtros dinâmicos por categoria e faixa de preço, além de microinterações fluidas e responsividade absoluta em todas as telas.',
    isFeatured: false,
    category: 'Frontend Puro',
    frontendStack: ['HTML5 Semântico', 'CSS3 Avançado', 'Tailwind CSS', 'JavaScript (ES6+)'],
    keyFeatures: [
      'Carrinho de compras dinâmico com cálculo instantâneo de totais e impostos',
      'Filtros inteligentes por categoria, preço e ordenação sem recarregamento',
      'Feedback tátil com animações CSS de transição metálica e glassmorphism',
      'Código 100% modular, sem frameworks pesados, garantindo LCP e FCP exemplares'
    ],
    metrics: [
      { label: 'Lighthouse', value: '100 Score' },
      { label: 'Responsivo', value: '100% Mobile' },
      { label: 'Zero Dependência', value: 'Vanilla JS' }
    ],
    liveUrl: 'https://github.com/tgsf18/Portifolio',
    githubUrl: 'https://github.com/tgsf18/Portifolio',
    previewGradient: 'from-purple-600/20 via-zinc-800/40 to-zinc-950'
  },
  {
    id: 'novadash-analytics',
    title: 'NovaDash — Painel Analítico & Métricas',
    subtitle: 'Dashboard de Inteligência e Visualização de Dados',
    description:
      'Painel interativo de inteligência corporativa com métricas em tempo real, gráficos dinâmicos e arquitetura orientada a componentes frontend.',
    longDescription:
      'Dashboard analítico concebido para monitoramento de KPIs e métricas operacionais críticas. Oferece visualização rica de dados com gráficos responsivos, cartões com indicadores de tendência percentual, alternador de densidade de layout e estrutura modular em HTML5 e Tailwind CSS.',
    isFeatured: false,
    category: 'Frontend Puro',
    frontendStack: ['HTML5', 'Tailwind CSS', 'JavaScript Moderno', 'Canvas API', 'CSS Grid'],
    keyFeatures: [
      'Gráficos estatísticos interativos renderizados com Canvas e SVG leve',
      'Indicadores de KPIs com cálculos automáticos de variações e metas',
      'Layout adaptativo em CSS Grid com colapso inteligente para dispositivos móveis',
      'Estética Dark Mode cromada com cartões translúcidos e efeitos de hover'
    ],
    metrics: [
      { label: 'Tempo de Carga', value: '< 200ms' },
      { label: 'Gráficos', value: 'Interactive' },
      { label: 'Acessibilidade', value: 'WCAG AAA' }
    ],
    liveUrl: 'https://github.com/tgsf18/Portifolio',
    githubUrl: 'https://github.com/tgsf18/Portifolio',
    previewGradient: 'from-emerald-600/20 via-zinc-800/40 to-zinc-950'
  }
];
