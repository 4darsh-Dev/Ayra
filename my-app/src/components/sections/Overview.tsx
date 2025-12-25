"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Brain, Zap, Shield, Heart } from "lucide-react"

export function Overview() {
  return (
    <section id="overview" className="py-24 bg-[var(--deep-space)] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left content - 60% */}
          <div className="lg:col-span-3">
            <FadeIn>
              <span className="label text-[var(--neural-blue)]">
                VISION
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
                Not a chatbot.{" "}
                <span className="gradient-text">A companion.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="body-lg text-[var(--text-secondary)] mb-6">
                AYRA is a private, emotionally-aware AI system designed to be more than just an assistant. 
                It's a companion that understands your context, respects your privacy, and proactively 
                helps you navigate your digital life.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="body-lg text-[var(--text-secondary)] mb-8">
                Built with a multi-agent architecture and tiered memory system, AYRA learns from your 
                interactions without compromising your data. Everything runs locally, ensuring your 
                conversations and information remain completely private.
              </p>
            </FadeIn>

            {/* Key points */}
            <div className="space-y-4">
              {[
                {
                  icon: Brain,
                  title: "Intelligent Memory",
                  desc: "Tiered memory architecture from hot to long-term storage",
                  color: "var(--neural-blue)",
                },
                {
                  icon: Zap,
                  title: "Proactive Agents",
                  desc: "Multi-agent system that anticipates your needs",
                  color: "var(--electric-violet)",
                },
                {
                  icon: Shield,
                  title: "Privacy Guaranteed",
                  desc: "All processing happens locally on your device",
                  color: "var(--success-green)",
                },
                {
                  icon: Heart,
                  title: "Emotionally Aware",
                  desc: "Understands context and emotional state",
                  color: "var(--warm-amber)",
                },
              ].map((point, i) => (
                <FadeIn key={point.title} delay={0.5 + i * 0.1}>
                  <div className="flex items-start gap-4 group">
                    <div
                      className="p-3 rounded-[var(--radius-md)] transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${point.color}20`,
                      }}
                    >
                      <point.icon
                        className="w-6 h-6 transition-colors"
                        style={{ color: point.color }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                        {point.title}
                      </h3>
                      <p className="body-md text-[var(--text-secondary)]">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right visual - 40% */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.6} direction="left">
              <div className="relative">
                {/* Architectural visualization */}
                <div className="glass rounded-[var(--radius-2xl)] p-8 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--neural-blue)]/10 to-[var(--electric-violet)]/10" />
                  
                  {/* Architecture layers */}
                  <div className="relative space-y-4">
                    {[
                      { label: "User Interface", color: "var(--cyber-teal)", width: "100%" },
                      { label: "Agent Layer", color: "var(--electric-violet)", width: "85%" },
                      { label: "Memory System", color: "var(--neural-blue)", width: "70%" },
                      { label: "Core Engine", color: "var(--warm-amber)", width: "55%" },
                    ].map((layer, i) => (
                      <div key={layer.label} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[var(--text-secondary)]">
                            {layer.label}
                          </span>
                          <span
                            className="text-xs font-mono"
                            style={{ color: layer.color }}
                          >
                            Layer {i + 1}
                          </span>
                        </div>
                        <div className="h-3 bg-[var(--midnight-slate)] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: layer.width,
                              backgroundColor: layer.color,
                              boxShadow: `0 0 10px ${layer.color}`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pulsing indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--success-green)] animate-pulse" />
                    <span className="text-xs text-[var(--text-tertiary)]">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
