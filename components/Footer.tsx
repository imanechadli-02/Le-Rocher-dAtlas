import { MapPin, Phone, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-serif text-xl text-gold-400 mb-3">Le Rocher d'Atlas</h3>
            <p className="text-white/30 text-sm leading-relaxed">
              Restaurant & Hôtel au cœur du Moyen Atlas marocain. Une expérience authentique et mémorable.
            </p>
          </div>
          <div>
            <h4 className="text-white/50 text-xs tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'Menu', 'Galerie', 'Avis', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white/30 text-sm hover:text-gold-400 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 text-xs tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/30 text-sm">
                <MapPin size={14} className="text-gold-400/60" />
                Azrou 53100, Maroc
              </li>
              <li className="flex items-center gap-2 text-white/30 text-sm">
                <Phone size={14} className="text-gold-400/60" />
                08 08 54 75 04
              </li>
              <li className="flex items-center gap-2 text-white/30 text-sm">
                <Globe size={14} className="text-gold-400/60" />
                hibikh.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Le Rocher d'Atlas · Tous droits réservés
          </p>
          <p className="text-white/20 text-xs">
            Villa 6 Lotissement Adam, Azrou · CQX9+89
          </p>
        </div>
      </div>
    </footer>
  )
}
