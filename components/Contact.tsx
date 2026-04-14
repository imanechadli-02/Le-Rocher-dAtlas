'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Globe, Clock } from 'lucide-react'

const infos = [
  { icon: MapPin, label: 'Adresse', value: 'Villa 6 Lotissement Adam, Azrou 53100' },
  { icon: Phone, label: 'Téléphone', value: '08 08 54 75 04' },
  { icon: Globe, label: 'Site web', value: 'hibikh.com' },
  { icon: Clock, label: 'Horaires', value: 'Ouvert tous les jours · 7h – 23h' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">Nous Trouver</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-4">
          Réservez votre <span className="gold-gradient italic">Table</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          {infos.map((info) => (
            <div key={info.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-gold-400/10 flex items-center justify-center shrink-0">
                <info.icon size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="text-white/30 text-xs tracking-wider uppercase mb-1">{info.label}</div>
                <div className="text-white/80">{info.value}</div>
              </div>
            </div>
          ))}

          {/* Map embed */}
          <div className="mt-8 rounded-lg overflow-hidden h-48 glass">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d-5.2233!3d33.4333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzAwLjAiTiA1wrAxMycyMy45Ilc!5e0!3m2!1sfr!2sma!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              title="Localisation Le Rocher d'Atlas"
            />
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-lg p-10 text-center h-full flex flex-col items-center justify-center"
            >
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-2xl gold-gradient mb-2">Merci !</h3>
              <p className="text-white/50">Votre demande a été envoyée. Nous vous contacterons très bientôt.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-lg p-8 space-y-5">
              {[
                { id: 'name', label: 'Nom complet', type: 'text', placeholder: 'Votre nom' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com' },
                { id: 'date', label: 'Date souhaitée', type: 'date', placeholder: '' },
              ].map((field) => (
                <div key={field.id}>
                  <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Message</label>
                <textarea
                  rows={3}
                  placeholder="Nombre de personnes, occasion spéciale..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold-400 text-stone-950 font-medium tracking-wider hover:bg-gold-500 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-sm"
              >
                Envoyer la Demande
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
