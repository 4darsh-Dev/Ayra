"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { motion } from "framer-motion"
import { Layers, Server, Bot, Database, Sparkles } from "lucide-react"

export function Architecture() {
  const layers = [
    {
      icon: Sparkles,
      name: "Frontend",
      color: "var(--cyber-teal)",
      description: "React-based UI with voice & text interfaces",
      tech: ["React", "Voice APIs", "WebSockets"],
      position: "top",
    },
    {
      icon: Server,
      name: "Backend Core",
      color: "var(--neural-blue)",
      description: "FastAPI orchestration layer",
      tech: ["FastAPI", "Task Queue", "Event Bus"],
      position: "middle-top",
    },
    {
      icon: Bot,
      name: "Agent Layer",
      color: "var(--electric-violet)",
      description: "Multi-agent system with specialized roles",
      tech: ["Planning", "Execution", "Emotional", "Reflection"],
      position: "middle-bottom",
    },
    {
      icon: Database,
      name: "Memory System",
      color: "var(--warm-amber)",
      description: "Tiered memory architecture",
      tech: ["Hot Cache", "Warm Store", "Vector DB", "Long-term"],
      position: "bottom",
    },
  ]

  return (
    <section id="architecture" className="py-24 bg-[var(--midnight-slate)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 neural-mesh opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--neural-blue)] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="label text-[var(--neural-blue)]">
              SYSTEM DESIGN
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
              Layered <span className="gradient-text">Architecture</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg text-[var(--text-secondary)]">
              AYRA is built on a sophisticated four-layer architecture, each optimized for 
              specific aspects of intelligent interaction and memory management.
            </p>
          </FadeIn>
        </div>

        {/* Architecture Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <FadeIn key={layer.name} delay={0.3 + index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div
                    className="glass rounded-[var(--radius-xl)] p-8 border-2 transition-all duration-300"
                    style={{
                      borderColor: `${layer.color}40`,
                      boxShadow: `0 0 40px ${layer.color}20`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-16 h-16 rounded-[var(--radius-md)] flex items-center justify-center"
                        style={{
                          backgroundColor: `${layer.color}20`,
                        }}
                      >
                        <layer.icon
                          className="w-8 h-8"
                          style={{ color: layer.color }}
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className="text-2xl font-semibold mb-2"
                          style={{ color: layer.color }}
                        >
                          {layer.name}
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-4">
                          {layer.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {layer.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: `${layer.color}15`,
                                color: layer.color,
                                border: `1px solid ${layer.color}30`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Layer Indicator */}
                      <div className="flex-shrink-0">
                        <div className="text-right">
                          <div className="label" style={{ color: layer.color }}>
                            LAYER {index + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < layers.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="absolute left-1/2 -translate-x-1/2 w-0.5 h-6 origin-top"
                      style={{
                        background: `linear-gradient(to bottom, ${layer.color}, ${layers[index + 1].color})`,
                      }}
                    />
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Data Flow Indicator */}
          <FadeIn delay={1}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-[var(--neural-blue)]"
                />
                <span className="text-sm text-[var(--text-secondary)]">
                  Data flows seamlessly between layers
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-2 h-2 rounded-full bg-[var(--electric-violet)]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
