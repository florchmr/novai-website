// Identidad del sitio para <head>, OG y JSON-LD. Un solo lugar para cambiar nombre, textos o dominio.
export const SITE = {
  name: 'NOVAI',
  title: 'NOVAI — Marketing + Technology',
  description:
    'Agencia de marketing y tecnología. Conectamos marketing, tecnología y operaciones: funnels, CRM, automatización, integraciones y agentes de IA.',
  locale: 'es_AR',
  lang: 'es-AR',
  ogImage: '/og.jpg',
  founded: 2019, // 7 años
  areaServed: 'Argentina y Latinoamérica',
  services: ['Conversión', 'Operations', 'Integración', 'Intelligence'],
} as const;
