import { Hero } from "@/components/sections/Hero"
import { Overview } from "@/components/sections/Overview"
import { Features } from "@/components/sections/Features"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <Features />
    </main>
  )
}

