"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoPlayMs?: number
}

export default function Carousel({ images, autoPlayMs = 3500 }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(next, autoPlayMs)
    return () => clearInterval(timer)
  }, [next, autoPlayMs])

  if (images.length === 0) return null

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden select-none">
      {/* Slides */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100"
        style={{ backgroundColor: "rgba(7,20,83,0.55)", opacity: 0.7 }}
        aria-label="Image précédente"
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100"
        style={{ backgroundColor: "rgba(7,20,83,0.55)", opacity: 0.7 }}
        aria-label="Image suivante"
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all"
            style={{
              width: i === current ? 18 : 6,
              height: 6,
              backgroundColor: i === current ? "#6BD6A6" : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Aller à l'image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
