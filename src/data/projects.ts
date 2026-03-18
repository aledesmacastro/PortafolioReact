import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: {
      es: 'Portafolio Personal',
      en: 'Personal Portfolio',
    },
    description: {
      es: 'Portafolio personal construido con React 18, Vite, TypeScript y SCSS Modules. Incluye animaciones con Framer Motion.',
      en: 'Personal portfolio built with React 18, Vite, TypeScript, and SCSS Modules. Features animations powered by Framer Motion.',
    },
    tags: ['React', 'TypeScript', 'Vite', 'SCSS'],
    repoUrl: 'https://github.com/aledesmacastro/PortafolioReact',
    liveUrl: 'https://aledesmacastro.github.io/PortafolioReact/',
  },
]
