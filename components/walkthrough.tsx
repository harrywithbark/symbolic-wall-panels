'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

const EASE = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    number: '01',
    title: 'The Visit',
    duration: 'Day 0 — Free',
    description:
      'We come to your home, stand in front of the wall with you, and listen. Laser measurements, sample boards in your own light, honest advice on what will and won\u2019t work.',
    details: ['Laser-measured to the millimetre', 'Physical samples in your light', 'No deposit, no pressure'],
    image: '/images/walkthrough-consult.png',
    alt: 'Installers laser-measuring a bare living room wall',
  },
  {
    number: '02',
    title: 'The Design',
    duration: 'Within 48 hours',
    description:
      'We map every slat, every stone course, every cable run and light strip on paper before anything touches your wall. You get a fixed quote — the number never moves.',
    details: ['Full layout drawing', 'Fixed, all-in quote', 'TV, outlet & lighting plan'],
    image: '/images/walkthrough-design.png',
    alt: 'Wall panel design drawings with material samples on a table',
  },
  {
    number: '03',
    title: 'The Build',
    duration: '1–2 days on site',
    description:
      'Floors protected, cuts made outside, fasteners hidden, corners mitred. The same two people who quoted your wall are the two people building it.',
    details: ['Floors & furniture protected', 'Cables buried in the wall', 'Cut outside, cleaned daily'],
    image: '/images/walkthrough-install.png',
    alt: 'Craftsman installing oak slat panels with floors protected',
  },
  {
    number: '04',
    title: 'The Reveal',
    duration: 'Final walkthrough',
    description:
      'Lights dimmed, room reset, dust gone. We walk the finished wall together, inch by inch. It isn\u2019t done until you say it\u2019s done.',
    details: ['Joint inspection with you', 'Complete cleanup', 'Workmanship guaranteed'],
    image: '/images/walkthrough-reveal.png',
    alt: 'Finished living room with lit oak slat media wall at dusk',
  },
]

function StepContent({
  step,
  index,
  onActive,
}: {
  step: (typeof steps)[number]
  index: number
  onActive: (index: number) => void
}) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <li ref={ref} className="flex min-h-[60vh] flex-col justify-center py-10 lg:min-h-[80vh]">
      <ScrollReveal>
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-5xl text-brass/40 md:text-6xl">{step.number}</span>
          <div>
            <h3 className="font-serif text-2xl text-linen md:text-3xl">{step.title}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
              {step.duration}
            </p>
          </div>
        </div>
        <p className="mt-5 max-w-md leading-relaxed text-linen-dim text-pretty">
          {step.description}
        </p>
        <ul className="mt-6 flex flex-col gap-2.5">
          {step.details.map((detail) => (
            <li key={detail} className="flex items-center gap-3 text-sm text-linen">
              <Check className="size-4 shrink-0 text-brass" aria-hidden="true" />
              {detail}
            </li>
          ))}
        </ul>
        {/* Mobile image */}
        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-sm border border-border lg:hidden">
          <Image
            src={step.image || "/placeholder.svg"}
            alt={step.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 0px"
            className="object-cover"
          />
        </div>
      </ScrollReveal>
    </li>
  )
}

export function Walkthrough() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()

  return (
    <section id="process" className="scroll-mt-16 bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            The Walkthrough
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl text-linen text-balance md:text-4xl">
            Your project, from first knock to final reveal
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-linen-dim">
            No mystery, no middlemen. Scroll through exactly what happens when you
            hire us — the same four steps, every single project.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual — desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <Image
                      src={steps[active].image || "/placeholder.svg"}
                      alt={steps[active].alt}
                      fill
                      sizes="(min-width: 1024px) 520px, 0px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-5 pt-14"
                  aria-hidden="true"
                >
                  <p className="font-serif text-xl text-linen">
                    {steps[active].number} — {steps[active].title}
                  </p>
                </div>
              </div>

              {/* Progress rail */}
              <div className="flex items-center gap-3" aria-hidden="true">
                {steps.map((step, i) => (
                  <div key={step.number} className="h-[3px] flex-1 overflow-hidden rounded-full bg-stone-2">
                    <motion.div
                      className="h-full bg-brass"
                      initial={false}
                      animate={{ scaleX: i <= active ? 1 : 0 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling steps */}
          <ol className="flex flex-col divide-y divide-border lg:divide-y-0">
            {steps.map((step, i) => (
              <StepContent key={step.number} step={step} index={i} onActive={setActive} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
