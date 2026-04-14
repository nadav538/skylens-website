"use client";

import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmotionalHook from "@/components/EmotionalHook";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function AppContent() {
  const { dir, locale } = useLanguage();

  return (
    <div dir={dir} lang={locale} className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <EmotionalHook />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <BeforeAfter />
        <div className="section-divider" />
        <Portfolio />
        <div className="section-divider" />
        <WhyChooseUs />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
