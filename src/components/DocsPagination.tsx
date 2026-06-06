"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const DOCS_LINKS = [
  { href: "/docs", label: "Introduction", label_id: "Pengenalan" },
  { href: "/docs/installation", label: "Installation", label_id: "Instalasi" },
  { href: "/docs/cli", label: "CLI & Scaffolding", label_id: "CLI & Kerangka" },
  { href: "/docs/mcp", label: "AI Integration (MCP)", label_id: "Integrasi AI (MCP)" },
  { href: "/docs/routing", label: "Routing", label_id: "Routing (Rute)" },
  { href: "/docs/html-builder", label: "HTML Builder (el)", label_id: "Pembuat HTML (el)" },
  { href: "/docs/tailwind", label: "Tailwind CSS", label_id: "Tailwind CSS" },
  { href: "/docs/server-query", label: "Server Query", label_id: "Query Server" },
];

export default function DocsPagination() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const currentIndex = DOCS_LINKS.findIndex((link) => link.href === pathname);

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? DOCS_LINKS[currentIndex - 1] : null;
  const next = currentIndex < DOCS_LINKS.length - 1 ? DOCS_LINKS[currentIndex + 1] : null;

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 mt-20 pt-10 border-t-8 border-border">
      {prev ? (
        <Link
          href={prev.href}
          className="flex-1 flex flex-col items-start p-6 bg-secondary-background border-4 border-border shadow-[4px_4px_0_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none hover:bg-chart-3 transition-all group"
        >
          <span className="text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <ChevronLeft className="size-4 group-hover:-translate-x-2 transition-transform" />
            {t("Sebelumnya", "Previous")}
          </span>
          <span className="text-xl font-black">{t(prev.label_id, prev.label)}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="flex-1 flex flex-col items-end p-6 bg-chart-4 border-4 border-border shadow-[4px_4px_0_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none hover:bg-chart-5 hover:text-white transition-all group"
        >
          <span className="text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            {t("Selanjutnya", "Next")}
            <ChevronRight className="size-4 group-hover:translate-x-2 transition-transform" />
          </span>
          <span className="text-xl font-black">{t(next.label_id, next.label)}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
