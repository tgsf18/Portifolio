export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Ferramentas' | 'Database';
  level: string;
  experience: string;
  description: string;
  iconName: string;
  highlightColor: string;
}

export const technologiesData: TechItem[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    level: 'Avançado',
    experience: 'Desenvolvimento SPA & Design Systems',
    description: 'Construção de aplicações reativas de alta complexidade com Hooks, Context API, arquitetura de componentes reutilizáveis e performance otimizada.',
    iconName: 'Atom',
    highlightColor: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 'Avançado',
    experience: 'Tipagem Estrita & Interfaces',
    description: 'Modelagem de tipos robusta, generics, tipagem de contratos de API e garantia de segurança de código para bases de código escaláveis.',
    iconName: 'Code2',
    highlightColor: 'from-blue-400 to-indigo-500'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Especialista',
    experience: 'Design Utilitário & Responsividade',
    description: 'Criação de layouts complexos, estéticas personalizadas (glassmorphism, tema escuro espacial, efeitos cromados), animações fluidas e design 100% responsivo.',
    iconName: 'Palette',
    highlightColor: 'from-teal-400 to-cyan-500'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 'Avançado',
    experience: 'Lógica, Async/Await & DOM',
    description: 'Domínio profundo de JavaScript moderno: manipulação do DOM, Closures, Promises, Event Loop, Programação Funcional e modularidade.',
    iconName: 'Sparkles',
    highlightColor: 'from-yellow-400 to-amber-500'
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    level: 'Especialista',
    experience: 'Semântica Web & SEO',
    description: 'Estruturação semântica limpa focada em acessibilidade (a11y), melhores práticas de SEO, tags Open Graph e indexação de buscadores.',
    iconName: 'Globe',
    highlightColor: 'from-orange-400 to-red-500'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    level: 'Especialista',
    experience: 'Flexbox, Grid & Keyframes',
    description: 'Estilização avançada com Flexbox, CSS Grid, variáveis nativas, efeitos de desfoque backdrop-filter, animações 3D e transformações de alto desempenho.',
    iconName: 'Layers',
    highlightColor: 'from-blue-500 to-sky-400'
  },

  // Backend & Database
  {
    name: 'Java',
    category: 'Backend',
    level: 'Intermediário / Avançado',
    experience: 'POO & Ecossistema Corporativo',
    description: 'Programação Orientada a Objetos com forte tipagem, Streams API, tratamento de exceções e desenvolvimento de serviços corporativos com Java moderno.',
    iconName: 'Coffee',
    highlightColor: 'from-red-500 to-orange-500'
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    level: 'Intermediário / Avançado',
    experience: 'REST APIs & Microsserviços',
    description: 'Criação de backends e APIs RESTful estruturadas com injeção de dependências, Spring Data JPA, DTOs, validações e tratamento global de erros.',
    iconName: 'Server',
    highlightColor: 'from-emerald-400 to-green-600'
  },
  {
    name: 'Spring Security',
    category: 'Backend',
    level: 'Intermediário',
    experience: 'JWT & RBAC (Role-Based Access)',
    description: 'Implementação de filtros de segurança, autenticação stateless via JSON Web Tokens, criptografia de senhas e proteção de rotas com perfis de acesso.',
    iconName: 'ShieldCheck',
    highlightColor: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 'Intermediário / Avançado',
    experience: 'Modelagem Relacional & Consultas',
    description: 'Modelagem de bancos relacionais com integridade referencial, queries otimizadas, índices e integração transparente via JPA/Hibernate.',
    iconName: 'Database',
    highlightColor: 'from-sky-500 to-indigo-600'
  },

  // Ferramentas & Workflow
  {
    name: 'Git',
    category: 'Ferramentas',
    level: 'Avançado',
    experience: 'Controle de Versão & Branching',
    description: 'Fluxo profissional com branches, rebasing, commits atômicos convencionais, resolução de conflitos e histórico rastreável.',
    iconName: 'GitBranch',
    highlightColor: 'from-orange-500 to-red-600'
  },
  {
    name: 'GitHub',
    category: 'Ferramentas',
    level: 'Avançado',
    experience: 'Repositórios, CI/CD & Deploy',
    description: 'Hospedagem de código, code review, GitHub Actions, gerenciamento de issues e integração contínua para projetos modernos.',
    iconName: 'Github',
    highlightColor: 'from-slate-300 to-zinc-500'
  },
  {
    name: 'VS Code',
    category: 'Ferramentas',
    level: 'Avançado',
    experience: 'Ambiente de Desenvolvimento',
    description: 'Configuração avançada de editor, linters (ESLint, Prettier), depuração interativa e extensões de alta produtividade.',
    iconName: 'Terminal',
    highlightColor: 'from-blue-500 to-sky-600'
  },
  {
    name: 'Vite',
    category: 'Ferramentas',
    level: 'Avançado',
    experience: 'Build Tool & Hot Module Replacement',
    description: 'Configuração de bundling de nova geração com HMR ultrarrápido, otimização de assets e compilação enxuta para produção.',
    iconName: 'Zap',
    highlightColor: 'from-purple-400 to-amber-400'
  }
];
