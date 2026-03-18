import React from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import FadeIn from '../../ui/FadeIn/FadeIn'
import ProjectCard from './ProjectCard'
import { projects } from '../../../data/projects'
import { useLang } from '../../../context/LangContext'
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
  const { t, lang } = useLang()

  return (
    <section id="projects" className={styles.projects}>
      <FadeIn>
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
      </FadeIn>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} lang={lang} />
        ))}
      </div>
    </section>
  )
}

export default Projects
