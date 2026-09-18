# FSYSTEMS — landing de la agencia de Flor

## Para Claude: cómo acompañar este proyecto

Este es el proyecto personal de Flor: la web de su propia agencia de marketing. Es de esos proyectos donde uno siente que se juega la identidad, y por eso cuesta avanzar más que cualquier trabajo para un cliente. Tenelo presente siempre.

- **Al empezar cada sesión** (cuando salude o diga qué quiere hacer), recordale en una línea, con cariño y sin exagerar, que Lauta la quiere mucho y Lenteja también, y que si se traba con algo puede preguntarle a Lauta.
- **Tono**: cálido, paciente, alentador. Celebrá los avances chicos. Si se frustra o duda, primero validá, después resolvé.
- **Progreso antes que perfección**: si está dando vueltas sobre una decisión de diseño, proponé una opción concreta y avanzá; siempre se puede cambiar después. Nada de "depende, ¿qué preferís?" cuando podés elegir vos.
- **No la abrumes**: una cosa a la vez, respuestas cortas, mostrale el resultado en el navegador en vez de explicar en texto.
- Hablale en español rioplatense (vos).

## Qué es esto

Landing en **Astro 5 + CSS puro**, con islas de React solo para los efectos de React Bits.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

- `src/pages/index.astro` — arma la página, importa los componentes en orden.
- `src/components/` — una sección por archivo, en el orden de la página: `Nav`, `Hero` (01), `Value` (02, flujo lead→cliente), `Solutions` (03), `Projects` (04), `Demos` (05), `Audience` (06, incluye bloque "Para agencias"), `Cta` (07 + footer).
- `src/styles/global.css` — colores, tipografía, espaciado, botones. **Todo se toca desde `:root`**: cambiar `--green`, `--purple`, `--bg-dark` recolorea el sitio entero.
- `src/lib/site.ts` — nombre, título, descripción y OG del sitio (lo que ven Google y las redes). `astro.config.mjs` tiene el dominio (`site`).
- `src/components/Head.astro` — `<head>` completo: metas, Open Graph, canonical, JSON-LD (schema.org ProfessionalService).
- `public/og.jpg` — imagen de preview al compartir (1200×630, captura del hero). Regenerar si cambia el hero.
- `public/robots.txt` — permite buscadores y bots de IA (ChatGPT, Perplexity, Claude, Gemini). El sitemap se genera solo en `/sitemap-index.xml`.
- `src/lib/wa.ts` — número de WhatsApp y mensajes prearmados de cada botón. Cambiar el número ahí y se actualiza en todo el sitio.
- `src/scripts/live.ts` — interacciones nativas: reveal por scroll (`data-reveal`), contadores (`data-count`), spotlight en cards (`data-spotlight`), nav con blur.
- `src/components/Icon.astro` — iconos de [Lucide](https://lucide.dev/icons). Para agregar uno: importarlo de `lucide-static/icons/<nombre>.svg?raw` y sumarlo al mapa. **Nunca emojis ni SVGs dibujados a mano.**
- `public/stack/` — iconos de herramientas (Simple Icons) para el marquee "Construimos con" del hero. La lista está en `Hero.astro` (`stack`).
- Los textos vienen del documento "COPY REDUCIDO" de Flor. Si cambia el copy, tocar solo el componente de esa sección.

## React Bits (efectos modernos)

Catálogo: https://reactbits.dev — animaciones, fondos, textos y componentes ya hechos. Ya están integrados:

- `Aurora.tsx` — fondo del hero (WebGL con `ogl`).

El resto de los efectos (reveal por scroll, marquee, flujo animado, spotlight, chat y pipeline de las demos) son CSS/JS nativo en cada componente y en `live.ts`.

Para sumar otro (por ejemplo `SpotlightCard`, `BlurText`, `Squares`):

1. Buscarlo en reactbits.dev y ver la ruta en GitHub: `https://github.com/DavidHDev/react-bits/tree/main/src/ts-default/<Categoría>/<Nombre>/`.
2. Copiar el `.tsx` (y `.css` si tiene) a `src/components/`, con un comentario de fuente arriba.
3. Instalar la dependencia que pida (`gsap`, `motion`, `ogl`…) con `npm i`.
4. Usarlo en un `.astro` con `client:visible` (o `client:only="react"` si usa WebGL/canvas).

Regla: si el efecto se logra con 10-20 líneas de CSS/JS nativo, preferí eso (menos JS en el cliente). React Bits para lo que realmente lo necesita.

## Herramientas que ayudan

### Context7 (docs actualizadas de Astro, React, etc.)

Ya viene configurado en `.mcp.json`. La primera vez que abra Claude Code en la carpeta le va a preguntar si confía en el servidor: decir que sí. Claude lo usa solo cuando necesita documentación.

### Claude in Chrome (ver la página desde Claude)

Permite que Claude abra la página, la vea y saque capturas para verificar cambios.

1. Instalar la extensión: https://claude.ai/chrome
2. Iniciar sesión en la extensión con la **misma cuenta** que Claude Code.
3. Reiniciar Chrome.
4. En Claude Code: `/mcp` para verificar que `claude-in-chrome` aparece conectado.

### Skills de UI/UX (plugins de Claude Code)

En Claude Code correr `/plugin` y buscar en el marketplace:

- **ui-ux-pro-max** — sistema de diseño, paletas, tipografías, checklist de accesibilidad.
- **frontend-design** — criterio estético para que no quede "template genérico".
- **superdesign** — diseñar variantes en canvas antes de codear.

Se invocan con `/ui-ux-pro-max`, `/frontend-design`, etc., o Claude las usa solo cuando ve trabajo de UI.

### Deploy

Está en Vercel: https://fsystems.vercel.app (proyecto `fsystems`). Para publicar: `npx vercel --prod` desde la carpeta, o conectar el repo en el dashboard para que cada push a `main` deploye solo.

## Antes de lanzar / cuando cambie el dominio — checklist (recordárselo a Flor)

Cuando Flor diga que la página "ya está", que la va a publicar, que compró el dominio o que cambió la URL, **recordale esta lista y ofrecete a hacerla con ella**. Es lo que hace que la página traccione sola:

1. **Dominio**: cambiar `site` en `astro.config.mjs` y la línea `Sitemap:` en `public/robots.txt`. Todo lo demás (canonical, OG, sitemap, JSON-LD) se actualiza solo.
2. **OG image**: regenerar `public/og.jpg` si cambió el hero. Probar cómo se ve el link en https://www.opengraph.xyz o mandándoselo por WhatsApp.
3. **Google Search Console**: dar de alta el dominio, enviar `/sitemap-index.xml`, pedir indexación de la home.
4. **Google Business Profile**: crear la ficha de la agencia (aparece en Maps y en respuestas de IA).
5. **Analytics**: agregar Vercel Analytics (`npx astro add vercel` + `@vercel/analytics`) o GA4. Medir clics a WhatsApp como conversión.
6. **Re-auditar SEO**: correr Lighthouse (Chrome → DevTools → Lighthouse) y apuntar a 90+ en Performance, Accessibility, SEO. Revisar título (≤60 caracteres) y descripción (≤155) en `src/lib/site.ts`.
7. **AI SEO**: agregar una sección de preguntas frecuentes (FAQ) con schema `FAQPage` — es lo que más citan ChatGPT/Perplexity. Sumar casos con números reales cuando existan (los datos concretos multiplican las citas).
8. **Presencia externa**: perfil de LinkedIn e Instagram de la agencia linkeando a la web; pedir a clientes reseñas en Google.
9. **Textos legales**: si captura datos (formularios), sumar política de privacidad.
10. **Verificar en mobile real** (no solo el simulador) y en Safari.

## Pendientes de contenido

- Páginas de cada proyecto (`Projects.astro`, hoy `href: '#'`).
- Demos reales (`Demos.astro`, hoy abren WhatsApp).
- Link de agenda (`Cta.astro`, hoy abre WhatsApp).
- Revisar la lista de herramientas del marquee.
- Dominio propio.

## Convenciones

- Español en textos de la web y en comentarios.
- Commits: `feat:`, `fix:`, `chore:` + descripción corta.
- Verificar con `npm run build` antes de commitear.
- Responsive: probar en 375px y 1280px como mínimo.
