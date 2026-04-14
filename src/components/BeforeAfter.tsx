"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { useState } from "react";

export default function BeforeAfter() {
  const { t, dir } = useLanguage();
  const { ref, visible } = useReveal();
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 5), 95));
  };

  return (
    <section dir={dir} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            {t.beforeAfter.title}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
            {t.beforeAfter.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Comparison slider */}
        <div
          className={`reveal-scale ${visible ? "visible" : ""} relative rounded-2xl overflow-hidden aspect-video cursor-ew-resize group`}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After image (full) */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Cinematic drone shot"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
              alt="Standard photo"
              className="absolute inset-0 w-full h-full object-cover brightness-75 saturate-50"
              style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
            />
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg shadow-white/50 z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-dark-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-xs font-semibold text-gray-300">
            {t.beforeAfter.before}
          </div>
          <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-neon-blue/80 backdrop-blur-sm text-xs font-semibold text-white">
            {t.beforeAfter.after}
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
