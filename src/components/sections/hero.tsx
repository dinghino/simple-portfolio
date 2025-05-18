"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const headingVariants = cva(
  "font-mono font-bold tracking-tight leading-none transition-opacity duration-500",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        small: "text-3xl md:text-4xl lg:text-5xl",
      },
      visible: {
        true: "opacity-100",
        false: "opacity-0",
      },
    },
    defaultVariants: {
      size: "default",
      visible: false,
    },
  }
);

const paragraphVariants = cva(
  "my-4 text-muted-foreground max-w-2xl transition-opacity duration-500 delay-200",
  {
    variants: {
      visible: {
        true: "opacity-100",
        false: "opacity-0",
      },
    },
    defaultVariants: {
      visible: false,
    },
  }
);

/**
 * Hero section with animated entrance
 */
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <p className={cn(
            paragraphVariants({ visible: isVisible }),
            "text-sm md:text-base font-mono text-primary mb-2 order-first"
          )}>
            Hello, I'm a
          </p>
          <h1 className={cn(headingVariants({ visible: isVisible }))}>
            Developer & Designer
          </h1>
          <h2 className={cn(
            headingVariants({ size: "small", visible: isVisible }),
            "text-muted-foreground mt-2"
          )}>
            Crafting digital experiences
          </h2>
          <p className={cn(paragraphVariants({ visible: isVisible }))}>
            I specialize in building modern, responsive websites and applications
            with a focus on clean design, performance, and accessibility.
          </p>
          <div className={cn(
            "flex gap-4 mt-4 transition-opacity duration-500 delay-400",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <Button href="#projects" className="group">
              View projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#contact" variant="outline">
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}