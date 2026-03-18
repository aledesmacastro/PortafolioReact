// ─── i18n ─────────────────────────────────────────────────────────────────────
export type Lang = 'es' | 'en'
export type Theme = 'dark' | 'high-contrast'
export interface LocalizedString { es: string; en: string }

// ─── Skill ────────────────────────────────────────────────────────────────────
export interface SkillItem {
  name: string
  icon: string    // URL completa del icono
}
export interface SkillCategory {
  category: LocalizedString
  items: SkillItem[]
}

// ─── Service ──────────────────────────────────────────────────────────────────
export interface Service {
  id: number
  iconName: string   // nombre del SVG en src/assets/icons/
  title: LocalizedString
  description: LocalizedString
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface Experience {
  id: number
  company: string
  role: LocalizedString
  period: string
  description: LocalizedString
  logoUrl?: string
}

// ─── Project ──────────────────────────────────────────────────────────────────
export interface Project {
  id: number
  title: LocalizedString
  description: LocalizedString
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  image?: string
}

// ─── Blog (Dev.to API) ────────────────────────────────────────────────────────
export interface BlogPost {
  id: number
  title: string
  description: string
  published_at: string
  tag_list: string[]
  url: string
  cover_image: string | null
  reading_time_minutes: number
  public_reactions_count: number
  slug: string
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
}
