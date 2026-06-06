"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-40 mx-auto flex h-[70px] w-full items-center border-b-4 border-border bg-secondary-background px-5">
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between text-foreground">
          <div className="flex items-center gap-10">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex items-center justify-center h-10 px-4 bg-chart-4 text-main-foreground border-4 border-border shadow-[4px_4px_0_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all font-heading font-black text-xl tracking-tighter uppercase"
            >
              sistine.py
            </Link>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-10 font-base text-lg font-bold uppercase tracking-wider">
              <Link href="/docs" className="hover:text-main transition-colors">
                Docs
              </Link>
              <Link href="/docs/components" className="hover:text-main transition-colors">
                Components
              </Link>
              <a href="/llms.txt" target="_blank" className="hover:text-main transition-colors text-chart-1 underline">
                llms.txt
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 border-4 border-border bg-chart-3 px-3 py-2 h-10 shadow-[4px_4px_0_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all font-black uppercase text-sm"
            >
              <Search className="size-4" />
              <span className="hidden xl:inline">Search</span>
              <span className="hidden xl:flex items-center justify-center text-xs border-2 border-border bg-main px-2 ml-4">
                Ctrl K
              </span>
            </button>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
