// Identidad del sitio para <head>, OG y JSON-LD. Un solo lugar para cambiar nombre, textos o dominio.
export const SITE = {
  name: 'Agencia NOVAI',
  alternateName: ['NOVAI'],
  title: 'Agencia NOVAI | Funnels, CRM y automatización con IA',
  description:
    'Conectamos marketing, tecnología y operaciones: funnels, CRM, automatizaciones e inteligencia artificial para escalar tu negocio.',
  locale: 'es_LA',
  lang: 'es',
  definition:
    'Agencia NOVAI (NOVAI) es una agencia argentina de marketing y tecnología, fundada en 2019, que construye funnels, CRM y automatizaciones con IA para infoproductores, expertos, negocios de servicios y agencias.',
  country: 'AR',
  logo: '/favicon-192.png',
  ogImage: '/og.jpg',
  founded: 2019, // 7 años
  areaServed: 'Todo el mundo (servicio remoto)',
  services: ['Conversión', 'Operations', 'Integración', 'Intelligence'],
} as const;
