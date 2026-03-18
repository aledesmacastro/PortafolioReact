import React, { createContext, useContext, useState } from 'react'
import type { Lang } from '../types'
import { translations, type Translations } from '../i18n'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextValue | null>(null)

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang')
    return stored === 'en' ? 'en' : 'es'
  })

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('lang', next)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = (): LangContextValue => {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
