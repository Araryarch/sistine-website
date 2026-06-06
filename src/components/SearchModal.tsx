"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SEARCH_DATA = [
  { title: "Introduction", href: "/docs" },
  { title: "Installation", href: "/docs/installation" },
  { title: "CLI & Scaffolding", href: "/docs/cli" },
  { title: "Routing", href: "/docs/routing" },
  { title: "HTML Builder", href: "/docs/html-builder" },
  { title: "Tailwind CSS", href: "/docs/tailwind" },
  { title: "Server Query", href: "/docs/server-query" },
  { title: "Reactive Components", href: "/docs/components" },
];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Handle cmd+k to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // The header handles opening, but this handles closing if it's already open
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = SEARCH_DATA.filter((item) => 
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-overlay">
      <div className="w-full max-w-xl bg-secondary-background border-4 border-border shadow-shadow rounded-base overflow-hidden flex flex-col">
        <div className="flex items-center border-b-4 border-border p-4 bg-background">
          <Search className="size-6 text-foreground mr-4" />
          <input
            autoFocus
            type="text"
            placeholder="Search documentation..."
            className="flex-1 bg-transparent text-foreground text-xl outline-none font-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-2 border-2 border-border rounded-base bg-chart-2 hover:bg-chart-3 shadow-shadow ml-2 transition-colors">
            <X className="size-5 text-main-foreground" />
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-2">
          {results.length > 0 ? (
            results.map((result) => (
              <button
                key={result.href}
                onClick={() => {
                  router.push(result.href);
                  onClose();
                }}
                className="text-left w-full p-4 border-2 border-border rounded-base bg-background hover:bg-main hover:text-main-foreground text-foreground font-bold text-lg shadow-[2px_2px_0px_0px_var(--border)] transition-all"
              >
                {result.title}
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-foreground font-bold">
              No results found for "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
