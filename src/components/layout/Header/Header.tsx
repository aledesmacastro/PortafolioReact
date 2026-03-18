import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollSpy } from '../../../hooks/useScrollSpy'
import type { NavItem } from '../../../types'
import styles from './Header.module.scss'

const NAV_ITEMS: NavItem[] = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact',    href: '#contact' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1))

const Header: React.FC = () => {
  const activeId = useScrollSpy(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ boxShadow: scrolled ? 'var(--shadow-md)' : 'none' }}
    >
      <div className={styles.logo}>
        <a href="#hero" aria-label="Ir al inicio">
          <span className={styles.logoText}>AL</span>
        </a>
      </div>
      <nav className={styles.nav} aria-label="Navegación principal">
        <ul className={styles.navList}>
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = activeId === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.navLink}${isActive ? ` ${styles.navLinkActive}` : ''}`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header
