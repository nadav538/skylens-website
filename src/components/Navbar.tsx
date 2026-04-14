"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t, locale, toggleLocale, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-blue to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon-blue/30 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Sky<span className="text-neon-blue">Lens</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white relative group transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-blue group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="relative w-16 h-8 rounded-full border border-white/20 bg-white/5 flex items-center transition-all duration-300 hover:border-neon-blue/50 group overflow-hidden"
          >
            <div
              className={`absolute w-7 h-6 rounded-full bg-gradient-to-r from-neon-blue to-blue-500 transition-all duration-300 ${
                locale === "he" ? (dir === "rtl" ? "left-0.5" : "left-[calc(100%-30px)]") : "left-0.5"
              }`}
            />
            <span className={`flex-1 text-[11px] font-semibold z-10 text-center ${locale === "en" ? "text-black" : "text-gray-400"}`}>
              EN
            </span>
            <span className={`flex-1 text-[11px] font-semibold z-10 text-center ${locale === "he" ? "text-black" : "text-gray-400"}`}>
              HE
            </span>
          </button>

          {/* CTA */}
          <a href="#contact" className="btn-primary text-sm">
            {t.nav.getQuote}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 hover:border-neon-blue/50 transition-colors"
          >
            {locale === "en" ? "HE" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-strong mx-4 mt-3 rounded-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors py-2 text-center"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary block text-center text-sm mt-4"
          >
            {t.nav.getQuote}
          </a>
        </div>
      </div>
    </nav>
  );
}
