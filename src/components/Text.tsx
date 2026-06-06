"use client";

import { useLanguage } from "./LanguageProvider";

export default function Text({ id, en }: { id: React.ReactNode; en: React.ReactNode }) {
  const { language } = useLanguage();
  return <>{language === "en" ? en : id}</>;
}
