"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="size-10 border-4 border-border bg-chart-1 opacity-50" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center size-10 border-4 border-border bg-chart-1 hover:bg-chart-3 shadow-[4px_4px_0_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all group"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="size-5 text-foreground font-black group-hover:rotate-90 transition-transform" />
      ) : (
        <Moon className="size-5 text-foreground font-black group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
