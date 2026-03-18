# PortafolioReact — Instrucciones de Workspace

**Propósito**: Portfolio profesional SPA con React 18 + Vite + SCSS Modules (ver [CLAUDE.md](../../CLAUDE.md) para contexto completo).

---

## 📋 Estado actual vs. objetivo

| Aspecto | Actual | Objetivo | Prioridad |
|---------|--------|----------|-----------|
| **Bundler** | Webpack 4 | Vite | Alta |
| **React** | 16.13.1 | 18 + hooks | Alta |
| **Estructura** | Componentes flat | Modular (`ui/`, `sections/`, `layout/`) | Alta |
| **Estilos** | Global SCSS | SCSS Modules + CSS var | Media |
| **Animaciones** | Ninguna | Framer Motion | Media |
| **Datos** | Hardcodeado en JSX | Separado en `/data` | Baja |

---

## 🎯 Plan de refactoring

### Fase 1: Webpack → Vite (bloqueante)
1. Migrar `webpack.config.js` → `vite.config.js`
2. Actualizar `package.json` scripts: `npm start` → `npm run dev`
3. Ajustar imports de assets (Vite es más estricto)
4. Verificar deploy en GitHub Pages (`base: '/PortafolioReact/'`)

### Fase 2: React 16 → 18 (bloqueante)
1. Upgrade `react` + `react-dom` a v18
2. Convertir componentes class → funcionales (con hooks)
3. Actualizar `src/index.js` para React 18 API (`createRoot`)
4. Revisar y migrar HOCs a hooks si aplica

### Fase 3: Arquitectura modular (paralelo)
1. Reestructurar `src/components/` → `ui/`, `sections/`, `layout/`
2. Crear `src/hooks/` con `useScrollSpy.js` + `useIntersection.js`
3. Crear carpeta `src/data/` para proyectos, skills, experiencia
4. Separar estilos globales de SCSS Modules

### Fase 4: Estilos + animaciones (opcional, post-funcional)
1. Instalar Framer Motion
2. Configurar SCSS Modules en Vite
3. Extraer tokens CSS a `_variables.scss`
4. Implementar animaciones de fade-in y hover

---

## 🛠️ Comandos

### Estado actual (Webpack)
```bash
npm start      # Dev server en puerto 3000 (webpack-dev-server)
npm run build  # Build → /dist
npm run deploy # Deploy a GitHub Pages
npx eslint src # Linting
```

### Objetivo (Vite)
```bash
npm run dev    # Dev server (Vite, puerto 5173)
npm run build  # Build → /dist
npm run deploy # Deploy (gh-pages -d dist)
npx eslint src # Linting (sin cambios)
```

---

## 🎨 Sistema de diseño — Dark + Cyan

**Colores** (CSS variables globales):
```scss
--color-bg:        #0D0E1A;   // Fondo principal
--color-surface:   #13141F;   // Cards y paneles
--color-accent:    #00D4D4;   // Cyan — acciones y highlights
--color-text:      #E8E9F5;   // Texto principal
--color-text-muted:#7F8099;   // Texto secundario
```

**Tipografía**:
```scss
--font-heading: 'Oswald', sans-serif;
--font-body:    'Inter', sans-serif;
```

**Spacing**: Escala de 8px (`--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`, `--space-2xl`)

→ Todos los tokens en `src/styles/_variables.scss` (crear si no existe).

---

## 📁 Arquitectura objetivo

```
src/
├── components/
│   ├── ui/                  # Átomos: Button, Tag, SectionTitle, Icon
│   ├── sections/            # Una carpeta por sección
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Services/
│   │   ├── Blog/
│   │   └── Contact/
│   └── layout/              # Header (sticky + scroll spy), Footer
├── hooks/
│   ├── useScrollSpy.js      # Detecta sección activa en nav
│   └── useIntersection.js   # Trigger animaciones al entrar viewport
├── data/                    # Contenido separado de UI
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   └── services.js
├── assets/
│   ├── icons/               # SVGs → componentes React
│   └── images/
├── styles/
│   ├── _variables.scss      # Design tokens
│   ├── _mixins.scss
│   ├── _reset.scss
│   └── global.scss
└── App.jsx                  # Ensamblador de secciones
```

---

## 🏗️ Convenciones de código

### Componentes
- **Funcionales con hooks**, no class components
- **SCSS Modules** por componente: `Component.jsx` + `Component.module.scss`
- **Props tipadas** con PropTypes o comentarios JSDoc
- **Exports nombrados** para testing + re-export en barrel files (`index.js`)

### Estilos
- **Nunca** usar `!important`
- **CSS variables** para colores, espacios, tipografía
- **Semantic HTML** — <button> no <div> + onClick
- **Mobile-first** en media queries
- **BEM-like naming** si hay clases globales (formato: `.ComponentName__element--modifier`)

### Organización de datos
- Proyectos, skills, experiencia → archivos `.js` en `/data`
- Componentes leen de `/data` via imports, no APIs
- Cada dato es un objeto con `id`, `title`, `description` mínimo

### Animaciones
- Framer Motion para fade-in al scroll (ver `useIntersection.js`)
- Duración estándar: 0.5s (sabores: entrada 0.3s, transición 0.2s)
- Easing: `"easeInOut"` por defecto

### Hooks personalizados
- Ubicar en `src/hooks/`
- Nombres: `use*` (ej: `useScrollSpy`)
- Funcionalidad: una cosa bien hecha, reutilizable
- Comenta el propósito y retorno

---

## 📝 Flujo de cambios

Cuando trabajes en refactoring:

1. **Fase 1** (Webpack → Vite): Prioriza que el dev siga funcionando
   - Prueba comandos: `npm start` → `npm run dev` después del cambio
   
2. **Fase 2** (React 16 → 18): Convierte un componente de clase a funcional a la vez
   - Mantén el resto compilando antes de hacer el siguiente
   
3. **Fase 3** (Arquitectura): Mueve carpetas, actualiza imports, verifica no romper nada
   - Usa rename refactoring del IDE (Ctrl/Cmd+Shift+R)
   
4. **Fase 4** (Estilos): Una vez que todo funcione, refactoriza estilos
   - Crea `Component.module.scss` en paralelo, después borra global

**Siempre**: Antes de cada commit significativo, corre `npm run build` y `npm run lint` localmente.

---

## 🚀 Despliegue

- **Local dev**: `npm run dev` → `http://localhost:5173/PortafolioReact/`
- **Production build**: `npm run build` → `/dist`
- **Deploy**: `npm run deploy` → `https://aledesmacastro.github.io/PortafolioReact/`

**Nota**: GitHub Pages necesita `base: '/PortafolioReact/'` en `vite.config.js` (configurar tras migrar a Vite).

---

## ⚠️ Errores comunes a evitar

1. **Olvidar `base` en Vite** → Assets rotos en GitHub Pages
2. **Importar estilos globales en módulos** → Conflictos CSS
3. **Hardcodear datos en JSX** → No reutilizable
4. **Componentes muy grandes** (>400 líneas) → Refactoriza en sub-componentes
5. **No usar CSS variables** → Imposible mantener tema
6. **Olvidar async/await en hooks** → Memory leaks si no cleanup
7. **SVGs como strings** → Importa como componentes React (`import Icon from './Icon.svg?react'`)

---

## 📚 Referencias

- **CLAUDE.md**: Contexto completo del proyecto y decisiones de diseño
- **package.json**: Dependencias actuales y scripts
- **webpack.config.js** → **vite.config.js** (migración futura)
- **ESLint config**: `airbnb` (no cambies sin consenso)
- **ColorHunt / Design System**: Dark theme + Cyan accent

---

**Última actualización**: 17 de marzo de 2026  
**Estado**: En refactoring progresivo  
**Responsable**: Alejandro Desma Castro
