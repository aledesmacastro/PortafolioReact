import React from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import FadeIn from '../../ui/FadeIn/FadeIn'
import ProjectCard from './ProjectCard'
import { projects } from '../../../data/projects'
import styles from './Projects.module.scss'

const Projects: React.FC = () => (
  <section id="projects" className={styles.projects}>
    <FadeIn>
      <SectionTitle title="Projects" subtitle="Things I've built" />
    </FadeIn>
    <div className={styles.grid}>
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  </section>
)

export default Projects
