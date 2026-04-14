'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = ['Petit-Déjeuner', 'Plats Principaux', 'Tajines', 'Boissons', 'Desserts']

const items: Record<string, { name: string; desc: string; price: string }[]> = {
  'Petit-Déjeuner': [
    { name: 'Continental Complet', desc: 'Café au lait, pain frais, beurre, miel, confiture, jus d\'orange', price: '45 MAD' },
    { name: 'Msemen & Argan', desc: 'Crêpes marocaines avec huile d\'argan et miel de montagne', price: '35 MAD' },
    { name: 'Baghrir aux Fruits', desc: 'Crêpes mille trous, fruits de saison, sirop de rose', price: '40 MAD' },
  ],
  'Plats Principaux': [
    { name: 'Couscous Royal', desc: 'Semoule fine, légumes du jardin, agneau confit, bouillon parfumé', price: '120 MAD' },
    { name: 'Pastilla au Pigeon', desc: 'Feuilleté croustillant, pigeon, amandes, cannelle, sucre glace', price: '95 MAD' },
    { name: 'Méchoui d\'Agneau', desc: 'Agneau entier rôti lentement, épices du Moyen Atlas', price: '150 MAD' },
  ],
  'Tajines': [
    { name: 'Tajine Kefta', desc: 'Boulettes de viande, tomates, œufs, coriandre fraîche', price: '75 MAD' },
    { name: 'Tajine Poulet Citron', desc: 'Poulet fermier, citron confit, olives, gingembre', price: '80 MAD' },
    { name: 'Tajine Légumes', desc: 'Légumes de saison, safran, ras el hanout, amandes', price: '65 MAD' },
  ],
  'Boissons': [
    { name: 'Thé à la Menthe', desc: 'Thé vert, menthe fraîche, sucre, servi à la marocaine', price: '20 MAD' },
    { name: 'Café Atlas', desc: 'Café noir intense, cardamome, eau de fleur d\'oranger', price: '18 MAD' },
    { name: 'Jus Frais', desc: 'Orange, grenade, pastèque — selon la saison', price: '25 MAD' },
  ],
  'Desserts': [
    { name: 'Cornes de Gazelle', desc: 'Pâtisseries aux amandes, eau de fleur d\'oranger, cannelle', price: '30 MAD' },
    { name: 'Chebakia', desc: 'Gâteau de sésame frit, miel, eau de rose', price: '25 MAD' },
    { name: 'Crème Brûlée Argan', desc: 'Crème onctueuse à l\'huile d\'argan, caramel croustillant', price: '45 MAD' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('Petit-Déjeuner')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="menu" ref={ref} className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">Notre Carte</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Saveurs <span className="gold-gradient italic">Authentiques</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm tracking-wider transition-all duration-300 rounded-sm ${
                active === cat
                  ? 'bg-gold-400 text-stone-950 font-medium'
                  : 'border border-white/10 text-white/50 hover:border-gold-400/40 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {items[active].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-lg p-6 hover:border-gold-400/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-lg group-hover:text-gold-400 transition-colors">{item.name}</h3>
                <span className="text-gold-400 font-medium text-sm ml-2 shrink-0">{item.price}</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
