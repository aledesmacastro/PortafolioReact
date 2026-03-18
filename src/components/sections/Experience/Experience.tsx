import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import FadeIn from '../../ui/FadeIn/FadeIn'
import { experience } from '../../../data/experience'
import styles from './Experience.module.scss'

const Experience: React.FC = () => (
  <section id="experience" className={styles.experience}>
    <FadeIn>
      <SectionTitle title="Experience" subtitle="My professional journey" />
    </FadeIn>
    <div className={styles.timeline}>
      {experience.map(({ id, company, role, period, description }, i) => (
        <motion.div
          key={id}
          className={styles.item}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
        >
          <div className={styles.period}>{period}</div>
          <div className={styles.content}>
            <h3 className={styles.role}>{role}</h3>
            <span className={styles.company}>{company}</span>
            <p className={styles.description}>{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Experience
