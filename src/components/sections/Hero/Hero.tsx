import React from 'react'
import { motion, type Variants } from 'framer-motion'
import Button from '../../ui/Button/Button'
import IconFace from '../../../assets/statics/facebook.svg?react'
import IconIn from '../../../assets/statics/linkedin.svg?react'
import styles from './Hero.module.scss'

interface HeroProps {
  name: string
  lastName: string
  occupation: string
  description: string
  photo: string
  faceUrl: string
  inUrl: string
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

const imageVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

const Hero: React.FC<HeroProps> = ({
  name, lastName, occupation, description, photo, faceUrl, inUrl,
}) => (
  <section id="hero" className={styles.hero}>
    <motion.div
      className={styles.content}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className={styles.occupation} variants={itemVariants}>
        {occupation}
      </motion.p>
      <motion.h1 className={styles.name} variants={itemVariants}>
        {name} <span className={styles.lastname}>{lastName}</span>
      </motion.h1>
      <motion.p className={styles.description} variants={itemVariants}>
        {description}
      </motion.p>
      <motion.div className={styles.actions} variants={itemVariants}>
        <Button variant="primary" as="a" href="#contact">Hire me</Button>
        <Button variant="outline" as="a" href="#about">About me</Button>
      </motion.div>
      <motion.ul className={styles.socials} variants={itemVariants}>
        <li>
          <a href={faceUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
            <IconFace aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href={inUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconIn aria-hidden="true" />
          </a>
        </li>
      </motion.ul>
    </motion.div>

    <motion.div
      className={styles.image}
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={photo} alt={`${name} ${lastName}`} />
    </motion.div>
  </section>
)

export default Hero
