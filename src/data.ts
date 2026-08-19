export const site = {
  professional: 'Dra. Camila Valença',
  brand: 'Camila Valença',
  specialty: 'Harmonização Orofacial',
  whatsapp: '5551999998888',
  whatsappMessage: 'Olá! Gostaria de agendar uma avaliação facial.',
  instagram: 'https://www.instagram.com/camilavalenca.hof',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Carlos+Trein+555+Bela+Vista+Porto+Alegre',
  address: 'Rua Carlos Trein, 555 · Bela Vista',
  city: 'Porto Alegre · RS',
  hours: 'Segunda a sexta, das 9h às 19h',
  seoTitle: 'Dra. Camila Valença | Harmonização Orofacial em Porto Alegre',
  seoDescription: 'Harmonização orofacial personalizada em Porto Alegre. Avaliação facial, planejamento individual e estética natural com a Dra. Camila Valença.',
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const treatments = [
  { number: '01', title: 'Botox', text: 'Pode suavizar determinadas linhas de expressão quando indicado, preservando a naturalidade do movimento e da expressão.' },
  { number: '02', title: 'Preenchimento labial', text: 'Definição, contorno e volume quando fazem sentido para a proporção do rosto — lábios maiores não são o objetivo por si só.' },
  { number: '03', title: 'Preenchimento facial', text: 'Uma possibilidade para contorno, suporte, proporções ou assimetrias específicas, sempre em áreas selecionadas.' },
  { number: '04', title: 'Bioestimuladores', text: 'Atuam na qualidade da pele e na estimulação gradual de colágeno, com evolução acompanhada ao longo do tempo.' },
];

export const testimonials = [
  { quote: 'Eu tinha muito medo de ficar com o rosto diferente. Desde a avaliação, entendi que o objetivo era respeitar meus traços e fazer apenas o que realmente fazia sentido.', name: 'Marina S.', detail: 'Paciente há 2 anos' },
  { quote: 'O cuidado começa antes do procedimento. A Dra. Camila escuta, explica e não tenta encaixar você em um protocolo pronto. O resultado ficou muito natural.', name: 'Fernanda R.', detail: 'Paciente de harmonização facial' },
  { quote: 'Saí da consulta sentindo que tinha tomado uma decisão consciente. A experiência é tranquila, detalhista e muito diferente do que eu imaginava.', name: 'Eduardo M.', detail: 'Paciente de avaliação facial' },
];

export const faqs = [
  ['Como funciona a avaliação facial?', 'Conversamos sobre seus objetivos, observamos o rosto como um conjunto e avaliamos proporções, contornos e características individuais antes de falar em possibilidades.'],
  ['Preciso saber qual procedimento quero fazer antes da consulta?', 'Não. A avaliação existe justamente para entender o que faz sentido para você, inclusive quando a melhor decisão é não realizar nenhum procedimento naquele momento.'],
  ['Como saber quais procedimentos são indicados para mim?', 'A indicação depende da análise profissional, das suas expectativas e das características do seu rosto. Não existe um protocolo único para todos.'],
  ['A harmonização pode ficar natural?', 'Pode, quando o planejamento respeita suas características, usa recursos de forma criteriosa e considera que menos pode ser melhor.'],
  ['Preenchimento labial sempre aumenta muito os lábios?', 'Não. Ele pode priorizar definição, contorno e proporção, com volume apenas quando for adequado ao seu caso.'],
  ['Quanto tempo dura o tratamento?', 'Cada procedimento tem seu próprio tempo e a duração varia conforme a técnica, o produto e as características individuais. Isso é explicado na avaliação.'],
  ['Botox e preenchimento são a mesma coisa?', 'Não. São recursos diferentes, com objetivos, indicações e formas de atuação distintas. A escolha depende do que está sendo avaliado.'],
  ['Os procedimentos podem ser combinados?', 'Em alguns casos, sim. A combinação só é considerada quando há uma razão estética clara e um planejamento seguro para o conjunto.'],
  ['O resultado é imediato?', 'Depende do procedimento. Alguns efeitos aparecem gradualmente e o resultado pode mudar durante o período de evolução e acompanhamento.'],
  ['Como funciona o acompanhamento após o procedimento?', 'A evolução é acompanhada de perto, com orientações e retorno para observar a resposta e conversar sobre os próximos passos.'],
];
