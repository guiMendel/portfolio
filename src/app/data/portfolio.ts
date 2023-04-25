import {
  AccessType,
  AvailableTech,
  PortfolioEntry,
} from '../types/Portfolio.interface'

const portfolio: PortfolioEntry[] = [
  {
    title: 'Cabber',

    subtitle: 'A real-time simulation of a customizable taxi app',

    accessLinks: {
      [AccessType.GitHub]: 'https://github.com/guiMendel/uber-4',
      [AccessType.Deployment]: 'https://uber-4-seven.vercel.app/',
      [AccessType.YouTube]: 'https://youtu.be/dQw4w9WgXcQ',
    },

    techStack: [
      AvailableTech.React,
      AvailableTech.Canvas,
      AvailableTech.Vercel,
      AvailableTech.JavaScript,
      AvailableTech.Html,
    ],

    features: [
      {
        keyword: 'In a Nutshell',
        label:
          'Create maps, cars and clients, assign routes for their destinations, customize your experience, hit play and watch it all unfold in real-time',
      },
      {
        keyword: 'Advanced Map Generation',
        label:
          'Fine tune map generation parameters to create realistic-looking maps to simulate with',
      },
      {
        keyword: 'Live Editing of Clients, Cars & Streets',
        label:
          'Add, remove and edit clients, cars and streets and watch they interact in real-time',
      },
      {
        keyword: 'Route Generation & Visualization',
        label:
          "Pick and visualize clients' routes on the go. You decide whether to optimize the route or pick a specific car!",
      },
      {
        keyword: 'Customization',
        label:
          "Customize the app's theme by picking different color and layout schemes",
      },
    ],
  },
]

export default portfolio
