"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchGitHubRepos } from "@/github/api";
import { Project } from "@/types/project";
import { projectData } from "@/data/projects";

/**
 * Projects section showcasing featured work
 */
export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        // First load static project data
        setProjects(projectData);
        
        // Then try to fetch dynamic GitHub data if token is available
        if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
          const githubProjects = await fetchGitHubRepos();
          // Merge GitHub data with existing project data
          setProjects(prev => 
            prev.map(project => {
              const githubProject = githubProjects.find(
                repo => repo.name === project.githubRepo
              );
              if (githubProject) {
                return {
                  ...project,
                  description: githubProject.description || project.description,
                  stars: githubProject.stars,
                  lastUpdated: githubProject.updatedAt,
                };
              }
              return project;
            })
          );
        }
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <h2 className="text-3xl font-mono font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work, personal projects, and experiments.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="h-16 bg-muted" />
                <CardContent className="h-24 mt-4 bg-muted" />
                <CardFooter className="h-12 mt-4 bg-muted" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="border-0 bg-muted/50 transition-all duration-300 hover:bg-muted">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-background rounded-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1"
                    asChild
                  >
                    <a
                      href={`https://github.com/${project.githubRepo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only sm:not-sr-only sm:ml-1">
                        GitHub
                      </span>
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Demo</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}