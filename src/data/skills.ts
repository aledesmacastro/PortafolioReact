import type { SkillCategory } from '../types'

const devicon = (id: string, variant: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${id}/${variant}.svg`

// Placeholder SVG inline para herramientas sin icono en Devicon
const AGILITY_RPA_ICON =
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='8' fill='%2313141F'/%3E%3Crect x='4' y='4' width='40' height='40' rx='6' fill='none' stroke='%2300D4D4' stroke-width='2'/%3E%3Ctext x='24' y='32' font-family='Oswald,sans-serif' font-size='22' font-weight='700' fill='%2300D4D4' text-anchor='middle'%3ERPA%3C/text%3E%3C/svg%3E`

export const skills: SkillCategory[] = [
  {
    category: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'HTML',        icon: devicon('html5',      'html5-original') },
      { name: 'CSS',         icon: devicon('css3',       'css3-original') },
      { name: 'Sass',        icon: devicon('sass',       'sass-original') },
      { name: 'JavaScript',  icon: devicon('javascript', 'javascript-original') },
      { name: 'TypeScript',  icon: devicon('typescript', 'typescript-original') },
      { name: 'React',       icon: devicon('react',      'react-original') },
    ],
  },
  {
    category: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'PHP', icon: devicon('php', 'php-original') },
    ],
  },
  {
    category: { es: 'Herramientas', en: 'Tools' },
    items: [
      { name: 'Git & GitHub', icon: devicon('git',       'git-original') },
      { name: 'WordPress',    icon: devicon('wordpress', 'wordpress-plain') },
      { name: 'Agility RPA',  icon: AGILITY_RPA_ICON },
    ],
  },
]
