// ─── Skill ────────────────────────────────────────────────────────────────────
export interface SkillItem {
  name: string
  icon: string    // URL completa del icono
}
export interface SkillCategory {
  category: string
  items: SkillItem[]
}

// ─── Service ──────────────────────────────────────────────────────────────────
export interface Service {
  id: number
  iconName: string   // nombre del SVG en src/assets/icons/
  title: string
  description: string
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string
  logoUrl?: string
}

// ─── Project ──────────────────────────────────────────────────────────────────
export interface Project {
  id: number
  title: string
  description: string
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
