# Portfolio Personal — Anibal Ledesma

SPA de portfolio profesional construida con React 18, Vite y TypeScript. Diseño dark + cyan con tema de alto contraste, soporte ES/EN y animaciones via Framer Motion. Desplegada en GitHub Pages.

**Live:** [aledesmacastro.github.io/PortafolioReact](https://aledesmacastro.github.io/PortafolioReact/)

---

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 18 + TypeScript |
| Bundler | Vite 5 |
| Estilos | SCSS Modules + CSS Variables |
| Animaciones | Framer Motion |
| i18n | React Context (sin dependencias externas) |
| Formulario | Web3Forms (250 emails/mes, sin backend) |
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

## Variables de entorno

Crea un archivo `.env` en la raíz (no se sube al repo):

```env
VITE_WEB3FORMS_KEY=tu_api_key_de_web3forms
```

Obtén tu key gratuita en [web3forms.com](https://web3forms.com).

---

## Arquitectura

```
src/
├── components/
│   ├── ui/           # Átomos: Button, Tag, SectionTitle, FadeIn, HeaderControls
│   ├── sections/     # Hero, About, Services, Skills, Experience,
│   │                 #   Projects, Blog, Contact
│   └── layout/       # Header (sticky + scroll spy), Footer
├── context/
│   ├── ThemeContext.tsx   # Toggle dark ↔ alto contraste; persiste en localStorage
│   └── LangContext.tsx    # Toggle ES ↔ EN; expone { lang, setLang, t }
├── i18n/
│   ├── es.ts              # Diccionario español
│   ├── en.ts              # Diccionario inglés
│   └── index.ts           # Tipo Translations + record por Lang
├── hooks/
│   ├── useScrollSpy.ts     # Detecta sección activa para el nav
│   └── useIntersection.ts  # Trigger animaciones al entrar al viewport
├── data/             # Contenido separado de la UI (usa LocalizedString)
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── services.ts
├── assets/
│   ├── icons/        # SVGs importados como componentes React
│   └── images/
├── styles/
│   ├── _variables.scss  # Design tokens (dark + high-contrast overrides)
│   ├── _mixins.scss
│   ├── _reset.scss
│   └── global.scss
├── types/index.ts    # Interfaces TypeScript globales (Lang, Theme, LocalizedString…)
└── App.tsx           # Ensamblador de secciones
```

---

## Sistema de Diseño

### Tema oscuro (por defecto)

```scss
--color-bg:         #0D0E1A;
--color-surface:    #13141F;
--color-accent:     #00D4D4;
--color-text:       #E8E9F5;
--color-text-muted: #7F8099;
```

### Tema alto contraste (`html.high-contrast`)

```scss
--color-bg:         #FFFFFF;
--color-surface:    #F4F4F4;
--color-accent:     #007070;
--color-text:       #0A0A0A;
--color-text-muted: #3A3A3A;
```

El toggle aplica/quita la clase `high-contrast` en `<html>` y persiste en `localStorage.theme`.

Spacing en escala de 8px: `--space-xs` (8px) → `--space-4xl` (96px).

---

## i18n — ES / EN

Las cadenas de UI viven en `src/i18n/es.ts` y `src/i18n/en.ts`. Los componentes consumen `useLang()`:

```ts
const { t, lang } = useLang()
// t.nav.about, t.hero.hireMe, t.contact.send…
```

Los datos dinámicos (servicios, experiencia, proyectos, skills) usan el tipo `LocalizedString`:

```ts
{ es: 'Líder de Proyectos', en: 'Project Leader' }
// Se derreferencia con: role[lang]
```

El idioma activo persiste en `localStorage.lang` y sincroniza `document.documentElement.lang`.

---

## Secciones

| Sección | Descripción |
|---|---|
| **Hero** | Foto, nombre, ocupación, CTA y redes |
| **About** | Descripción profesional |
| **Services** | Servicios ofrecidos |
| **Skills** | Grid de tecnologías con iconos (Devicon) |
| **Experience** | Historial laboral en timeline |
| **Projects** | Cards de proyectos con links |
| **Blog** | Posts mock (pendiente conectar Dev.to API) |
| **Contact** | Formulario conectado a Web3Forms |

---

## Convenciones

- **Estilos**: SCSS Module por componente + variables CSS globales. No usar SCSS global para estilos de componente.
- **SVGs**: Importar como componente React (`import Icon from './icon.svg?react'`).
- **Datos**: Todo el contenido editable en `src/data/` con forma `LocalizedString` — no hardcodear en JSX.
- **Animaciones**: Framer Motion para fade-in al scroll y transiciones de UI.
- **Breakpoints**: `< 480px` mobile · `480–768px` tablet · `> 1024px` desktop.

---

## Despliegue

El repositorio usa `gh-pages` con base `/PortafolioReact/` configurada en `vite.config.ts`.

> **Nota:** la variable `VITE_WEB3FORMS_KEY` no se sube al repo. Debe estar disponible en el entorno antes de ejecutar el build.

```bash
npm run deploy  # → https://aledesmacastro.github.io/PortafolioReact/
```
