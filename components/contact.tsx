'use client'

import { useState } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

const WHATSAPP_NUMBER = '16729999761'

const selectClass =
  'w-full rounded-sm border border-input bg-charcoal px-3 py-2.5 text-sm text-linen focus:border-brass focus:outline-none'
const inputClass = selectClass
const labelClass =
  'mb-1.5 block font-mono text-[11px] uppercase tracking-[0.15em] text-linen-dim'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const lines = [
      'Hi Symbolic Wall Panels — I would like to book a free consultation.',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Room: ${data.get('room')}`,
      `Panel style: ${data.get('style')}`,
      `Timeline: ${data.get('timeline')}`,
    ]
    const message = data.get('message')
    if (message) lines.push(`Notes: ${message}`)

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-charcoal py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Info block */}
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            Get Started
          </p>
          <h2 className="mt-4 font-serif text-3xl text-linen text-balance md:text-4xl">
            Book your free in-home consultation
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-linen-dim">
            Tell us about your wall and we&apos;ll get back to you the same day.
            Prefer to talk? Call or message us directly.
          </p>

          <dl className="mt-10 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-linen-dim">
                  Phone / WhatsApp
                </dt>
                <dd className="mt-1">
                  <a href="tel:+16729999761" className="text-linen hover:text-brass">
                    (672) 999-9761
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-linen-dim">
                  Service Area
                </dt>
                <dd className="mt-1 text-linen">
                  Surrey, Langley, Delta &amp; the Lower Mainland
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-linen-dim">
                  Hours
                </dt>
                <dd className="mt-1 text-linen">Mon–Sat, 8am–6pm</dd>
              </div>
            </div>
          </dl>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-border bg-stone p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="room" className={labelClass}>
                  Room Type
                </label>
                <select id="room" name="room" required defaultValue="" className={selectClass}>
                  <option value="" disabled>
                    Select a room
                  </option>
                  <option>Living Room</option>
                  <option>Bedroom</option>
                  <option>Office</option>
                  <option>Entryway / Hallway</option>
                  <option>Basement</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="style" className={labelClass}>
                  Panel Style
                </label>
                <select id="style" name="style" required defaultValue="" className={selectClass}>
                  <option value="" disabled>
                    Select a style
                  </option>
                  <option>Slat Wall Panels</option>
                  <option>Stacked Stone</option>
                  <option>TV / Media Wall</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="timeline" className={labelClass}>
                  Timeline
                </label>
                <select id="timeline" name="timeline" required defaultValue="" className={selectClass}>
                  <option value="" disabled>
                    When are you hoping to start?
                  </option>
                  <option>As soon as possible</option>
                  <option>Within 1 month</option>
                  <option>1–3 months</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us about your wall — rough size, what you have in mind..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-sm bg-brass px-6 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-brass-bright"
            >
              Send via WhatsApp
            </button>

            {submitted && (
              <p role="status" className="mt-4 text-center text-sm text-brass">
                WhatsApp opened in a new tab — hit send and we&apos;ll reply the same day.
              </p>
            )}

            <p className="mt-4 text-center text-xs text-linen-dim">
              Your details open in a pre-filled WhatsApp message to us — nothing is
              stored on this site.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
