import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p className={styles.copy}>
      &copy; {new Date().getFullYear()} Anibal Ledesma — Diseñado y desarrollado con React + TypeScript
    </p>
  </footer>
)

export default Footer
