import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Le Rocher d\'Atlas | Restaurant & Hôtel à Azrou, Maroc',
  description: 'Découvrez Le Rocher d\'Atlas à Azrou — restaurant gastronomique marocain, hébergement de charme au cœur du Moyen Atlas. Cuisine authentique, cadre naturel exceptionnel.',
  keywords: ['restaurant Azrou', 'hôtel Azrou', 'Rocher Atlas', 'cuisine marocaine', 'Moyen Atlas', 'Maroc'],
  openGraph: {
    title: 'Le Rocher d\'Atlas | Restaurant & Hôtel à Azrou',
    description: 'Restaurant gastronomique et hébergement de charme au cœur du Moyen Atlas marocain.',
    url: 'https://lerocheratlas.ma',
    siteName: 'Le Rocher d\'Atlas',
    locale: 'fr_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Rocher d\'Atlas | Azrou, Maroc',
    description: 'Restaurant & Hôtel au cœur du Moyen Atlas',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://lerocheratlas.ma' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} bg-stone-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
