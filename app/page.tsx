import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import Hours from '@/components/Hours'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <Gallery />
      <Location />
      <Hours />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

