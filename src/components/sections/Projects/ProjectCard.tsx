import React from 'react'
import { motion } from 'framer-motion'
import Tag from '../../ui/Tag/Tag'
import Button from '../../ui/Button/Button'
import type { Project } from '../../../types'
import styles from './Projects.module.scss'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { title, description, tags, repoUrl, liveUrl, image } = project

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      {image && (
        <div className={styles.cardImage}>
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <ul className={styles.cardTags}>
          {tags.map((tag) => (
            <li key={tag}><Tag label={tag} /></li>
          ))}
        </ul>
        <div className={styles.cardActions}>
          {repoUrl && (
            <Button variant="outline" as="a" href={repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button variant="primary" as="a" href={liveUrl} target="_blank" rel="noreferrer">
              Live
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
