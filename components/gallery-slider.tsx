'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

export function GallerySlider({
  beforeSrc = '/images/gallery-before-1.png',
  afterSrc = '/images/gallery-after-1.png',
  beforeAlt = 'Living room wall before installation: plain painted drywall',
  afterAlt = 'Living room wall after installation: oak slat panels with stone media column',
}: {
  beforeSrc?: string
  afterSrc?: string
  beforeAlt?: string
  afterAlt?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5))
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-sm border border-border"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* After (base layer) */}
      <Image src={afterSrc || "/placeholder.svg"} alt={afterAlt} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />

      {/* Before (clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc || "/placeholder.svg"} alt={beforeAlt} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
      </div>

      {/* Divider + handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 z-10 w-0.5 bg-brass"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brass bg-charcoal/90 text-brass">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M5 1L1 6l4 5M11 1l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute left-3 top-3 rounded-sm bg-charcoal/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-linen">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-sm bg-charcoal/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
        After
      </span>
    </div>
  )
}
