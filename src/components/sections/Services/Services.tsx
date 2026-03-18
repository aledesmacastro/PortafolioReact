import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import FadeIn from '../../ui/FadeIn/FadeIn'
import { services } from '../../../data/services'
import IconIdea from '../../../assets/statics/idea.svg?react'
import IconCreativity from '../../../assets/statics/creativity.svg?react'
import IconInnovation from '../../../assets/statics/innovation.svg?react'
import IconChip from '../../../assets/statics/chip.svg?react'
import IconRobot from '../../../assets/statics/robot.svg?react'
import styles from './Services.module.scss'

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  idea: IconIdea,
  creativity: IconCreativity,
  innovation: IconInnovation,
  chip: IconChip,
  robot: IconRobot,
}

const Services: React.FC = () => (
  <section id="services" className={styles.services}>
    <FadeIn>
      <SectionTitle title="Services" subtitle="What I do?" />
    </FadeIn>
    <div className={styles.grid}>
      {services.map(({ id, iconName, title, description }, i) => {
        const SvgIcon = iconMap[iconName]
        return (
          <motion.div
            key={id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
          >
            <div className={styles.icon}>
              {SvgIcon && <SvgIcon aria-hidden="true" />}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </motion.div>
        )
      })}
    </div>
  </section>
)

export default Services
