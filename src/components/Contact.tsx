"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { useState } from "react";

export default function Contact() {
  const { t, dir } = useLanguage();
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" dir={dir} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[250px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${visible ? "visible" : ""}`}>
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.contact.subtitle}</p>
        </div>

        <div className={`reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
          <form
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-8 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300"
                  placeholder={t.contact.form.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300"
                  placeholder={t.contact.form.phone}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                {t.contact.form.email}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300"
                placeholder={t.contact.form.email}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t.contact.form.propertyType}
                </label>
                <select
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300 appearance-none"
                >
                  <option value="" className="bg-dark-800">{t.contact.form.propertyType}</option>
                  {t.contact.form.propertyTypes.map((type, i) => (
                    <option key={i} value={type} className="bg-dark-800">{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t.contact.form.location}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300"
                  placeholder={t.contact.form.location}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 text-base font-bold rounded-xl"
            >
              {submitted ? "✓" : t.contact.form.submit}
            </button>

            {submitted && (
              <p className="text-center text-green-400 text-sm animate-fade-in">
                {t.contact.success}
              </p>
            )}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/972500000000?text=Hi%20SkyLens%2C%20I%27m%20interested%20in%20drone%20photography%20for%20my%20property"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all duration-300 text-sm font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.contact.whatsapp}
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
