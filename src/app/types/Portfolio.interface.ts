import { IconProp } from '@fortawesome/fontawesome-svg-core'

// === ACCESS LINK TYPE

export const enum AccessType {
  GitHub,
  Deployment,
  YouTube,
}

export const accessTypeMedia: {
  [key in AccessType]: { icon: IconProp; help: string }
} = {
  [AccessType.GitHub]: { icon: ['fab', 'github'], help: 'Go to GitHub page' },
  [AccessType.Deployment]: {
    icon: ['fas', 'location-arrow'],
    help: 'Go to deployment',
  },
  [AccessType.YouTube]: {
    icon: ['fab', 'youtube'],
    help: 'Watch recorded tour',
  },
}

// === TECH STACK TYPE

export const enum AvailableTech {
  React = 'React',
  JavaScript = 'JavaScript',
  Html = 'HTML/CSS',
  Canvas = 'Canvas',
  Vercel = 'Vercel',
}

type TechIcon = {
  fontAwesome?: IconProp
  local?: Promise<string>
}

// === LOCAL ICONS

async function fetchLocalIcon(name: string) {
  return fetch(`./assets/icons/${name}.svg`).then((response) => response.text())
}

export const techMap: { [key in AvailableTech]: TechIcon } = {
  [AvailableTech.React]: { fontAwesome: ['fab', 'react'] },
  [AvailableTech.JavaScript]: { fontAwesome: ['fab', 'square-js'] },
  [AvailableTech.Html]: { fontAwesome: ['fab', 'html5'] },
  [AvailableTech.Canvas]: { local: fetchLocalIcon('canvas') },
  [AvailableTech.Vercel]: { local: fetchLocalIcon('vercel') },
}

export interface PortfolioEntry {
  title: string
  subtitle: string

  accessLinks: { [key in AccessType]: string }

  techStack: Array<AvailableTech>

  features: Array<{ label: string; keyword: string; media?: string }>
}
