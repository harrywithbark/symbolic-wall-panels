'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ScrollReveal, ClipReveal } from './scroll-reveal'

/* ---------- Animated counter ---------- */

function Counter({
  value,
  suffix = '',
  label,
}: {
  value: number
  suffix?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    const start = performance.now()
    const duration = 1600
    let frame: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, reduced])

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="font-serif text-4xl text-brass md:text-5xl">
        {display}
        {suffix}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-linen-dim">
        {label}
      </span>
    </div>
  )
}

/* ---------- Statement section ---------- */

export function Statement() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  const imageY = useTransform(smooth, [0, 1], ['-8%', '8%'])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-16 overflow-hidden bg-charcoal py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Parallax image */}
        <ClipReveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <motion.div
              className="absolute -inset-y-[10%] inset-x-0"
              style={reduced ? undefined : { y: imageY }}
            >
              <Image
                src="/images/statement-wall.png"
                alt="Dark walnut slat feature wall with warm brass sconces in a luxury bedroom"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 left-5 rounded-sm border border-border bg-stone px-5 py-4 shadow-lg md:left-8">
            <p className="font-serif text-lg text-linen">Built by hand.</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
              Never outsourced
            </p>
          </div>
        </ClipReveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
              Why Symbolic
            </p>
            <h2 className="mt-4 font-serif text-3xl text-linen text-balance md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Anyone can ship you a box of panels. We build you a{' '}
              <em className="text-brass">finished wall</em>.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 max-w-md leading-relaxed text-linen-dim text-pretty">
              Online panel shops leave you with cardboard boxes, a YouTube
              tutorial, and a free weekend you&apos;ll never get back. We show up,
              laser-measure your wall, design the layout with you, and install it
              to the millimetre — mitred corners, hidden fasteners, cables inside
              the wall.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-linen-dim text-pretty">
              Your walls should reflect your story, not just cover it. That&apos;s
              the difference between buying a product and commissioning a piece.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Counter value={120} suffix="+" label="Walls Built" />
              <Counter value={2} label="Day Avg. Install" />
              <Counter value={100} suffix="%" label="Dust-Free Exit" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
