import React, { useEffect, useState } from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import FadeIn from '../../ui/FadeIn/FadeIn'
import BlogCard from './BlogCard'
import type { BlogPost } from '../../../types'
import { useLang } from '../../../context/LangContext'
import styles from './Blog.module.scss'

const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Migrando de Webpack a Vite en un proyecto React legacy',
    description: 'Cómo migré un proyecto React 16 con Webpack 4 a Vite 5 + TypeScript sin romper nada en el proceso.',
    published_at: '2026-03-01T00:00:00Z',
    tag_list: ['React', 'Vite', 'TypeScript'],
    url: '#',
    cover_image: null,
    reading_time_minutes: 6,
    public_reactions_count: 42,
    slug: 'migrando-webpack-vite',
  },
  {
    id: 2,
    title: 'SCSS Modules vs CSS-in-JS: ¿cuál elegir en 2026?',
    description: 'Comparativa práctica entre SCSS Modules y las soluciones CSS-in-JS más populares para proyectos React modernos.',
    published_at: '2026-02-15T00:00:00Z',
    tag_list: ['CSS', 'SCSS', 'React'],
    url: '#',
    cover_image: null,
    reading_time_minutes: 8,
    public_reactions_count: 31,
    slug: 'scss-modules-vs-css-in-js',
  },
  {
    id: 3,
    title: 'Guía práctica de TypeScript para desarrolladores React',
    description: 'Los patrones de TypeScript que uso a diario: interfaces, generics, discriminated unions y utilidades de tipo.',
    published_at: '2026-01-20T00:00:00Z',
    tag_list: ['TypeScript', 'React', 'Tutorial'],
    url: '#',
    cover_image: null,
    reading_time_minutes: 10,
    public_reactions_count: 58,
    slug: 'typescript-react-guide',
  },
]

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const { t, lang } = useLang()

  useEffect(() => {
    // TODO: reemplazar con fetch real cuando tengas cuenta Dev.to
    // fetch('https://dev.to/api/articles?username=TU_USUARIO&per_page=6')
    //   .then(res => res.json())
    //   .then(data => setPosts(data))
    //   .finally(() => setLoading(false))
    const timer = setTimeout(() => {
      setPosts(MOCK_POSTS)
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="blog" className={styles.blog}>
      <FadeIn>
        <SectionTitle title={t.blog.title} subtitle={t.blog.subtitle} />
      </FadeIn>
      {loading ? (
        <div className={styles.loading} aria-live="polite">{t.blog.loading}</div>
      ) : (
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} lang={lang} minReadLabel={t.blog.minRead} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Blog
