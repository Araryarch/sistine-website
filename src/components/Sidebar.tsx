"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

export const DOCS_LINKS = [
  { href: "/docs", label: "Introduction", label_id: "Pengenalan" },
  { href: "/docs/installation", label: "Installation", label_id: "Instalasi" },
  { href: "/docs/cli", label: "CLI & Scaffolding", label_id: "CLI & Kerangka" },
  { href: "/docs/mcp", label: "AI Integration (MCP)", label_id: "Integrasi AI (MCP)" },
  { href: "/docs/routing", label: "Routing", label_id: "Routing (Rute)" },
  { href: "/docs/html-builder", label: "HTML Builder (el)", label_id: "Pembuat HTML (el)" },
  { href: "/docs/tailwind", label: "Tailwind CSS", label_id: "Tailwind CSS" },
  { href: "/docs/server-query", label: "Server Query", label_id: "Query Server" },
  { href: "/docs/components", label: "Reactive Components", label_id: "Komponen Reaktif" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <aside className="fixed top-[70px] z-30 h-[calc(100vh-70px)] w-[250px] overflow-y-auto border-r-4 border-border bg-secondary-background hidden lg:block">
      {/* Subtle Watermark Background */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: 'url("/sistine-bg.png")' }}
      ></div>

      <div className="relative z-10">
        <div className="border-b-4 border-border p-4 text-xl font-heading bg-main text-main-foreground">
          {t("Mulai Belajar", "Getting Started")}
        </div>
        <nav className="flex flex-col">
          {DOCS_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block border-b-4 border-border p-4 text-lg font-base transition-colors ${
                  isActive 
                    ? "bg-chart-1 text-main-foreground font-bold border-l-8" 
                    : "hover:bg-main hover:text-main-foreground text-foreground"
                }`}
              >
                {t(link.label_id, link.label)}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
