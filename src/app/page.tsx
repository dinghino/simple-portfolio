import { Hero, Projects, Skills, Contact } from '@/components/sections'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
