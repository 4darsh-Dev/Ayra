"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Server, Brain, Cloud } from "lucide-react"

export function TechStack() {
  const stacks = [
    {
      category: "Frontend",
      icon: Code,
      color: "var(--cyber-teal)",
      technologies: [
        { name: "Next.js 14", desc: "React framework with App Router" },
        { name: "TypeScript", desc: "Type-safe development" },
        { name: "Tailwind CSS", desc: "Utility-first styling" },
        { name: "Framer Motion", desc: "Smooth animations" },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      color: "var(--neural-blue)",
      technologies: [
        { name: "FastAPI", desc: "High-performance Python API" },
        { name: "PostgreSQL", desc: "Relational database" },
        { name: "Redis", desc: "In-memory caching" },
        { name: "WebSockets", desc: "Real-time communication" },
      ],
    },
    {
      category: "AI & ML",
      icon: Brain,
      color: "var(--electric-violet)",
      technologies: [
        { name: "LangChain", desc: "LLM orchestration framework" },
        { name: "Vector DB", desc: "Semantic search & RAG" },
        { name: "Whisper", desc: "Speech recognition" },
        { name: "Custom Agents", desc: "Multi-agent architecture" },
      ],
    },
    {
      category: "Infrastructure",
      icon: Cloud,
      color: "var(--warm-amber)",
      technologies: [
        { name: "Docker", desc: "Containerization" },
        { name: "Local-First", desc: "Privacy-focused deployment" },
        { name: "Git", desc: "Version control" },
        { name: "Open Source", desc: "Transparent & auditable" },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-24 bg-[var(--deep-space)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 neural-mesh opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="label text-[var(--cyber-teal)]">
              TECHNOLOGY
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
              Built with <span className="gradient-text">Modern Stack</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg text-[var(--text-secondary)]">
              AYRA leverages cutting-edge technologies to deliver a powerful, privacy-first AI companion experience.
            </p>
          </FadeIn>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {stacks.map((stack, index) => (
            <FadeIn key={stack.category} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-2 hover:border-opacity-40 transition-all duration-300"
                  style={{
                    borderColor: `${stack.color}30`,
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center"
                        style={{
                          backgroundColor: `${stack.color}20`,
                        }}
                      >
                        <stack.icon
                          className="w-6 h-6"
                          style={{ color: stack.color }}
                        />
                      </motion.div>
                      <CardTitle style={{ color: stack.color }}>
                        {stack.category}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {stack.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-start gap-3 p-3 rounded-[var(--radius-md)] transition-colors hover:bg-[var(--midnight-slate)]"
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-[var(--text-primary)] text-sm">
                              {tech.name}
                            </div>
                            <div className="text-xs text-[var(--text-tertiary)]">
                              {tech.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
