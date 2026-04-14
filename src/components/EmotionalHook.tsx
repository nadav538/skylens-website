"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function EmotionalHook() {
  const { t, dir } = useLanguage();
  const { ref, visible } = useReveal();

  return (
    <section dir={dir} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[200px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center ${visible ? "visible" : ""}`}
      >
        <div className={`reveal ${visible ? "visible" : ""}`}>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-10" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
            <span className="gradient-text-gold">{t.emotional.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {t.emotional.description}
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-10" />
        </div>
      </div>
    </section>
  );
}
