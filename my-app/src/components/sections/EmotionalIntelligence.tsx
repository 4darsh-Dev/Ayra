"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { motion } from "framer-motion"
import { Heart, Activity, Smile, Frown, Meh, MessageCircle } from "lucide-react"

export function EmotionalIntelligence() {
  const emotionalStates = [
    {
      icon: Smile,
      state: "Joy",
      response: "Celebrating with you",
      color: "var(--warm-amber)",
    },
    {
      icon: Meh,
      state: "Neutral",
      response: "Providing balanced support",
      color: "var(--cyber-teal)",
    },
    {
      icon: Frown,
      state: "Concern",
      response: "Offering empathy & assistance",
      color: "var(--electric-violet)",
    },
  ]

  return (
    <section id="emotional" className="py-24 bg-[var(--midnight-slate)] relative overflow-hidden">
      {/* Background decoration with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--warm-amber)]/5 via-transparent to-[var(--electric-violet)]/5" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--warm-amber)] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="label text-[var(--warm-amber)]">
              EMOTIONAL INTELLIGENCE
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="h1 mt-4 mb-6 font-[family-name:var(--font-sora)]">
              More Than Logic, <span className="gradient-text">It Understands</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg text-[var(--text-secondary)]">
              AYRA doesn't just process words—it understands context, tone, and emotional state 
              to provide truly empathetic, human-centered responses.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Heartbeat Visualization */}
          <FadeIn delay={0.3}>
            <div className="glass rounded-[var(--radius-xl)] p-8 md:p-12 mb-12 relative overflow-hidden">
              {/* Animated heartbeat line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, transparent, var(--warm-amber), transparent)`,
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="text-center mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                  style={{
                    backgroundColor: `var(--warm-amber)20`,
                  }}
                >
                  <Heart className="w-10 h-10" style={{ color: "var(--warm-amber)" }} />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Context-Aware Emotional Understanding
                </h3>
                <p className="text-[var(--text-secondary)]">
                  AYRA analyzes sentiment, tone, and context to adapt its communication style
                </p>
              </div>

              {/* Emotional States */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {emotionalStates.map((emotion, index) => (
                  <motion.div
                    key={emotion.state}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center p-6 rounded-[var(--radius-lg)] transition-all duration-300"
                    style={{
                      backgroundColor: `${emotion.color}10`,
                      border: `1px solid ${emotion.color}30`,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                      style={{
                        backgroundColor: `${emotion.color}20`,
                      }}
                    >
                      <emotion.icon
                        className="w-6 h-6"
                        style={{ color: emotion.color }}
                      />
                    </motion.div>
                    <div className="font-semibold text-[var(--text-primary)] mb-1">
                      {emotion.state}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {emotion.response}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Example Interactions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.8}>
              <div className="glass rounded-[var(--radius-lg)] p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MessageCircle className="w-5 h-5 text-[var(--neural-blue)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-medium text-[var(--text-primary)] mb-2">
                      User Sentiment Detection
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      "I'm having a rough day..."
                    </p>
                  </div>
                </div>
                <div className="pl-8 border-l-2 border-[var(--warm-amber)]">
                  <p className="text-sm text-[var(--text-secondary)] italic">
                    "I hear you. Let me help lighten the load. Would you like to talk about 
                    it, or shall I help you with something to take your mind off things?"
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="glass rounded-[var(--radius-lg)] p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Activity className="w-5 h-5 text-[var(--electric-violet)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-medium text-[var(--text-primary)] mb-2">
                      Tone Adaptation
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      "That's amazing news!"
                    </p>
                  </div>
                </div>
                <div className="pl-8 border-l-2 border-[var(--warm-amber)]">
                  <p className="text-sm text-[var(--text-secondary)] italic">
                    "That's wonderful! I'm so happy for you! 🎉 Tell me more about what happened!"
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Key Features */}
          <FadeIn delay={1}>
            <div className="mt-12 text-center glass rounded-[var(--radius-lg)] p-6">
              <p className="text-sm text-[var(--text-secondary)]">
                <Heart className="w-4 h-4 inline-block mr-2 text-[var(--warm-amber)]" />
                AYRA remembers your preferences, adapts to your communication style, and learns 
                to provide support that feels genuinely personal and caring.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
