# Portfolio Personal — Anibal Ledesma

SPA de portfolio profesional construida con React 18, Vite y TypeScript. Diseño dark + cyan con animaciones via Framer Motion, desplegada en GitHub Pages.

**Live:** [aledesmacastro.github.io/PortafolioReact](https://aledesmacastro.github.io/PortafolioReact/)

---

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 18 + TypeScript |
| Bundler | Vite 5 |
| Estilos | SCSS Modules + CSS Variables |
| Animaciones | Framer Motion |
| Deploy | GitHub Pages (`gh-pages`) |

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo → http://localhost:5173/PortafolioReact/
npm run build    # Build de producción → /dist
npm run preview  # Previsualizar el build localmente
npm run deploy   # Build + deploy a GitHub Pages
npm run lint     # ESLint sobre src/
```

---

## Arquitectura

```
src/
├── components/
│   ├── ui/           # Átomos: Button, Tag, SectionTitle, FadeIn, Icon
│   ├── sections/     # Hero, About, Services, Skills, Experience,
│   │                 #   Projects, Blog, Contact
│   └── layout/       # Header (sticky + scroll spy), Footer
├── hooks/
│   ├── useScrollSpy.ts     # Detecta sección activa para el nav
│   └── useIntersection.ts  # Trigger animaciones al entrar al viewport
├── data/             # Contenido separado de la UI
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── services.ts
├── assets/
│   ├── icons/        # SVGs importados como componentes React
│   └── images/
├── styles/
│   ├── _variables.scss  # Design tokens
│   ├── _mixins.scss
│   ├── _reset.scss
│   └── global.scss
├── types/index.ts    # Interfaces TypeScript globales
└── App.tsx           # Ensamblador de secciones
```

---

## Sistema de Diseño — Dark + Cyan

```scss
--color-bg:         #0D0E1A;  /* Fondo principal */
--color-surface:    #13141F;  /* Cards y paneles */
--color-accent:     #00D4D4;  /* Cyan — acciones y highlights */
--color-text:       #E8E9F5;  /* Texto principal */
--color-text-muted: #7F8099;  /* Texto secundario */

--font-heading: 'Oswald', sans-serif;
--font-body:    'Inter', sans-serif;
```

Spacing en escala de 8px: `--space-xs` (8px) → `--space-4xl` (96px).
Todos los tokens en `src/styles/_variables.scss`.

---

## Secciones

| Sección | Descripción |
|---|---|
| **Hero** | Foto, nombre, ocupación, CTA y redes |
| **About** | Descripción profesional |
| **Services** | Servicios ofrecidos |
| **Skills** | Grid de tecnologías con iconos |
| **Experience** | Historial laboral en timeline |
| **Projects** | Cards de proyectos con links |
| **Blog** | Posts desde Dev.to API o MDX |
| **Contact** | Formulario via EmailJS |

---

## Convenciones

- **Estilos**: SCSS Module por componente + variables CSS globales. No usar SCSS global para estilos de componente.
- **SVGs**: Importar como componente React (`import Icon from './icon.svg?react'`).
- **Datos**: Todo el contenido editable en `src/data/` — no hardcodear en JSX.
- **Animaciones**: Framer Motion para fade-in al scroll y transiciones de UI.
- **Breakpoints**: `< 480px` mobile · `480–768px` tablet · `> 1024px` desktop.

---

## Despliegue

El repositorio usa `gh-pages` con base `/PortafolioReact/` configurada en `vite.config.ts`.

```bash
npm run deploy  # → https://aledesmacastro.github.io/PortafolioReact/
```
