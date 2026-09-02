// -----------------------------------------------------------------------------
// Configuração central do site. Repopular com os dados reais da cliente.
// Campos marcados "FICTÍCIO" são placeholders aprovados pela cliente para o
// preview — trocar antes do deploy final.
// -----------------------------------------------------------------------------

export const SITE = {
  name: 'Schardosim e Dilarez e Marian Advogados Associados',
  shortName: 'Schardosim, Dilarez e Marian',
  // TROCAR pelo domínio real (sem barra no final). Sugerido: sdm-advprev.com.br
  url: 'https://exemplo.com.br',
  lang: 'pt-BR',
  locale: 'pt_BR',
  description:
    'Advocacia especializada em Direito Previdenciário em Gravataí/RS. Aposentadorias, auxílio por incapacidade, BPC/LOAS e revisão de benefícios do INSS. Atendimento presencial na região e online.',
  author: 'Schardosim e Dilarez e Marian Advogados Associados',
} as const;

export const CONTACT = {
  email: 'contato@sdm-advprev.com.br',
  phones: ['(51) 3490-5957', '(51) 99644-2529'],
  // Compat: primeiro telefone como principal.
  phone: '(51) 3490-5957',
  // WhatsApp: somente dígitos com DDI 55.
  whatsapp: '5551996442529',
  whatsappText: 'Olá! Vim pelo site e gostaria de tirar uma dúvida sobre um benefício do INSS.',
  address: {
    street: 'Rua Coronel Sarmento, 1560, sala 01',
    district: 'Centro',
    city: 'Gravataí',
    state: 'RS',
    postalCode: '94010-030',
    country: 'BR',
  },
  // Coordenadas reais (Google Maps / Perfil da Empresa).
  geo: { latitude: '-29.9412034', longitude: '-50.9927893' },
  hoursText:
    'Atendimento presencial: segunda a quinta, das 9h às 12h e das 13h às 17h; sexta, das 9h às 12h. WhatsApp na sexta até às 16h.',
  // Estruturado para schema.org (openingHoursSpecification).
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '12:00' },
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '13:00', closes: '17:00' },
    { days: ['Friday'], opens: '09:00', closes: '12:00' },
  ],
  mapsUrl: 'https://maps.app.goo.gl/7YweEK3NGNaybTSi6',
  googleReviewsUrl: 'https://share.google/hi871DpUq6lr332uG',
  responseTime: 'Respondemos em até 24 horas úteis.',
  oab: 'OAB/RS',
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/sdm.adv',
  facebook:
    'https://www.facebook.com/people/Schardosim-Dilarez-e-Marian-Advogados-Associados/61582760406251/',
  linkedin: '',
} as const;

// Link pronto do WhatsApp (usado em botões).
export const whatsappHref = CONTACT.whatsapp
  ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`
  : '';

export const mailtoHref = CONTACT.email ? `mailto:${CONTACT.email}` : '';

// -----------------------------------------------------------------------------
// Sócias. bio1 = real (cliente enviou). bio2/bio3 = FICTÍCIO para o preview.
// -----------------------------------------------------------------------------
export const TEAM: {
  name: string;
  slug: string;
  oab: string;
  role: string;
  education: string[];
  bio: string;
  photo: string; // caminho em /public/equipe — sem foto ainda
  fictitious?: boolean;
}[] = [
  {
    name: 'Terezinha Pereira Schardosim Garcia',
    slug: 'terezinha-schardosim',
    oab: 'OAB/RS 60.163',
    role: 'Advogada — Especialista em Direito Previdenciário',
    education: [
      'Pós-graduação em Direito Previdenciário',
      'Cursos de aperfeiçoamento e especialização em Direito Previdenciário',
      'Participação contínua em seminários e congressos da área',
    ],
    bio: 'Advogada há mais de 20 anos, com atuação dedicada ao Direito Previdenciário. Trabalho baseado em conhecimento técnico, atualização permanente, ética e dedicação individual a cada caso, aliando competência jurídica a escuta atenta, acolhimento e clareza nas orientações.',
    photo: '',
  },
  {
    name: 'Ana Beatriz Dilarez Moraes', // FICTÍCIO
    slug: 'ana-dilarez',
    oab: 'OAB/RS 000.000', // FICTÍCIO
    role: 'Advogada — Direito Previdenciário',
    education: [
      'Pós-graduação em Direito Previdenciário (FICTÍCIO)',
      'Graduação em Direito (FICTÍCIO)',
    ],
    bio: 'TEXTO FICTÍCIO PARA O PREVIEW. Atuação em benefícios por incapacidade, revisões e recursos administrativos junto ao INSS, com foco em atendimento próximo e acompanhamento do cliente em todas as etapas do processo.',
    photo: '',
    fictitious: true,
  },
  {
    name: 'Carla Marian Ferreira', // FICTÍCIO
    slug: 'carla-marian',
    oab: 'OAB/RS 000.000', // FICTÍCIO
    role: 'Advogada — Direito Previdenciário',
    education: [
      'Pós-graduação em Direito Previdenciário (FICTÍCIO)',
      'Graduação em Direito (FICTÍCIO)',
    ],
    bio: 'TEXTO FICTÍCIO PARA O PREVIEW. Atuação em planejamento previdenciário e aposentadorias, orientando segurados sobre o melhor momento e a melhor via para requerer o benefício.',
    photo: '',
    fictitious: true,
  },
];

// -----------------------------------------------------------------------------
// Navegação principal. A ordem aqui é a ordem no menu.
// -----------------------------------------------------------------------------
export const NAV: { label: string; href: string }[] = [
  { label: 'Início', href: '/' },
  { label: 'O Escritório', href: '/sobre' },
  { label: 'Áreas de Atuação', href: '/areas' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Artigos', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];
