import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { TrustStrip, Services, Gallery, Process, Reviews } from '@/components/sections'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Gallery />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
