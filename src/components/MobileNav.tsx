"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { DOCS_LINKS } from "./Sidebar";
import { useLanguage } from "./LanguageProvider";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center border-4 border-border bg-chart-3 p-2 h-10 shadow-[4px_4px_0_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="size-6 text-main-foreground" /> : <Menu className="size-6 text-main-foreground" />}
      </button>

      {/* Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] z-50 bg-secondary-background border-t-4 border-border overflow-y-auto animate-stagger">
          <div className="p-5 flex flex-col gap-6">
            
            {/* General Nav Links */}
            <div className="flex flex-col gap-4 font-black uppercase text-xl pb-6 border-b-4 border-border">
              <Link 
                href="/docs" 
                className="text-foreground hover:text-main transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
              <Link 
                href="/docs/components" 
                className="text-foreground hover:text-main transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Components
              </Link>
              <a 
                href="/llms.txt" 
                target="_blank" 
                className="text-chart-1 hover:text-main transition-colors underline"
                onClick={() => setIsOpen(false)}
              >
                llms.txt
              </a>
            </div>

            {/* Docs Sidebar Links (if in docs) */}
            {pathname.startsWith("/docs") && (
              <div className="flex flex-col">
                <div className="text-xl font-heading bg-main text-main-foreground p-3 border-4 border-border mb-4 shadow-[4px_4px_0_var(--border)]">
                  {t("Mulai Belajar", "Getting Started")}
                </div>
                <div className="flex flex-col gap-2">
                  {DOCS_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block border-4 border-border p-4 text-lg font-base transition-all ${
                          isActive 
                            ? "bg-chart-1 text-main-foreground font-bold shadow-none translate-x-[4px] translate-y-[4px]" 
                            : "bg-secondary-background hover:bg-main hover:text-main-foreground text-foreground shadow-[4px_4px_0_var(--border)]"
                        }`}
                      >
                        {t(link.label_id, link.label)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
}
