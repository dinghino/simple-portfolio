import { Project } from "@/types/project";

/**
 * Static project data
 * This can be enhanced with dynamic data from GitHub API
 */
export const projectData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubRepo: "username/ecommerce-platform",
    demoUrl: "https://example-ecommerce.com",
    featured: true,
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubRepo: "username/portfolio",
    demoUrl: "https://portfolio-example.com",
    featured: true,
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality and team collaboration features.",
    technologies: ["React", "Redux", "Firebase"],
    githubRepo: "username/task-manager",
    demoUrl: "https://task-app-example.com",
    featured: true,
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    githubRepo: "username/weather-dashboard",
    demoUrl: "https://weather-example.com",
    featured: false,
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "A blog platform with markdown support, categories, and user comments.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    githubRepo: "username/blog-platform",
    demoUrl: "https://blog-example.com",
    featured: false,
  },
  {
    id: "6",
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging and channels.",
    technologies: ["Socket.io", "Express", "MongoDB"],
    githubRepo: "username/chat-app",
    demoUrl: "https://chat-example.com",
    featured: true,
  },
];