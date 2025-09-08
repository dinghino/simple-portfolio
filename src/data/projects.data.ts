import { Project } from '@/types/project'

/**
 * Record of GitHub repositories to fetch dynamically, with optional overrides
 * Example: { 'username/repo1': { title: 'Custom Title' } }
 */
export const githubRepositories: Record<string, Partial<Project>> = {
  'dinghino/simple-portfolio': {
    title: 'Personal website',
    description: 'The source of this very own website',
    technologies: ['Next.js', 'gsap', 'Tailwind', 'shadcn/ui', 'Copilot'],
    group: 'personal',
  },
  'dinghino/wall-clock': {
    group: 'personal'
  },
  'dinghino/budgeting-app': {
    title: 'Budgeting App',
    description:
      'A work in progress personal budgeting application that helps users track their finances, tasks and more.',
    technologies: ['turborepo', 'Next.js', 'fastify', 'PostgreSQL'],
    group: 'personal',
  },
  'dinghino/tictoc': {
    description: 'A simple C++ timer library to handle timeouts and intervals for IoT development.',
    group: 'oss',
  },
  'dinghino/stocks-historical-data': {
    title: 'stonks-o-fetcher',
    description:
      'Modular and extensible tool to fetch stocks historical data, FTD and more from various sources.',
    group: 'oss',
  },
  'dinghino/quickship-logistics': {
    title: 'Quickship Logistics',
    description:
      'Load board application for self managed delivery job listings, dispatching and more, based in NYC',
    visitLabel: 'Visit',
    group: 'work',
    homepage: 'https://goquickship.com',
  },
  'dinghino/logica-international': {
    title: 'Logìca International',
    description:
      'Logìca is an import-export company based in the US and South America, specializing in produces and food.',
    visitLabel: 'Visit',
    group: 'work',
  },
  'dinghino/ojedis-logistics': {
    visitLabel: 'Visit',
    title: 'Ojedis Logistics',
    description:
      'Website for Ojedis logistics company, a logistics and transportation company based in NYC.',
    group: 'work',
  },
  // temporarily down for business reasons, domain is unsecured
  // 'dinghino/tenfe-cafe': {
  //   title: 'PayloadCMS website',
  //   description:
  //     'Website for tenfe cafe built with PayloadCMS. Used as a base and demo to customize Payload.',
  //   technologies: ['Next.js', 'PayloadCMS', 'Tailwind'],
  //   visitLabel: 'Visit',
  //   group: 'work',
  // },
  'dinghino/hhhq-forms': {
    title: 'H3Q Website',
    homepage: 'https://h3q.io',
    description: 'Landing page and contact funnel for H3Q inc. My parent company.',
    technologies: ['Next.js', 'mantine', 'framer-motion'],
    group: 'work',
  },
  'dinghino/hhhq-spaceship': {
    title: 'Spaceship simulator',
    description: 'Prototype for a metaversespaceship simulator for H3Q inc.',
    technologies: ['Next.js', 'three.js', 'mantine', 'xstate'],
    group: 'work',
  },
  'dinghino/xstate-game-state': {
    title: 'Game State machine',
    description: 'A simple game state machine using xstate',
    technologies: ['xstate', 'React', 'TypeScript'],
    group: 'oss',
  },
  'dinghino/homarr': {
    group: 'oss',
  },
}

/**
 * Static project data
 * This can be enhanced with dynamic data from GitHub API
 */
export const projectData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with user authentication, product management, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true,
    primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
    group: 'work',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
    group: 'personal',
  },
  {
    id: '3',
    title: 'Task Management App',
    description:
      'A task management application with drag-and-drop functionality and team collaboration features.',
    technologies: ['React', 'Redux', 'Firebase'],
    featured: true,
    primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
    group: 'work',
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current weather and forecasts for multiple locations.',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    featured: false,
    primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
    group: 'experiments',
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A blog platform with markdown support, categories, and user comments.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    featured: false,
    primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
    group: 'personal',
  },
  {
    id: '6',
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with private messaging and channels.',
    technologies: ['Socket.io', 'Express', 'MongoDB'],
    featured: true,
    primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
    group: 'oss',
  },
]
