import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 1,
    iconName: 'idea',
    title: { es: 'Front End', en: 'Front End' },
    description: {
      es: 'Desarrollo de interfaces modernas, accesibles y responsivas con React y TypeScript.',
      en: 'Building modern, accessible, responsive interfaces with React and TypeScript.',
    },
  },
  {
    id: 2,
    iconName: 'innovation',
    title: { es: 'Desarrollo Web', en: 'Web Development' },
    description: {
      es: 'Aplicaciones web completas con las mejores tecnologías del mercado.',
      en: 'Full web applications using the best technologies on the market.',
    },
  },
  {
    id: 3,
    iconName: 'creativity',
    title: { es: 'Consultoría', en: 'Consulting' },
    description: {
      es: 'Asesoría técnica para equipos y proyectos de software.',
      en: 'Technical advisory for software teams and projects.',
    },
  },
  {
    id: 4,
    iconName: 'chip',
    title: { es: 'RPA', en: 'RPA' },
    description: {
      es: 'Automatización de procesos repetitivos con Agility RPA.',
      en: 'Automation of repetitive processes with Agility RPA.',
    },
  },
]
