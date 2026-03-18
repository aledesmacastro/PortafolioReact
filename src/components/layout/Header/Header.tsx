import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollSpy } from '../../../hooks/useScrollSpy'
import { useLang } from '../../../context/LangContext'
import HeaderControls from '../../ui/HeaderControls/HeaderControls'
import type { NavItem } from '../../../types'
import styles from './Header.module.scss'

const NAV_HREFS = ['#about', '#services', '#skills', '#experience', '#projects', '#blog', '#contact']
const SECTION_IDS = NAV_HREFS.map((h) => h.slice(1))

const Header: React.FC = () => {
  const activeId = useScrollSpy(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems: NavItem[] = [
    { label: t.nav.about,      href: '#about' },
    { label: t.nav.services,   href: '#services' },
    { label: t.nav.skills,     href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects,   href: '#projects' },
    { label: t.nav.blog,       href: '#blog' },
    { label: t.nav.contact,    href: '#contact' },
  ]

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
      <div className={styles.headerRight}>
        <HeaderControls />
        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navItems.map(({ label, href }) => {
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
      </div>
    </motion.header>
  )
}

export default Header
