'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const SLAT_COUNT = 7

function SlatColumn({ side }: { side: 'left' | 'right' }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="flex h-full gap-[6px]"
      initial={reduced ? undefined : 'hidden'}
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: side === 'left' ? 0.2 : 0.6,
          },
        },
      }}
    >
      {Array.from({ length: SLAT_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          className="h-full flex-1 rounded-sm"
          style={{
            background:
              i % 2 === 0
                ? 'linear-gradient(180deg, #A8794C 0%, #7C5738 100%)'
                : 'linear-gradient(180deg, #7C5738 0%, #4A3020 100%)',
          }}
          variants={{
            hidden: { opacity: 0, y: '-100%' },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        />
      ))}
    </motion.div>
  )
}

export function Hero() {
  const reduced = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: 'easeOut' as const },
        }

  return (
    <section id="top" className="relative overflow-hidden bg-charcoal pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.25em] text-brass"
            {...fadeUp(0.1)}
          >
            Surrey, BC — Custom Installation
          </motion.p>
          <motion.h1
            className="mt-5 font-serif text-4xl leading-[1.1] text-linen text-balance md:text-5xl lg:text-6xl"
            {...fadeUp(0.25)}
          >
            Walls that carry <em className="text-brass">meaning</em>, built by hand.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md leading-relaxed text-linen-dim text-pretty"
            {...fadeUp(0.4)}
          >
            Slat panels, stacked stone, and media walls — designed, measured, and
            installed by Harry &amp; Sukh. Every wall starts with a free in-home visit.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-4" {...fadeUp(0.55)}>
            <a
              href="#contact"
              className="rounded-sm bg-brass px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-brass-bright"
            >
              Book a Free Consultation
            </a>
            <a
              href="#gallery"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium text-linen transition-colors hover:border-brass hover:text-brass"
            >
              See Our Work
            </a>
          </motion.div>
        </div>

        {/* Visual: slat columns flanking stacked stone */}
        <div className="grid h-[380px] grid-cols-[1fr_1.2fr_1fr] gap-3 md:h-[460px] lg:h-[520px]">
          <SlatColumn side="left" />
          <motion.div
            className="relative overflow-hidden rounded-sm"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <Image
              src="/images/hero-stone.png"
              alt="Dark stacked stone feature wall panel"
              fill
              priority
              sizes="(max-width: 1024px) 40vw, 320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/20" aria-hidden="true" />
          </motion.div>
          <SlatColumn side="right" />
        </div>
      </div>
    </section>
  )
}
