"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { motion } from "framer-motion"
import { Flame, Cloud, Snowflake, Brain, ArrowDown, Database } from "lucide-react"

export function MemoryTiers() {
  const tiers = [
    {
      icon: Flame,
      name: "Hot Memory",
      speed: "< 1ms",
      capacity: "~100 interactions",
      color: "var(--error-red)",
      description: "Immediate context for current conversation",
      retention: "Active session",
      tech: "In-Memory Cache",
    },
    {
      icon: Cloud,
      name: "Warm Memory",
      speed: "< 10ms",
      capacity: "~1000 interactions",
      color: "var(--warm-amber)",
      description: "Recent context and frequently accessed information",
      retention: "Hours to days",
      tech: "Redis / Fast Storage",
    },
    {
      icon: Snowflake,
      name: "Cold Memory",
      speed: "< 100ms",
      capacity: "~10000 interactions",
      color: "var(--cyber-teal)",
      description: "Historical context and archived conversations",
      retention: "Weeks to months",
      tech: "PostgreSQL / Vector DB",
    },
    {
      icon: Brain,
      name: "Long-Term Memory",
      speed: "< 1s",
      capacity: "Unlimited",
      color: "var(--electric-violet)",
      description: "Semantic understanding and learned preferences",
      retention: "Permanent",
      tech: "Vector Database + RAG",
    },
  ]

  return (
    <section id="memory" className="py-24 bg-[var(--midnight-slate)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 neural-mesh opacity-20" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[var(--warm-amber)] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="label text-[var(--warm-amber)]">
              MEMORY ARCHITECTURE
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
              Intelligent <span className="gradient-text">Memory Tiers</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg text-[var(--text-secondary)]">
              AYRA employs a sophisticated tiered memory system, balancing speed and capacity 
              to provide context-aware responses while maintaining excellent performance.
            </p>
          </FadeIn>
        </div>

        {/* Memory Pyramid */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {tiers.map((tier, index) => {
              const width = 100 - (index * 15) // Decrease width for each tier
              const delay = 0.3 + index * 0.15

              return (
                <div key={tier.name} className="relative">
                  <FadeIn delay={delay}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay }}
                      whileHover={{ scale: 1.02 }}
                      className="mb-6"
                    >
                      <div
                        className="glass rounded-[var(--radius-lg)] p-6 md:p-8 border-2 transition-all duration-300 mx-auto"
                        style={{
                          width: `${width}%`,
                          borderColor: `${tier.color}40`,
                          boxShadow: `0 0 30px ${tier.color}20`,
                        }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                          {/* Icon */}
                          <div className="md:col-span-2">
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.5,
                              }}
                              className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center mx-auto"
                              style={{
                                backgroundColor: `${tier.color}20`,
                              }}
                            >
                              <tier.icon
                                className="w-7 h-7"
                                style={{ color: tier.color }}
                              />
                            </motion.div>
                          </div>

                          {/* Content */}
                          <div className="md:col-span-7">
                            <h3
                              className="text-xl font-semibold mb-2"
                              style={{ color: tier.color }}
                            >
                              {tier.name}
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-3">
                              {tier.description}
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs">
                              <span
                                className="px-2 py-1 rounded-full font-medium"
                                style={{
                                  backgroundColor: `${tier.color}15`,
                                  color: tier.color,
                                }}
                              >
                                {tier.tech}
                              </span>
                              <span className="px-2 py-1 rounded-full bg-[var(--midnight-slate)] text-[var(--text-tertiary)]">
                                {tier.retention}
                              </span>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="md:col-span-3 text-center md:text-right">
                            <div className="space-y-2">
                              <div>
                                <div className="label text-[var(--text-tertiary)] mb-1">
                                  SPEED
                                </div>
                                <div
                                  className="font-bold text-lg"
                                  style={{ color: tier.color }}
                                >
                                  {tier.speed}
                                </div>
                              </div>
                              <div>
                                <div className="label text-[var(--text-tertiary)] mb-1">
                                  CAPACITY
                                </div>
                                <div className="font-semibold text-sm text-[var(--text-secondary)]">
                                  {tier.capacity}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </FadeIn>

                  {/* Arrow between tiers */}
                  {index < tiers.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: delay + 0.2 }}
                      className="flex justify-center my-2"
                    >
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        <ArrowDown
                          className="w-5 h-5"
                          style={{
                            color: `${tier.color}`,
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Info Box */}
          <FadeIn delay={1.2}>
            <div className="mt-12 glass rounded-[var(--radius-lg)] p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Database className="w-5 h-5 text-[var(--neural-blue)]" />
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Automatic Tier Management
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
                AYRA automatically manages data flow between tiers based on access patterns, 
                ensuring frequently used information stays hot while archiving older context 
                efficiently. This intelligent system provides instant recall while respecting 
                your privacy—all data stays local on your device.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
