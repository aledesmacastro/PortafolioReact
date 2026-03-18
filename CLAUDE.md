# CLAUDE.md

Este archivo proporciona orientacion a Claude Code (claude.ai/code) para trabajar con el codigo de este repositorio.

## Comandos

```bash
npm run dev      # Servidor de desarrollo Vite
npm run build    # Build de produccion → /dist
npm run preview  # Previsualizar el build localmente
npm run deploy   # Build + despliegue a GitHub Pages
npm run lint     # ESLint sobre src/
```

No hay framework de pruebas configurado.

## Stack

React 18 (hooks) + Vite 5 + TypeScript + SCSS Modules + Framer Motion. SPA sin routing — todas las secciones en scroll vertical, desplegado en GitHub Pages.

## Arquitectura

```
src/
├── components/
│   ├── ui/          # Atomos: Button, Tag, SectionTitle, FadeIn, Icon
│   ├── sections/    # Una carpeta por seccion: Hero, About, Projects, Skills,
│   │                #   Experience, Services, Blog, Contact
│   └── layout/      # Header (sticky + scroll spy), Footer
├── hooks/
│   ├── useScrollSpy.ts      # Detecta seccion activa para el nav
│   └── useIntersection.ts   # Trigger animaciones al entrar al viewport
├── data/            # Datos separados de la UI: projects.ts, skills.ts,
│                    #   experience.ts, services.ts
├── types/
│   └── index.ts     # Interfaces TypeScript globales
├── assets/
│   ├── icons/       # SVGs importados directamente como componentes React
│   └── images/      # profile.jpg — foto de perfil del Hero
└── styles/
    ├── _variables.scss  # Design tokens (colores, tipografia, spacing)
    ├── _mixins.scss
    ├── _reset.scss
    └── global.scss
```

**Entrada:** `src/main.tsx` → monta en `<div id="root">` en `index.html`
**Contenedor principal:** `src/App.tsx` — ensambla todas las secciones en orden.

## Sistema de Diseno — Dark + Cyan

```scss
--color-bg:        #0D0E1A;   // Fondo principal
--color-surface:   #13141F;   // Cards y paneles
--color-accent:    #00D4D4;   // Cyan — acciones y highlights
--color-text:      #E8E9F5;   // Texto principal
--color-text-muted:#7F8099;   // Texto secundario

--font-heading: 'Oswald', sans-serif;
--font-body:    'Inter', sans-serif;
```

Todos los tokens estan en `src/styles/_variables.scss`. Spacing en escala de 8px (`--space-xs` a `--space-4xl`).

## Detalles Clave

- **Estilos**: SCSS Modules por componente + variables CSS globales. No usar SCSS global para estilos de componente.
- **SVG**: Importar directamente como componente React (`import Icon from './icon.svg?react'`), no usar sprite loader.
- **Animaciones**: Framer Motion para fade-in de secciones, hover de cards y efectos del navbar.
- **Datos**: Todo el contenido editable (proyectos, skills, experiencia) vive en `src/data/` — no hardcodear en JSX.
- **Blog**: Conectado a Dev.to API o archivos MDX locales (definir al implementar la seccion).
- **Formulario de contacto**: EmailJS (sin backend).
- **Breakpoints**: `< 480px` mobile | `480–768px` tablet small | `768–1024px` tablet | `> 1024px` desktop.
- **Despliegue**: `https://aledesmacastro.github.io/PortafolioReact/` — base configurada en `vite.config.ts`.

## Estado actual

- **Branch activa**: `feat/refactor-vite-react18-typescript`
- **PR abierto**: #29 — foto de perfil local, ajustes visuales Hero, refactor Skills, README
- **Pendiente**: conectar Blog a Dev.to API, implementar formulario Contact con EmailJS
