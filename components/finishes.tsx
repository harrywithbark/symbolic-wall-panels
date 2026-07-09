'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

const finishes = [
  {
    id: 'oak',
    name: 'Natural Oak Slat',
    tag: 'Most Popular',
    description:
      'Warm honey oak on black acoustic felt. Softens sound, warms the room, and works with almost any decor.',
    image: '/images/finish-oak.png',
    alt: 'Natural oak slat wall panel close-up',
  },
  {
    id: 'walnut',
    name: 'Dark Walnut Slat',
    tag: 'Statement',
    description:
      'Deep chocolate grain for moody, high-contrast feature walls. Stunning behind a headboard or fireplace.',
    image: '/images/finish-walnut.png',
    alt: 'Dark walnut slat wall panel close-up',
  },
  {
    id: 'marble',
    name: 'UV Marble Sheet',
    tag: 'Luxury',
    description:
      'Large-format marble-look sheets with real veining depth. The look of Calacatta without the weight or cost.',
    image: '/images/finish-marble.png',
    alt: 'White marble sheet with grey and gold veining',
  },
  {
    id: 'fluted',
    name: 'Charcoal Fluted',
    tag: 'Modern',
    description:
      'Matte ribbed WPC panels in deep charcoal. Water-resistant — great for bathrooms, basements, and offices.',
    image: '/images/finish-fluted.png',
    alt: 'Charcoal black fluted wall panel close-up',
  },
  {
    id: 'stone',
    name: 'Stacked Ledger Stone',
    tag: 'Texture',
    description:
      'Natural slate strips with real depth and shadow. Anchors fireplaces, entryways, and exterior accents.',
    image: '/images/finish-stone.png',
    alt: 'Dark grey stacked ledger stone panel close-up',
  },
  {
    id: 'acoustic',
    name: 'Acoustic Felt Slat',
    tag: 'Sound Control',
    description:
      'Engineered to absorb echo in media rooms, offices, and open-plan spaces — beauty that also works.',
    image: '/images/finish-acoustic.png',
    alt: 'Acoustic slat panel with felt backing close-up',
  },
]

export function Finishes() {
  const [active, setActive] = useState(finishes[0])
  const reduced = useReducedMotion()

  return (
    <section
      id="finishes"
      className="scroll-mt-16 border-y border-border bg-stone py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            Materials Library
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl text-linen text-balance md:text-4xl">
            Choose your finish — we bring the samples to your door
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-linen-dim">
            Every consultation includes physical samples so you can see the
            texture in your own light, on your own wall.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Large preview */}
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border lg:sticky lg:top-24">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={active.image || "/placeholder.svg"}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6 pt-16"
                aria-hidden="true"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
                  {active.tag}
                </p>
                <p className="mt-1 font-serif text-2xl text-linen">{active.name}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Finish list */}
          <div className="order-1 flex flex-col lg:order-2">
            {finishes.map((finish, i) => {
              const isActive = active.id === finish.id
              return (
                <ScrollReveal key={finish.id} delay={i * 0.06}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(finish)}
                    onFocus={() => setActive(finish)}
                    onClick={() => setActive(finish)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-start gap-4 border-b border-border py-5 text-left transition-colors first:border-t ${
                      isActive ? 'bg-stone-2/60' : 'hover:bg-stone-2/30'
                    }`}
                  >
                    <span
                      className={`mt-1 font-mono text-xs transition-colors ${
                        isActive ? 'text-brass' : 'text-linen-dim'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 pr-2">
                      <span className="flex items-center gap-2">
                        <span
                          className={`font-serif text-xl transition-colors ${
                            isActive ? 'text-brass' : 'text-linen group-hover:text-brass'
                          }`}
                        >
                          {finish.name}
                        </span>
                        <ArrowUpRight
                          className={`size-4 transition-all ${
                            isActive
                              ? 'translate-x-0 text-brass opacity-100'
                              : '-translate-x-1 opacity-0'
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                      <motion.span
                        className="block overflow-hidden"
                        initial={false}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span className="block pt-2 text-sm leading-relaxed text-linen-dim">
                          {finish.description}
                        </span>
                      </motion.span>
                    </span>
                    <span className="relative mt-0.5 size-12 shrink-0 overflow-hidden rounded-sm border border-border">
                      <Image
                        src={finish.image || "/placeholder.svg"}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                  </button>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
