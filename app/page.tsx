import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
