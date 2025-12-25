"use client"

import { Github, Twitter, Linkedin, Mail, FileText, Code, Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Overview", href: "#overview" },
      { name: "Features", href: "#features" },
      { name: "Architecture", href: "#architecture" },
      { name: "Roadmap", href: "#roadmap" },
    ],
    resources: [
      { name: "Documentation", href: "https://github.com/4darsh-Dev/Ayra/blob/main/README.md", external: true },
      { name: "GitHub", href: "https://github.com/4darsh-Dev/Ayra", external: true },
      { name: "Contributing", href: "https://github.com/4darsh-Dev/Ayra/blob/main/CONTRIBUTING.md", external: true },
      { name: "License", href: "https://github.com/4darsh-Dev/Ayra/blob/main/LICENSE", external: true },
    ],
    community: [
      { name: "GitHub Discussions", href: "https://github.com/4darsh-Dev/Ayra/discussions", external: true },
      { name: "Issues", href: "https://github.com/4darsh-Dev/Ayra/issues", external: true },
      { name: "Pull Requests", href: "https://github.com/4darsh-Dev/Ayra/pulls", external: true },
      { name: "Code of Conduct", href: "https://github.com/4darsh-Dev/Ayra/blob/main/CODE_OF_CONDUCT.md", external: true },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/4darsh-Dev/Ayra", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/4darsh_dev", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/adarsh-maurya-dev", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mauryaadarsh7007@gmail.com", label: "Email" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""))
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-[var(--deep-space)] border-t border-[var(--glass-border)] relative">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--neural-blue)] to-[var(--electric-violet)] flex items-center justify-center font-[family-name:var(--font-sora)] font-bold text-lg">
                A
              </div>
              <span className="text-2xl font-[family-name:var(--font-sora)] font-bold gradient-text">
                AYRA
              </span>
            </motion.div>
            <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-sm">
              Your private AI companion. Not a chatbot—a genuine, emotionally-aware assistant 
              that respects your privacy while providing intelligent support.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <motion.div
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[var(--neural-blue)] transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 text-[var(--text-secondary)] hover:text-[var(--neural-blue)] transition-colors" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--neural-blue)] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--neural-blue)] transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.external && <span className="text-xs">↗</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--neural-blue)] transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.external && <span className="text-xs">↗</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--glass-border)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
              <Code className="w-4 h-4" />
              <span>Built with</span>
              <Heart className="w-4 h-4 text-[var(--error-red)] animate-pulse" />
              <span>by Adarsh Maurya</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-[var(--text-tertiary)]">
              <span>© 2025 AYRA</span>
              <Link
                href="https://github.com/4darsh-Dev/Ayra/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--neural-blue)] transition-colors"
              >
                MIT License
              </Link>
              <Link
                href="https://github.com/4darsh-Dev/Ayra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--neural-blue)] transition-colors flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-[var(--neural-blue)] via-[var(--electric-violet)] to-[var(--cyber-teal)]" />
    </footer>
  )
}
