import React from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import FadeIn from '../../ui/FadeIn/FadeIn'
import { skills } from '../../../data/skills'
import { useLang } from '../../../context/LangContext'
import styles from './Skills.module.scss'

const Skills: React.FC = () => {
  const { t, lang } = useLang()

  return (
    <section id="skills" className={styles.skills}>
      <FadeIn>
        <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />
      </FadeIn>

      {skills.map(({ category, items }, groupIndex) => (
        <FadeIn key={category.en} delay={groupIndex * 0.15}>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>{category[lang]}</h3>
            <div className={styles.grid}>
              {items.map(({ name, icon }, itemIndex) => (
                <FadeIn key={name} delay={groupIndex * 0.15 + itemIndex * 0.05}>
                  <div className={styles.card}>
                    <img
                      src={icon}
                      alt={name}
                      className={styles.icon}
                      loading="lazy"
                    />
                    <span className={styles.name}>{name}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  )
}

export default Skills
