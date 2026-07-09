import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { TrustStrip, Services, Gallery, Reviews } from '@/components/sections'
import { Statement } from '@/components/statement'
import { Finishes } from '@/components/finishes'
import { Walkthrough } from '@/components/walkthrough'
import { Faq } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'
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
        <Statement />
        <Finishes />
        <Gallery />
        <Walkthrough />
        <Reviews />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
