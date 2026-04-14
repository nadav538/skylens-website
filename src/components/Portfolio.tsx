"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useReveal } from "@/lib/useReveal";

const images = [
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: "Luxury villa aerial", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80", alt: "Modern house", span: "" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80", alt: "Pool area", span: "" },
  { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80", alt: "Luxury estate", span: "" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80", alt: "Modern architecture", span: "" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80", alt: "Penthouse view", span: "col-span-2" },
];

export default function Portfolio() {
  const { t, dir } = useLanguage();
  const { ref, visible } = useReveal();

  return (
    <section id="portfolio" dir={dir} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} reveal-scale group relative rounded-xl overflow-hidden cursor-pointer ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">{img.alt}</span>
                </div>
              </div>
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-neon-blue/40 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
