"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillsData } from "@/data/skills";
import { SkillCategory } from "@/types/skill";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import SkillsGrid from "@/components/skills-grid";
import { SkillItem } from "@/components/skill-item";
import SectionTitle from "@/components/section-title";

const skillItemVariants = cva(
  "flex items-center px-4 py-2 border-0 bg-muted/40 hover:bg-muted/60 transition-colors duration-200",
  {
    variants: {
      proficiency: {
        beginner: "text-muted-foreground",
        intermediate: "text-foreground",
        advanced: "text-primary font-medium",
        expert: "text-primary font-bold",
      },
    },
    defaultVariants: {
      proficiency: "intermediate",
    },
  }
);

/**
 * Skills section with categorized abilities
 */
export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("frontend");

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <SectionTitle>Skills & Expertise</SectionTitle>
          <p className="text-muted-foreground max-w-2xl">
            Some of the technologies and tools I have experience with. I am always eager to learn
            and explore new technologies, so this list is constantly evolving.
          </p>
        </div>

        <Tabs
          defaultValue="frontend"
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as SkillCategory)}
          className="w-full"
        >
          <TabsList className="mb-8 font-mono bg-transparent border-b w-full justify-start rounded-none h-auto p-0">
            {Object.keys(skillsData).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none cursor-pointer"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <SkillsGrid
                skills={skills}
                renderSkill={(skill) => (
                  <div
                    className={cn(
                      skillItemVariants({ proficiency: skill.proficiency })
                    )}
                  >
                    <SkillItem
                      name={skill.name}
                      icon={
                        skill.icon && (
                          <skill.icon className="h-5 w-5 mr-2 shrink-0" />
                        )
                      }
                    />
                  </div>
                )}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
