// Identidad del sitio para <head>, OG y JSON-LD. Un solo lugar para cambiar nombre, textos o dominio.
export const SITE = {
  name: 'NOVAI',
  title: 'NOVAI — Infraestructura digital para marketing y ventas',
  description:
    'Conectamos marketing, tecnología y operaciones: funnels, CRM, automatizaciones e inteligencia artificial para escalar tu negocio.',
  locale: 'es_AR',
  lang: 'es-AR',
  ogImage: '/og.jpg',
  founded: 2019, // 7 años
  areaServed: 'Argentina y Latinoamérica',
  services: ['Conversión', 'Operations', 'Integración', 'Intelligence'],
} as const;
