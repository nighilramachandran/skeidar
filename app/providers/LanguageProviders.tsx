"use client";

import React, { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/Language";

// interface
interface ThemeProviderProps {
  children: ReactNode;
}

const LanguageProviders: React.FC<ThemeProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>(
    () => localStorage.getItem("lang") ?? "en"
  );

  const setLanguage = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={[lang, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProviders;
