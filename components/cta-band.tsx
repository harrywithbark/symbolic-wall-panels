'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ScrollReveal, LineReveal } from './scroll-reveal'

export function CtaBand() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  const bgY = useTransform(smooth, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border">
      {/* Parallax background */}
      <motion.div
        className="absolute -inset-y-[15%] inset-x-0"
        style={reduced ? undefined : { y: bgY }}
        aria-hidden="true"
      >
        <Image
          src="/images/walkthrough-reveal.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/80" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:px-6 lg:py-32">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            One Wall Changes Everything
          </p>
        </ScrollReveal>
        <h2 className="mt-5 font-serif text-4xl text-linen md:text-5xl lg:text-6xl">
          <LineReveal
            lines={[
              <>Your wall is waiting.</>,
              <>
                <em className="text-brass">Let&apos;s build it.</em>
              </>,
            ]}
            delay={0.1}
          />
        </h2>
        <ScrollReveal delay={0.35}>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-linen-dim text-pretty">
            Free in-home consultation, physical samples, and a fixed quote — usually
            within 48 hours of your first message.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-brass px-8 py-3.5 text-sm font-semibold text-charcoal transition-all hover:-translate-y-0.5 hover:bg-brass-bright"
            >
              Book Your Free Consultation
            </a>
            <a
              href="tel:+16729999761"
              className="rounded-sm border border-linen/30 px-8 py-3.5 text-sm font-medium text-linen transition-colors hover:border-brass hover:text-brass"
            >
              Call (672) 999-9761
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
