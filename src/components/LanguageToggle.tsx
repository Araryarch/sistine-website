"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "id" : "en")}
      className="flex items-center justify-center h-10 w-12 border-4 border-border bg-chart-2 text-main-foreground shadow-[4px_4px_0_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all font-black uppercase text-sm"
      title={`Switch to ${language === "en" ? "Indonesian" : "English"}`}
    >
      {language}
    </button>
  );
}
