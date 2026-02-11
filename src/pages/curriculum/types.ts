export type Social = {
  email: string
  phone: string
  linkedin: string
  github: string
  site: string
  local: string
}

export type Language = {
  title: String
  description: string
}
export type Languagens = Array<Language>

export type Experience = {
  title: string
  subtitle: string
  date: string
  bullets: string[]
}
export type Experiences = Array<Experience>

export type Skill = {
  title: string
  itens: string[]
}
export type Skills = Array<Skill>

export type Education = {
  title: String
  subtitle: string
  date: string
}
export type Educations = Array<Education>