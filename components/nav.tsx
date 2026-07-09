'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/16729999761'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#finishes', label: 'Finishes' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#process', label: 'Walkthrough' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

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
          ? 'border-b border-border bg-charcoal/95 backdrop-blur-md'
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

        <div className="flex items-center gap-3">
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
          {/* Mobile: WhatsApp shortcut */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-90 lg:hidden"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <button
            type="button"
            className="flex size-10 items-center justify-center text-linen lg:hidden"
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
        <div id="mobile-menu" className="border-t border-border bg-charcoal px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-sm px-2 text-sm text-linen-dim transition-colors hover:bg-stone-2 hover:text-linen"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="tel:+16729999761"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center gap-3 rounded-sm border border-border px-4 text-sm text-linen transition-colors hover:border-brass"
              >
                <Phone className="size-4 shrink-0 text-brass" aria-hidden="true" />
                (672) 999-9761
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center gap-3 rounded-sm border border-[#25D366]/40 bg-[#25D366]/10 px-4 text-sm text-[#25D366] transition-colors hover:bg-[#25D366]/20"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                WhatsApp us
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-sm bg-brass px-4 text-sm font-semibold text-charcoal transition-colors hover:bg-brass-bright"
              >
                Book Free Consult
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
