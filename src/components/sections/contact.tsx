"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

/**
 * Form schema for contact form validation
 */
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

/**
 * Contact section with form
 */
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <h2 className="text-3xl font-mono font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Have a question or want to work together? Send me a message and I'll
            get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          type="email" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-mono font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="font-mono text-muted-foreground">Email:</span>
                  <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                    contact@example.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-mono text-muted-foreground">Location:</span>
                  <span>San Francisco, CA</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-mono font-bold mb-4">Connect</h3>
              <p className="text-muted-foreground mb-4">
                Follow me on social media or check out my work on GitHub.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}