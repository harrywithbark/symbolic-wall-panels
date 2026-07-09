import Image from 'next/image'
import { Users, Ruler, Star, Home } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { GallerySlider } from './gallery-slider'

/* ---------- Trust Strip ---------- */

const trustItems = [
  { icon: Users, label: 'Family-Run' },
  { icon: Ruler, label: 'Laser-Measured' },
  { icon: Star, label: '4.5★ Google Rated' },
  { icon: Home, label: 'Free In-Home Visit' },
]

export function TrustStrip() {
  return (
    <section aria-label="Why choose us" className="border-y border-border bg-stone">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-3 px-4 py-6"
          >
            <item.icon className="size-5 shrink-0 text-brass" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-linen-dim">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- Services ---------- */

const services = [
  {
    title: 'Slat Wall Panels',
    description:
      'Warm wood slats with acoustic felt backing. Full-height feature walls, headboards, hallways, and offices — cut and fitted to your exact wall.',
    image: '/images/service-slat.png',
    alt: 'Oak slat wall panels in a modern living room',
  },
  {
    title: 'Stacked Stone Feature Walls',
    description:
      'Natural ledger stone with real depth and texture. Fireplace surrounds, entryways, and statement walls that anchor a room.',
    image: '/images/service-stone.png',
    alt: 'Dark stacked stone feature wall with a linear fireplace',
  },
  {
    title: 'TV & Media Walls',
    description:
      'TVs mounted flush, cables hidden inside the wall, floating consoles built in. One clean surface — no wires, no clutter.',
    image: '/images/service-media.png',
    alt: 'TV recessed into a custom slat media wall with floating console',
  },
  {
    title: 'Ambient Lighting Integration',
    description:
      'Warm LED strips built between slats and behind stone. Dimmable, hidden, and wired properly — light that makes the texture work at night.',
    image: '/images/service-lighting.png',
    alt: 'Warm LED lighting glowing between wood slat panels',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            What We Build
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl text-linen text-balance md:text-4xl">
            Four ways to turn a flat wall into the best part of the room
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-stone">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-xl text-linen">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-linen-dim">
                    {service.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Gallery ---------- */

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-16 border-y border-border bg-stone py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            Before &amp; After
          </p>
          <h2 className="mt-4 font-serif text-3xl text-linen text-balance md:text-4xl">
            Drag to see the difference one wall makes
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="mt-10">
          <GallerySlider />
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ---------- Process ---------- */

const steps = [
  {
    number: '01',
    title: 'Consult',
    description:
      'We visit your home, look at the wall, talk through what you want, and take laser measurements. Free, no pressure.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We map the layout — slat spacing, stone coursing, TV placement, lighting runs — and give you a fixed quote.',
  },
  {
    number: '03',
    title: 'Install',
    description:
      'Most walls are done in one to two days. We protect your floors, cut outside where possible, and clean up completely.',
  },
  {
    number: '04',
    title: 'Reveal',
    description:
      'We walk the finished wall with you together. It is not done until you say it is.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            How It Works
          </p>
          <h2 className="mt-4 max-w-md font-serif text-3xl text-linen text-balance md:text-4xl">
            From first visit to finished wall
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-linen-dim">
            Two people handle your project from start to finish — the same two
            people who answer the phone.
          </p>
        </ScrollReveal>

        <ol className="mt-12 flex flex-col lg:mt-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <li className="flex gap-6 border-b border-border py-6 first:border-t">
                <span className="font-mono text-sm text-brass">{step.number}</span>
                <div>
                  <h3 className="font-serif text-xl text-linen">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-linen-dim">
                    {step.description}
                  </p>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- Reviews ---------- */

const reviews = [
  {
    quote:
      'They measured everything twice and the slats line up perfectly around our fireplace. You cannot see a single seam or screw. The wall is the first thing everyone comments on.',
    attribution: 'Homeowner in Fleetwood',
  },
  {
    quote:
      'We had our TV wall done with the lighting behind it. They finished in a day and a half and vacuumed before they left. Fair price and they showed up exactly when they said they would.',
    attribution: 'Homeowner in Cloverdale',
  },
  {
    quote:
      'Harry walked us through the design on the first visit and the final wall matched the plan exactly. Honest guys who clearly care about the finish work.',
    attribution: 'Homeowner in South Surrey',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-16 border-y border-border bg-stone py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            Reviews
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl text-linen text-balance md:text-4xl">
            What neighbours say after the dust settles
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.attribution} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-sm border border-border bg-stone-2 p-6">
                <div>
                  <div className="flex gap-1 text-brass" aria-label="5 star review">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-linen">
                    {`"${review.quote}"`}
                  </blockquote>
                </div>
                <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-linen-dim">
                  — {review.attribution}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
