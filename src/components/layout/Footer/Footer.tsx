import React from 'react'
import { useLang } from '../../../context/LangContext'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  const { t } = useLang()

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Anibal Ledesma — {t.footer.copy}
      </p>
    </footer>
  )
}

export default Footer
