import React from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import Button from '../../ui/Button/Button'
import FadeIn from '../../ui/FadeIn/FadeIn'
import styles from './About.module.scss'

const About: React.FC = () => (
  <section id="about" className={styles.about}>
    <FadeIn>
      <SectionTitle title="About Me" subtitle="Who am I?" />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Desarrollador Front End con experiencia en la creación de interfaces
            modernas, accesibles y responsivas. Hábil para trabajar en ambientes
            desafiantes y competitivos.
          </p>
          <p>
            Persona responsable y adaptable, con rápida absorción de nuevas
            tecnologías. Apasionado por el trabajo en equipo y la mejora continua.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" as="a" href="#contact">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
)

export default About
