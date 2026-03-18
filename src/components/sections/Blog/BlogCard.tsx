import React from 'react'
import { motion } from 'framer-motion'
import Tag from '../../ui/Tag/Tag'
import type { BlogPost } from '../../../types'
import styles from './Blog.module.scss'

interface BlogCardProps {
  post: BlogPost
  index: number
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const date = new Date(post.published_at).toLocaleDateString('es-CO', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      {post.cover_image && (
        <div className={styles.cardCover}>
          <img src={post.cover_image} alt={post.title} loading="lazy" />
        </div>
      )}
      <div className={styles.cardBody}>
        <ul className={styles.cardTags}>
          {post.tag_list.slice(0, 3).map((tag) => (
            <li key={tag}><Tag label={tag} /></li>
          ))}
        </ul>
        <h3 className={styles.cardTitle}>
          <a href={post.url} target="_blank" rel="noreferrer">{post.title}</a>
        </h3>
        <p className={styles.cardDescription}>{post.description}</p>
        <div className={styles.cardMeta}>
          <span>{date}</span>
          <span>{post.reading_time_minutes} min read</span>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogCard
