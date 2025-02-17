import React from "react";

// Define a type for the language context
export const LanguageContext = React.createContext<
  [string, (lang: string) => void]
>(["en", () => {}]);
