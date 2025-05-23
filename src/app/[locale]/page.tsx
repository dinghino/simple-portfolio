import { Hero, About, Skills, Projects, Contact } from '@/components/blocks'

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
