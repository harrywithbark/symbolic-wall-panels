'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#finishes', label: 'Finishes' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#process', label: 'Walkthrough' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-charcoal/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6"
      >
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="font-serif text-xl text-linen">Symbolic</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
            Wall Panels
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-linen-dim transition-colors hover:text-linen"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+16729999761"
            className="hidden items-center gap-2 text-sm text-linen-dim transition-colors hover:text-linen md:flex"
          >
            <Phone className="size-4 text-brass" aria-hidden="true" />
            (672) 999-9761
          </a>
          <a
            href="#contact"
            className="hidden rounded-sm bg-brass px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-brass-bright md:inline-block"
          >
            Book Free Consult
          </a>
          <button
            type="button"
            className="p-2 text-linen lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-charcoal px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-sm text-linen-dim transition-colors hover:bg-stone hover:text-linen"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-brass px-4 py-3 text-center text-sm font-semibold text-charcoal"
            >
              Book Free Consult
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
