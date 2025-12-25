"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Database, Mic, Lock, Heart, Rocket, Target, Zap, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Brain,
    title: "Private Intelligence",
    description: "All processing happens locally on your device. Your conversations, data, and interactions never leave your control.",
    color: "var(--neural-blue)",
    gradient: "from-blue-500/10 to-blue-600/5",
  },
  {
    icon: Cpu,
    title: "Agentic Control",
    description: "Multi-agent system with specialized roles - from planning and execution to emotional awareness and reflection.",
    color: "var(--electric-violet)",
    gradient: "from-violet-500/10 to-violet-600/5",
  },
  {
    icon: Database,
    title: "Memory Architecture",
    description: "Tiered memory system from hot (milliseconds) to long-term semantic storage for efficient context management.",
    color: "var(--cyber-teal)",
    gradient: "from-teal-500/10 to-teal-600/5",
  },
  {
    icon: Mic,
    title: "Voice Interface",
    description: "Natural voice interaction with advanced speech recognition and synthesis for seamless communication.",
    color: "var(--warm-amber)",
    gradient: "from-amber-500/10 to-amber-600/5",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "End-to-end encryption, local processing, and complete transparency in data handling and governance.",
    color: "var(--success-green)",
    gradient: "from-green-500/10 to-green-600/5",
  },
  {
    icon: Heart,
    title: "Emotional Awareness",
    description: "Context-aware responses that understand your emotional state and adapt communication accordingly.",
    color: "var(--error-red)",
    gradient: "from-red-500/10 to-red-600/5",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-[var(--midnight-slate)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 neural-mesh opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="label text-[var(--electric-violet)]">
              CAPABILITIES
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
              Core <span className="gradient-text">Features</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg text-[var(--text-secondary)]">
              Built with cutting-edge AI technology and a privacy-first mindset, 
              AYRA delivers a comprehensive companion experience.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full group hover:border-opacity-20 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}10, transparent)`,
                    }}
                  />

                  <CardHeader className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center mb-4 transition-all"
                      style={{
                        backgroundColor: `${feature.color}20`,
                      }}
                    >
                      <feature.icon
                        className="w-7 h-7 transition-colors"
                        style={{ color: feature.color }}
                      />
                    </motion.div>

                    <CardTitle className="group-hover:text-[var(--neural-blue)] transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative">
                    <CardDescription className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardContent>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 0 30px ${feature.color}40`,
                    }}
                  />
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={1}>
          <div className="text-center mt-16">
            <p className="body-md text-[var(--text-tertiary)] mb-4">
              And much more coming in future updates
            </p>
            <div className="flex gap-4 justify-center">
              {[
                { Icon: Rocket, color: "var(--neural-blue)" },
                { Icon: Target, color: "var(--electric-violet)" },
                { Icon: Zap, color: "var(--warm-amber)" },
                { Icon: Sparkles, color: "var(--cyber-teal)" }
              ].map(({ Icon, color }, i) => (
                <motion.div
                  key={i}
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${color}20` }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
