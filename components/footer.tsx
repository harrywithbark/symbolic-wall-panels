const links = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#process', label: 'Process' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-stone">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <a href="#top" className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl text-linen">Symbolic</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
              Wall Panels
            </span>
          </a>
          <p className="mt-2 text-sm text-linen-dim">
            Custom wall panel installation — Surrey, BC
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-linen-dim transition-colors hover:text-linen"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="tel:+16729999761" className="text-sm text-linen hover:text-brass">
          (672) 999-9761
        </a>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-linen-dim md:px-6">
          © {new Date().getFullYear()} Symbolic Wall Panels. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
