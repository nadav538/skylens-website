"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useEffect, useState } from "react";

export default function Hero() {
  const { t, dir } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" dir={dir} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with zoom animation */}
      <div className="absolute inset-0 animate-zoom-in">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury property aerial view"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Animated grain/noise */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">
              Premium Drone Visuals
            </span>
          </div>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block">{t.hero.headline.split(" ").slice(0, -3).join(" ")}</span>
          <span className="gradient-text block mt-2">
            {t.hero.headline.split(" ").slice(-3).join(" ")}
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {t.hero.subheadline}
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4 w-full sm:w-auto text-center">
            {t.hero.cta1}
          </a>
          <a href="#contact" className="btn-secondary text-base px-8 py-4 w-full sm:w-auto text-center">
            {t.hero.cta2}
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 mx-auto rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-neon-blue animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
