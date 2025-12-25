"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { motion } from "framer-motion"
import { CheckCircle2, Clock, Calendar } from "lucide-react"

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      icon: CheckCircle2,
      color: "var(--success-green)",
      quarter: "Q4 2024",
      milestones: [
        "Core architecture design",
        "Agent framework setup",
        "Memory system prototype",
        "Privacy infrastructure",
      ],
    },
    {
      phase: "Phase 2",
      title: "Intelligence Layer",
      status: "in-progress",
      icon: Clock,
      color: "var(--warm-amber)",
      quarter: "Q1 2025",
      milestones: [
        "Multi-agent orchestration",
        "Emotional intelligence module",
        "Voice interface integration",
        "RAG implementation",
      ],
    },
    {
      phase: "Phase 3",
      title: "User Experience",
      status: "planned",
      icon: Calendar,
      color: "var(--neural-blue)",
      quarter: "Q2 2025",
      milestones: [
        "Desktop application",
        "Mobile companion app",
        "Cross-platform sync",
        "Plugin ecosystem",
      ],
    },
    {
      phase: "Phase 4",
      title: "Advanced Features",
      status: "planned",
      icon: Calendar,
      color: "var(--electric-violet)",
      quarter: "Q3 2025",
      milestones: [
        "Proactive assistance",
        "Multi-modal interactions",
        "Advanced personalization",
        "Community features",
      ],
    },
  ]

  const statusConfig = {
    completed: { label: "Completed", bgColor: "var(--success-green)" },
    "in-progress": { label: "In Progress", bgColor: "var(--warm-amber)" },
    planned: { label: "Planned", bgColor: "var(--neural-blue)" },
  }

  return (
    <section id="roadmap" className="py-24 bg-[var(--midnight-slate)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 neural-mesh opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--electric-violet)] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="label text-[var(--electric-violet)]">
              DEVELOPMENT ROADMAP
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
              The Journey <span className="gradient-text">Ahead</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg text-[var(--text-secondary)]">
              Our roadmap to building the most advanced private AI companion. 
              Open-source, community-driven, and privacy-focused.
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {phases.map((phase, index) => {
              const status = statusConfig[phase.status as keyof typeof statusConfig]
              
              return (
                <FadeIn key={phase.phase} delay={0.3 + index * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-6">
                      {/* Timeline Icon */}
                      <div className="flex-shrink-0 relative">
                        <motion.div
                          animate={
                            phase.status === "in-progress"
                              ? {
                                  scale: [1, 1.2, 1],
                                  rotate: [0, 180, 360],
                                }
                              : {}
                          }
                          transition={{
                            duration: 3,
                            repeat: phase.status === "in-progress" ? Infinity : 0,
                          }}
                          className="w-16 h-16 rounded-full flex items-center justify-center border-4"
                          style={{
                            backgroundColor: `${phase.color}20`,
                            borderColor: phase.color,
                          }}
                        >
                          <phase.icon
                            className="w-7 h-7"
                            style={{ color: phase.color }}
                          />
                        </motion.div>

                        {/* Connecting line */}
                        {index < phases.length - 1 && (
                          <div
                            className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8"
                            style={{
                              backgroundColor: `${phase.color}40`,
                            }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 glass rounded-[var(--radius-lg)] p-6 border-2"
                        style={{
                          borderColor: `${phase.color}30`,
                        }}
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                                {phase.phase}: {phase.title}
                              </h3>
                              <span
                                className="px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                  backgroundColor: `${status.bgColor}20`,
                                  color: status.bgColor,
                                  border: `1px solid ${status.bgColor}40`,
                                }}
                              >
                                {status.label}
                              </span>
                            </div>
                            <div className="text-sm text-[var(--text-tertiary)]">
                              {phase.quarter}
                            </div>
                          </div>
                        </div>

                        {/* Milestones */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {phase.milestones.map((milestone, idx) => (
                            <motion.div
                              key={milestone}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                              className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                style={{ backgroundColor: phase.color }}
                              />
                              <span>{milestone}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <FadeIn delay={1}>
          <div className="mt-16 text-center glass rounded-[var(--radius-lg)] p-6 max-w-2xl mx-auto">
            <p className="text-sm text-[var(--text-secondary)]">
              Want to contribute? AYRA is open-source and welcomes community contributions.
              Check out our GitHub repository to get involved!
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
