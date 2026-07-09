'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

const faqs = [
  {
    question: 'How much does a feature wall cost?',
    answer:
      'Most slat feature walls land between $1,500 and $4,500 depending on size, finish, and whether we\u2019re integrating a TV or lighting. After the free visit you get one fixed number in writing — it never moves.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'The majority of walls are finished in one to two days on site. Larger media walls with lighting and cable runs can take up to three. We confirm the schedule before we start and we keep it.',
  },
  {
    question: 'Do you supply the panels or do I buy them myself?',
    answer:
      'We supply everything — panels, trims, adhesives, fasteners, LED strips. Everything is included in your fixed quote, and we only use materials we\u2019d put in our own homes.',
  },
  {
    question: 'Can you hide my TV cables inside the wall?',
    answer:
      'Yes — that\u2019s our specialty. TVs are mounted flush, power and HDMI run inside the wall, and consoles float with no visible wiring. One clean surface, zero clutter.',
  },
  {
    question: 'Do you work outside of Surrey?',
    answer:
      'We serve Surrey, Langley, Delta, White Rock, and the wider Lower Mainland. If you\u2019re nearby but unsure, send us a message — we\u2019ll tell you straight.',
  },
  {
    question: 'What if I don\u2019t like it when it\u2019s done?',
    answer:
      'The final walkthrough is part of every project. We inspect the wall together, and we don\u2019t consider it finished until you do. Our workmanship is guaranteed.',
  },
]

function FaqItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[number]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-border first:border-t">
        <h3>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            className="group flex w-full items-center justify-between gap-4 py-5 text-left"
          >
            <span
              className={`font-serif text-lg transition-colors md:text-xl ${
                isOpen ? 'text-brass' : 'text-linen group-hover:text-brass'
              }`}
            >
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`shrink-0 transition-colors ${isOpen ? 'text-brass' : 'text-linen-dim'}`}
            >
              <Plus className="size-5" aria-hidden="true" />
            </motion.span>
          </button>
        </h3>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-linen-dim">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16 bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">FAQ</p>
          <h2 className="mt-4 max-w-sm font-serif text-3xl text-linen text-balance md:text-4xl">
            Straight answers before you commit
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-linen-dim">
            Still curious about something?{' '}
            <a href="#contact" className="text-brass underline-offset-4 hover:underline">
              Ask us directly
            </a>{' '}
            — we reply the same day.
          </p>
        </ScrollReveal>

        <div className="mt-12 lg:mt-0">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
