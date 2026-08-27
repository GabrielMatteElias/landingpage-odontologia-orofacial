import post1Img from './assets/post1.webp';
import post2Img from './assets/post2.webp';
import post3Img from './assets/post3.webp';
import post4Img from './assets/post4.webp';

export const site = {
  professional: 'Dra. Miriam Kuhn',
  brand: 'Miriam Kuhn',
  initials: 'MK',
  specialty: 'Estética e bem-estar com propósito',
  positioning: 'Resultados naturais que realçam a sua melhor versão.',
  whatsapp: '5551981997594',
  phoneDisplay: '(51) 98199-7594',
  whatsappMessage: 'Olá! Gostaria de agendar um atendimento com a Dra. Miriam Kuhn.',
  instagram: 'https://www.instagram.com/dra.miriamkuhn',
  seoTitle: 'Dra. Miriam Kuhn | Estética e bem-estar com propósito',
  seoDescription:
    'Atendimentos em estética facial com a Dra. Miriam Kuhn. Botox, planejamento facial e cuidado voltado a resultados naturais.',
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const treatments = [
  {
    number: '01',
    title: 'Botox',
    text: 'Indicado para suavização de rugas dinâmicas e prevenção de marcas de expressão, sempre com avaliação individual.',
  },
  {
    number: '02',
    title: 'Preenchimento facial',
    text: 'Pode contribuir para sustentação, contorno e equilíbrio facial quando existe indicação para o seu caso.',
  },
  {
    number: '03',
    title: 'Planejamento facial',
    text: 'A análise considera proporções, expressão, pele e objetivos para preservar naturalidade no resultado.',
  },
  {
    number: '04',
    title: 'Bem-estar estético',
    text: 'Cuidado conduzido com propósito, escuta e orientação clara antes de qualquer procedimento.',
  },
];

export const posts = [
  {
    image: post1Img,
    alt: 'Resultado de procedimento estético',
  },
  {
    image: post2Img,
    alt: 'Bastidor do atendimento',
  },
  {
    image: post3Img,
    alt: 'Orientação sobre cuidados estéticos',
  },
  {
    image: post4Img,
    alt: 'Procedimento estético',
  },
];

export const faqs = [
  [
    'Como funciona a avaliação?',
    'A consulta começa com uma conversa sobre seus objetivos e uma análise facial para entender quais recursos fazem sentido para você.',
  ],
  [
    'Preciso escolher o procedimento antes?',
    'Não. A avaliação serve justamente para definir se há indicação, quais possibilidades existem e qual caminho é mais coerente.',
  ],
  [
    'Botox deixa o rosto sem expressão?',
    'A proposta é suavizar sinais de forma planejada, preservando expressão e naturalidade sempre que houver indicação.',
  ],
  [
    'O resultado é igual para todo mundo?',
    'Não. Cada rosto responde de um jeito, por isso os resultados variam conforme características individuais e planejamento.',
  ],
  [
    'Como agendo um atendimento?',
    'O agendamento pode ser feito pelo WhatsApp informado nos canais oficiais da Dra. Miriam Kuhn.',
  ],
];
