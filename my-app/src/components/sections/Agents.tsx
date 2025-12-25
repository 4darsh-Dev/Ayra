"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, Play, Heart, Eye, Shield, Sparkles } from "lucide-react"

export function Agents() {
  const agents = [
    {
      icon: Brain,
      name: "Planning Agent",
      role: "Strategic Orchestrator",
      color: "var(--neural-blue)",
      gradient: "from-blue-500/20 to-blue-600/10",
      capabilities: [
        "Task decomposition",
        "Context analysis",
        "Goal prioritization",
        "Resource allocation",
      ],
      personality: "Analytical, methodical, forward-thinking",
    },
    {
      icon: Play,
      name: "Execution Agent",
      role: "Action Specialist",
      color: "var(--cyber-teal)",
      gradient: "from-teal-500/20 to-teal-600/10",
      capabilities: [
        "Task execution",
        "Tool invocation",
        "Real-time feedback",
        "Error handling",
      ],
      personality: "Decisive, reliable, efficient",
    },
    {
      icon: Heart,
      name: "Emotional Agent",
      role: "Empathy Core",
      color: "var(--warm-amber)",
      gradient: "from-amber-500/20 to-amber-600/10",
      capabilities: [
        "Sentiment analysis",
        "Tone adaptation",
        "Emotional context",
        "Empathetic responses",
      ],
      personality: "Warm, understanding, compassionate",
    },
    {
      icon: Eye,
      name: "Reflection Agent",
      role: "Meta-Learner",
      color: "var(--electric-violet)",
      gradient: "from-violet-500/20 to-violet-600/10",
      capabilities: [
        "Performance analysis",
        "Pattern recognition",
        "Learning optimization",
        "Self-improvement",
      ],
      personality: "Introspective, adaptive, insightful",
    },
    {
      icon: Shield,
      name: "Governance Agent",
      role: "Safety Guardian",
      color: "var(--success-green)",
      gradient: "from-green-500/20 to-green-600/10",
      capabilities: [
        "Privacy enforcement",
        "Safety checks",
        "Ethical guidelines",
        "Data protection",
      ],
      personality: "Vigilant, principled, trustworthy",
    },
  ]

  return (
    <section id="agents" className="py-24 bg-[var(--deep-space)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 radial-spotlight" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--electric-violet)] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="label text-[var(--electric-violet)]">
              AGENT ECOSYSTEM
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
              Meet the <span className="gradient-text">AI Team</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg text-[var(--text-secondary)]">
              AYRA is powered by specialized AI agents, each with unique capabilities and 
              personalities, working together to provide intelligent, context-aware assistance.
            </p>
          </FadeIn>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {agents.map((agent, index) => (
            <FadeIn key={agent.name} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full group hover:border-opacity-30 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br"
                    style={{
                      background: `linear-gradient(135deg, ${agent.color}15, transparent)`,
                    }}
                  />

                  <CardHeader className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-[var(--radius-md)] flex items-center justify-center mb-4 transition-all"
                      style={{
                        backgroundColor: `${agent.color}20`,
                      }}
                    >
                      <agent.icon
                        className="w-8 h-8 transition-colors"
                        style={{ color: agent.color }}
                      />
                    </motion.div>

                    <CardTitle className="group-hover:text-[var(--neural-blue)] transition-colors">
                      {agent.name}
                    </CardTitle>
                    <CardDescription
                      className="font-medium"
                      style={{ color: agent.color }}
                    >
                      {agent.role}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                        Core Capabilities
                      </h4>
                      <ul className="space-y-1.5">
                        {agent.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                          >
                            <Sparkles
                              className="w-3 h-3 mt-0.5 flex-shrink-0"
                              style={{ color: agent.color }}
                            />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Personality */}
                    <div
                      className="pt-3 border-t"
                      style={{ borderColor: `${agent.color}20` }}
                    >
                      <p className="text-xs text-[var(--text-tertiary)] italic">
                        "{agent.personality}"
                      </p>
                    </div>
                  </CardContent>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 0 30px ${agent.color}40`,
                    }}
                  />
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Collaboration Note */}
        <FadeIn delay={1}>
          <div className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-[var(--radius-lg)] p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-[var(--electric-violet)]" />
                </motion.div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Collaborative Intelligence
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                These agents don't work in isolation—they communicate, collaborate, and learn 
                from each other to provide you with seamless, intelligent assistance that feels 
                truly alive.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
