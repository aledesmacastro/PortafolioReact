import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../../context/ThemeContext'
import { useLang } from '../../../context/LangContext'
import styles from './HeaderControls.module.scss'

const HeaderControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang } = useLang()

  const isHighContrast = theme === 'high-contrast'
  const isEN = lang === 'en'

  return (
    <div className={styles.controls}>
      {/* Contrast toggle */}
      <motion.button
        className={`${styles.btn} ${isHighContrast ? styles.btnActive : ''}`}
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isHighContrast ? 'Switch to dark theme' : 'Switch to high-contrast theme'}
        title={isHighContrast ? 'Dark mode' : 'High contrast'}
      >
        {/* Half-circle contrast icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 1 A7 7 0 0 1 8 15 Z" fill="currentColor" />
        </svg>
      </motion.button>

      {/* Language toggle */}
      <motion.button
        className={`${styles.btn} ${styles.btnLang} ${isEN ? styles.btnActive : ''}`}
        onClick={() => setLang(isEN ? 'es' : 'en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isEN ? 'Cambiar a Español' : 'Switch to English'}
        title={isEN ? 'Cambiar a Español' : 'Switch to English'}
      >
        {isEN ? 'EN' : 'ES'}
      </motion.button>
    </div>
  )
}

export default HeaderControls
