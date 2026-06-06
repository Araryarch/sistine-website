"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DOCS_LINKS = [
  { href: "/docs", label: "Introduction" },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/cli", label: "CLI & Scaffolding" },
  { href: "/docs/mcp", label: "AI Integration (MCP)" },
  { href: "/docs/routing", label: "Routing" },
  { href: "/docs/html-builder", label: "HTML Builder (el)" },
  { href: "/docs/tailwind", label: "Tailwind CSS" },
  { href: "/docs/server-query", label: "Server Query" },
  { href: "/docs/components", label: "Reactive Components" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-[70px] z-30 h-[calc(100vh-70px)] w-[250px] overflow-y-auto border-r-4 border-border bg-secondary-background hidden lg:block">
      <div className="border-b-4 border-border p-4 text-xl font-heading bg-main text-main-foreground">
        Getting Started
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
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
