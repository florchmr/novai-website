import { SITE } from './site';

// Una sola entidad para todo el sitio: las páginas referencian la organización de Head.astro por @id.
export const SITE_URL = 'https://agencianovai.com';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
// Lleva name/url además del @id porque Google pide el nombre del autor en Article.
export const ORG_REF = { '@type': 'Organization', '@id': ORG_ID, name: SITE.name, url: `${SITE_URL}/` } as const;
