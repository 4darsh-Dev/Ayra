"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileCheck, UserCheck, Server } from "lucide-react"

export function Privacy() {
  const principles = [
    {
      icon: Lock,
      title: "Local-First Processing",
      description: "All AI processing happens on your device. Your data never leaves your control.",
      color: "var(--success-green)",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Full visibility into what data is collected, stored, and processed.",
      color: "var(--neural-blue)",
    },
    {
      icon: UserCheck,
      title: "User Control",
      description: "Granular controls to manage, export, or delete your data at any time.",
      color: "var(--cyber-teal)",
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data is encrypted at rest and in transit with industry-standard protocols.",
      color: "var(--electric-violet)",
    },
    {
      icon: FileCheck,
      title: "Audit Logging",
      description: "Complete audit trail of all agent actions and data access for accountability.",
      color: "var(--warm-amber)",
    },
    {
      icon: Server,
      title: "No Cloud Dependency",
      description: "Works entirely offline. No external servers, no third-party analytics.",
      color: "var(--info-blue)",
    },
  ]

  return (
    <section id="privacy" className="py-24 bg-[var(--deep-space)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 radial-spotlight" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--success-green)] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="label text-[var(--success-green)]">
              PRIVACY & TRUST
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
              Your Privacy is <span className="gradient-text">Non-Negotiable</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg text-[var(--text-secondary)]">
              AYRA is built on a foundation of privacy-first principles. Your personal data, 
              conversations, and interactions remain completely private and under your control.
            </p>
          </FadeIn>
        </div>

        {/* Privacy Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={0.3 + index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <div className="glass rounded-[var(--radius-lg)] p-6 h-full border transition-all duration-300 hover:border-opacity-50"
                  style={{
                    borderColor: `${principle.color}30`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${principle.color}20`,
                    }}
                  >
                    <principle.icon
                      className="w-6 h-6"
                      style={{ color: principle.color }}
                    />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)]">
                    {principle.description}
                  </p>

                  {/* Security indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="mt-4 h-1 rounded-full"
                    style={{
                      backgroundColor: `${principle.color}40`,
                    }}
                  />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Trust Metrics */}
        <FadeIn delay={1}>
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-[var(--radius-xl)] p-8 md:p-12 border-2"
              style={{
                borderColor: `var(--success-green)40`,
                boxShadow: `0 0 40px var(--success-green)20`,
              }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
                  Privacy-First Architecture
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Every component of AYRA is designed with privacy as the default, not an afterthought.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    metric: "0%",
                    label: "Data Sent to Cloud",
                    description: "Everything stays local",
                  },
                  {
                    metric: "100%",
                    label: "User Control",
                    description: "You own your data",
                  },
                  {
                    metric: "256-bit",
                    label: "Encryption",
                    description: "Military-grade security",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="text-4xl md:text-5xl font-bold mb-2"
                      style={{ color: "var(--success-green)" }}
                    >
                      {stat.metric}
                    </motion.div>
                    <div className="font-semibold text-[var(--text-primary)] mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-[var(--text-tertiary)]">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--glass-border)] text-center">
                <p className="text-sm text-[var(--text-secondary)]">
                  <Shield className="w-4 h-4 inline-block mr-2 text-[var(--success-green)]" />
                  Open-source and auditable. Verify our privacy claims yourself.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
