'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '808', label: 'Avis Google' },
  { value: '+6 ans', label: 'Années d\'expérience' },
  { value: '100%', label: 'Produits locaux' },
  { value: '3.5★', label: 'Note Google' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold-400 text-sm tracking-[0.3em] uppercase"
          >
            Notre Histoire
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl mt-4 mb-6 leading-tight"
          >
            Une cuisine qui raconte{' '}
            <span className="gold-gradient italic">l'Atlas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 leading-relaxed mb-4"
          >
            Niché dans les hauteurs d'Azrou, Le Rocher d'Atlas vous invite à une expérience gastronomique unique où les saveurs authentiques du Maroc rencontrent un cadre naturel époustouflant.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/50 leading-relaxed"
          >
            Notre chef sélectionne chaque jour les meilleurs produits locaux pour vous offrir une cuisine généreuse, chaleureuse et mémorable.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass rounded-lg p-8 text-center hover:border-gold-400/30 transition-colors duration-300"
            >
              <div className="font-serif text-4xl gold-gradient mb-2">{s.value}</div>
              <div className="text-white/40 text-sm tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
