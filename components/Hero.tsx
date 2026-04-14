'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ChevronDown, Star } from 'lucide-react'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax on mouse move
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      gsap.to(bgRef.current, { x, y, duration: 1.5, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', onMove)

    // Floating particles
    const particles = particlesRef.current?.querySelectorAll('.particle')
    particles?.forEach((p, i) => {
      gsap.to(p, {
        y: -30 - i * 10,
        x: Math.sin(i) * 20,
        opacity: 0,
        duration: 2 + i * 0.5,
        repeat: -1,
        delay: i * 0.3,
        ease: 'power1.inOut',
      })
    })

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-[-5%] will-change-transform">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950" />
      </div>

      {/* Floating gold particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 rounded-full bg-gold-400/60"
            style={{
              left: `${10 + i * 12}%`,
              bottom: `${20 + (i % 3) * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
          ))}
          <span className="text-gold-400/80 text-sm tracking-widest uppercase ml-1">Azrou, Maroc</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          Le Rocher{' '}
          <span className="gold-gradient italic">d'Atlas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Restaurant & Hôtel au cœur du Moyen Atlas. Une expérience culinaire authentique dans un cadre naturel exceptionnel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-gold-400 text-stone-950 font-medium tracking-wider hover:bg-gold-500 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Découvrir le Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white/80 tracking-wider hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300"
          >
            Réserver une Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-gold-400/60" size={28} />
        </motion.div>
      </motion.div>
    </section>
  )
}
