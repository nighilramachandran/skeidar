"use client";

import "../../i18n";
import React, { ReactNode, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/Language";

interface ThemeProviderProps {
  children: ReactNode;
}

const LanguageProviders: React.FC<ThemeProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang");
      if (savedLang) {
        setLang(savedLang);
        i18n.changeLanguage(savedLang);
      }
    }
  }, [i18n]);

  const setLanguage = (newLang: string) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
    }
    i18n.changeLanguage(newLang);
  };

  console.log("lang", lang);

  return (
    <LanguageContext.Provider value={[lang, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProviders;
