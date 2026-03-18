import React from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import FadeIn from '../../ui/FadeIn/FadeIn'
import { useIntersection } from '../../../hooks/useIntersection'
import { skills } from '../../../data/skills'
import styles from './Skills.module.scss'

const Skills: React.FC = () => {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="skills" className={styles.skills}>
      <FadeIn>
        <SectionTitle title="Skills" subtitle="Every day is a new challenge" />
      </FadeIn>
      <div ref={ref} className={styles.list}>
        {skills.map(({ name, percent }, i) => (
          <FadeIn key={name} delay={i * 0.05}>
            <div className={styles.item}>
              <div className={styles.header}>
                <span className={styles.name}>{name}</span>
                <span className={styles.percent}>{percent}%</span>
              </div>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: isVisible ? `${percent}%` : '0%' }}
                  role="progressbar"
                  aria-valuenow={percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${name}: ${percent}%`}
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default Skills
