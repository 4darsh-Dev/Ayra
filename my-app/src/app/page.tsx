import { Hero } from "@/components/sections/Hero"
import { Overview } from "@/components/sections/Overview"
import { Features } from "@/components/sections/Features"
import { Architecture } from "@/components/sections/Architecture"
import { Agents } from "@/components/sections/Agents"
import { MemoryTiers } from "@/components/sections/MemoryTiers"
import { Privacy } from "@/components/sections/Privacy"
import { EmotionalIntelligence } from "@/components/sections/EmotionalIntelligence"
import { TechStack } from "@/components/sections/TechStack"
import { Roadmap } from "@/components/sections/Roadmap"
import { CTA } from "@/components/sections/CTA"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Features />
      <Architecture />
      <Agents />
      <MemoryTiers />
      <Privacy />
      <EmotionalIntelligence />
      <TechStack />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  )
}

