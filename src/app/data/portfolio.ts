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
  {
    title: 'Boteco Brawl',

    subtitle:
      'Smash Bros Clone: A bar-fight mayhem game leveraging subtle and complex features of modern fighting and platform games',

    accessLinks: {
      [AccessType.GitHub]: 'https://github.com/guiMendel/boteco-brawl',
      [AccessType.YouTube]: 'https://youtu.be/u3-lYJqdrVY',
    },

    techStack: [AvailableTech.Cpp, AvailableTech.Sdl],

    features: [
      {
        keyword: 'In a Nutshell',
        label:
          'Pick a typical brazilian bar dish as your fighter and battle your way to the top of the food-chain on top of bar tables, hookas and bbq grillers',
      },
      {
        keyword: '6 Attacks + 2 Special Moves',
        label:
          'Charge up your directed attacks for extra kick & damage, and time your special moves to catch your opponent off-guard',
      },
      {
        keyword: 'HTML Flexbox, Recreated',
        label:
          'The UI module is a recreation of the Flexbox, HTML DOM and style inheritance features from HTML, making UI construction a breeze',
      },
      {
        keyword: 'Intricate Game Features',
        label:
          'Particle effects, smooth auto camera controls, coyote jumping, dash i-frames and many more subtle features to explore',
      },
    ],
  },
]

export default portfolio
