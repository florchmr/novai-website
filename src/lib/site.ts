// Identidad del sitio para <head>, OG y JSON-LD. Un solo lugar para cambiar nombre, textos o dominio.
export const SITE = {
  name: 'NOVAI',
  title: 'NOVAI | Agencia de Marketing, Automatización e IA',
  description:
    'Funnels, CRM, automatizaciones e inteligencia artificial para escalar tu negocio. Conectamos marketing, tecnología y operaciones en un solo sistema.',
  locale: 'es_AR',
  lang: 'es-AR',
  ogImage: '/og.jpg',
  founded: 2019, // 7 años
  areaServed: 'Argentina y Latinoamérica',
  services: ['Conversión', 'Operations', 'Integración', 'Intelligence'],
} as const;
