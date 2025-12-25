"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, FileText, Star, GitFork } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section id="cta" className="py-24 bg-[var(--deep-space)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 radial-spotlight" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--neural-blue)] rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-[var(--radius-2xl)] p-12 md:p-16 border-2 relative overflow-hidden"
              style={{
                borderColor: "var(--neural-blue)40",
                boxShadow: "0 0 60px var(--neural-blue)20",
              }}
            >
              {/* Animated border glow */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-50"
                style={{
                  background: `conic-gradient(from 0deg, transparent, var(--neural-blue)40, transparent)`,
                }}
              />

              <div className="relative z-10 text-center">
                {/* Header */}
                <FadeIn delay={0.1}>
                  <span className="label text-[var(--neural-blue)]">
                    GET STARTED
                  </span>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="display-lg gradient-text mb-6 mt-4 font-[family-name:var(--font-sora)]">
                    Join the AYRA Journey
                  </h2>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <p className="body-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
                    AYRA is open-source and under active development. Star the repository, 
                    contribute code, or dive into the documentation to get started.
                  </p>
                </FadeIn>

                {/* CTA Buttons */}
                <FadeIn delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link href="https://github.com/4darsh-Dev/Ayra" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="xl" className="gap-2 min-w-[240px]">
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </Button>
                    </Link>
                    <Link href="https://github.com/4darsh-Dev/Ayra/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="xl" className="gap-2 min-w-[240px]">
                        <FileText className="w-5 h-5" />
                        Read Documentation
                      </Button>
                    </Link>
                  </div>
                </FadeIn>

                {/* GitHub Stats */}
                <FadeIn delay={0.5}>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{
                        backgroundColor: "var(--neural-blue)15",
                        border: "1px solid var(--neural-blue)30",
                      }}
                    >
                      <Star className="w-4 h-4 text-[var(--neural-blue)]" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        Star on GitHub
                      </span>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{
                        backgroundColor: "var(--electric-violet)15",
                        border: "1px solid var(--electric-violet)30",
                      }}
                    >
                      <GitFork className="w-4 h-4 text-[var(--electric-violet)]" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        Fork & Contribute
                      </span>
                    </motion.div>
                  </div>
                </FadeIn>

                {/* Additional Info */}
                <FadeIn delay={0.6}>
                  <div className="mt-12 pt-8 border-t border-[var(--glass-border)]">
                    <p className="text-sm text-[var(--text-tertiary)]">
                      Built with ❤️ by Adarsh Maurya • 
                      Licensed under MIT • Privacy-first, Always
                    </p>
                  </div>
                </FadeIn>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
