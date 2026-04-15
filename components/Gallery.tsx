'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const photos = [
  { src: '/photos/image 1.png', alt: 'Le Rocher d\'Atlas', span: '' },
  { src: '/photos/image 2.png', alt: 'Le Rocher d\'Atlas', span: '' },
  { src: '/photos/image 3.png', alt: 'Le Rocher d\'Atlas', span: '' },
  { src: '/photos/image 4.png', alt: 'Le Rocher d\'Atlas', span: '' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Plat marocain', span: '' },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80', alt: 'Tajine', span: '' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Ambiance', span: '' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', alt: 'Vue Atlas', span: '' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">Galerie</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-4">
          L'Art de <span className="gold-gradient italic">Recevoir</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[400px]">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setSelected(photo.src)}
            className={`${photo.span} relative overflow-hidden rounded-lg cursor-pointer group`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-stone-950/95 flex items-center justify-center p-6"
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white">
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected}
              alt="Photo agrandie"
              className="max-w-4xl max-h-[85vh] w-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
