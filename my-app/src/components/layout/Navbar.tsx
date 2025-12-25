"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { name: "Overview", id: "overview" },
    { name: "Features", id: "features" },
    { name: "Architecture", id: "architecture" },
    { name: "Agents", id: "agents" },
    { name: "Roadmap", id: "roadmap" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass border-b border-[var(--glass-border)]" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--neural-blue)] to-[var(--electric-violet)] flex items-center justify-center font-[family-name:var(--font-sora)] font-bold text-lg">
              A
            </div>
            <span className="text-xl font-[family-name:var(--font-sora)] font-bold gradient-text hidden sm:block">
              AYRA
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://github.com/4darsh-Dev/Ayra" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </Link>
            <Link href="https://github.com/4darsh-Dev/Ayra/blob/main/README.md" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" className="gap-2">
                <FileText className="w-4 h-4" />
                Documentation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-[var(--glass-border)]"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
                >
                  {link.name}
                </motion.button>
              ))}
              
              <div className="pt-4 border-t border-[var(--glass-border)] space-y-3">
                <Link href="https://github.com/4darsh-Dev/Ayra" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="ghost" size="md" className="w-full gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://github.com/4darsh-Dev/Ayra/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="primary" size="md" className="w-full gap-2">
                    <FileText className="w-4 h-4" />
                    Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
