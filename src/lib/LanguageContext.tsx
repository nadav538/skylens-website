"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import en from "@/i18n/en";
import he from "@/i18n/he";

type Locale = "en" | "he";
type Translations = typeof en;

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  dir: "ltr" | "rtl";
}

const translations: Record<Locale, Translations> = { en, he: he as unknown as Translations };

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: en,
  toggleLocale: () => {},
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "he" : "en"));
  }, []);

  const value: LanguageContextType = {
    locale,
    t: translations[locale],
    toggleLocale,
    dir: locale === "he" ? "rtl" : "ltr",
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
