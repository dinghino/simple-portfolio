import { Project } from '@/types/project'

/**
 * Record of GitHub repositories to fetch dynamically, with optional overrides
 * Example: { 'username/repo1': { title: 'Custom Title' } }
 */
export const githubRepositories: Record<string, Partial<Project>> = {
  'dinghino/budgeting-app': {
    title: 'Budgeting App',
    description:
    'A work in progress personal budgeting application that helps users track their finances, tasks and more.',
    technologies: ['turborepo', 'Next.js', 'fastify', 'PostgreSQL'],
  },
  'dinghino/simple-portfolio':{
    title: 'Personal website',
    description: 'The source of this very own website',
    technologies: ['Next.js', 'gsap', 'Tailwind', 'shadcn/ui', 'Copilot'],

  },
  'dinghino/tictoc': {
    description: 'A simple C++ timer library to handle timeouts and intervals for IoT development.',
  },
  'dinghino/stocks-historical-data': {
    title: 'stonks-o-fetcher',
    description:
      'Modular and extensible tool to fetch stocks historical data, FTD and more from various sources.',
    
  },
  'dinghino/logica-international': {
    visitLabel: 'Visit',
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
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
  },
  {
    id: '3',
    title: 'Task Management App',
    description:
      'A task management application with drag-and-drop functionality and team collaboration features.',
    technologies: ['React', 'Redux', 'Firebase'],
    featured: true,
    primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current weather and forecasts for multiple locations.',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    featured: false,
    primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A blog platform with markdown support, categories, and user comments.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    featured: false,
    primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
  },
  {
    id: '6',
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with private messaging and channels.',
    technologies: ['Socket.io', 'Express', 'MongoDB'],
    featured: true,
    primaryLanguage: { name: 'JavaScript', color: '#f1e05a' },
  },
]
