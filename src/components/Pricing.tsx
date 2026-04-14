"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function Pricing() {
  const { t, dir } = useLanguage();
  const { ref, visible } = useReveal();

  return (
    <section id="pricing" dir={dir} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-blue/5 rounded-full blur-[200px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.pricing.packages.map((pkg, i) => {
            const isPro = i === 1;
            return (
              <div
                key={i}
                className={`reveal relative rounded-2xl p-8 transition-all duration-500 ${
                  isPro
                    ? "glass-strong neon-border scale-[1.02] md:scale-105"
                    : "glass hover:bg-white/[0.06]"
                } ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Popular tag */}
                {isPro && (pkg as any).tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-neon-blue to-blue-500 text-xs font-bold text-black">
                    {(pkg as any).tag}
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${isPro ? "text-neon-blue" : "text-white"}`}>
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPro ? "text-neon-blue" : "text-gold-400"}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isPro
                      ? "btn-primary"
                      : "border border-white/20 text-white hover:border-gold-400 hover:text-gold-400"
                  }`}
                >
                  {t.pricing.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
