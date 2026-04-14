"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function Testimonials() {
  const { t, dir } = useLanguage();
  const { ref, visible } = useReveal();

  return (
    <section dir={dir} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className={`reveal group relative rounded-2xl p-8 glass transition-all duration-500 hover:bg-white/[0.06] ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-neon-blue/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {item.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-blue-600 flex items-center justify-center text-sm font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Star rating */}
              <div className="absolute top-8 right-8 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
