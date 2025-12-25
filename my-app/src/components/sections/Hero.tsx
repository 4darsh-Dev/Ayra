"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/FadeIn"
import { ParticleBackground } from "@/components/animations/ParticleBackground"
import { ChevronDown, Lock, Brain, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("overview")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-space)] via-[var(--midnight-slate)] to-[var(--deep-space)]" />
      
      {/* Neural mesh pattern */}
      <div className="absolute inset-0 neural-mesh opacity-40" />
      
      {/* Radial spotlight */}
      <div className="absolute inset-0 radial-spotlight" />
      
      {/* Particle background */}
      <ParticleBackground />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <FadeIn delay={0.2}>
          <div className="inline-block">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <span className="label text-[var(--cyber-teal)] bg-[var(--midnight-slate)] px-4 py-2 rounded-full border border-[var(--glass-border)]">
                PRIVATE AI COMPANION
              </span>
            </motion.div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="display-xl gradient-text mb-6 font-[family-name:var(--font-sora)]">
            AYRA
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="body-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Your Private AI Companion
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <p className="body-lg text-[var(--text-tertiary)] max-w-3xl mx-auto mb-12">
            Not a chatbot. A companion. Experience private, emotionally-aware AI that respects your privacy while providing intelligent, proactive assistance.
          </p>
        </FadeIn>

        <FadeIn delay={0.9}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Learn More
            </Button>
          </div>
        </FadeIn>

        {/* Glass morphism feature cards */}
        <FadeIn delay={1.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Lock, title: "Private First", desc: "Your data stays yours", color: "var(--success-green)" },
              { icon: Brain, title: "Emotionally Aware", desc: "Understands context", color: "var(--neural-blue)" },
              { icon: Zap, title: "Proactive Intelligence", desc: "Anticipates needs", color: "var(--electric-violet)" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                className="glass rounded-[var(--radius-lg)] p-6 text-left hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                <div 
                  className="mb-3 p-2 rounded-lg inline-block"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon 
                    className="w-6 h-6" 
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1.5}>
          <motion.button
            onClick={scrollToNext}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </FadeIn>
      </div>
    </section>
  )
}
