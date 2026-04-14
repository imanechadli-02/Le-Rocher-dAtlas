'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Karim B.',
    date: 'il y a 4 ans',
    rating: 5,
    text: 'Un beau endroit, accueil chaleureux, des plats délicieux 😋 et un très bon serveur appelé Ayachi.',
    avatar: 'K',
  },
  {
    name: 'Sophie M.',
    date: 'il y a 6 mois',
    rating: 5,
    text: 'Cadre magnifique au cœur de la forêt de cèdres. Le couscous était exceptionnel, je recommande vivement !',
    avatar: 'S',
  },
  {
    name: 'Ahmed R.',
    date: 'il y a 1 an',
    rating: 4,
    text: 'Très bonne cuisine marocaine authentique. Le tajine d\'agneau était fondant. Service attentionné.',
    avatar: 'A',
  },
  {
    name: 'Marie L.',
    date: 'il y a 8 mois',
    rating: 5,
    text: 'Découverte magnifique lors de notre passage à Azrou. Vue imprenable, cuisine délicieuse, personnel adorable.',
    avatar: 'M',
  },
  {
    name: 'Youssef T.',
    date: 'il y a 2 ans',
    rating: 4,
    text: 'Endroit idéal pour se ressourcer. La pastilla au pigeon était une révélation. On reviendra !',
    avatar: 'Y',
  },
  {
    name: 'Claire D.',
    date: 'il y a 3 mois',
    rating: 5,
    text: 'Petit-déjeuner marocain complet servi avec soin. Ambiance chaleureuse, personnel souriant. Parfait !',
    avatar: 'C',
  },
]

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="reviews" ref={ref} className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">Témoignages</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            Ce que disent <span className="gold-gradient italic">nos clients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={18} className="fill-gold-400 text-gold-400" />
            ))}
            <Star size={18} className="text-gold-400/40" />
            <span className="text-white/50 ml-2">3.5 · 808 avis Google</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-lg p-6 hover:border-gold-400/20 transition-all duration-300"
            >
              <Quote size={20} className="text-gold-400/30 mb-4" />
              <p className="text-white/60 text-sm leading-relaxed mb-6">{r.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-serif font-bold text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-white/30 text-xs">{r.date}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={12} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
