import React from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import Button from '../../ui/Button/Button'
import FadeIn from '../../ui/FadeIn/FadeIn'
import { useLang } from '../../../context/LangContext'
import styles from './About.module.scss'

const About: React.FC = () => {
  const { t } = useLang()

  return (
    <section id="about" className={styles.about}>
      <FadeIn>
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />
        <div className={styles.content}>
          <div className={styles.text}>
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <div className={styles.actions}>
              <Button variant="primary" as="a" href="#contact">
                {t.about.getInTouch}
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default About
