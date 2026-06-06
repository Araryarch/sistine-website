"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-base selection:bg-main selection:text-main-foreground">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-[radial-gradient(#d1d1d1_2px,transparent_2px)] [background-size:24px_24px] dark:bg-[radial-gradient(#333_2px,transparent_2px)]">
        <div className="max-w-2xl w-full border-4 border-border bg-chart-2 shadow-shadow p-8 md:p-16 relative overflow-hidden text-center">
          <div className="absolute top-4 left-4 size-16 border-4 border-background bg-transparent rounded-none flex items-center justify-center rotate-[-12deg] opacity-80">
            <span className="text-background font-black text-2xl">壊</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-4 text-main-foreground drop-shadow-[4px_4px_0_var(--border)] uppercase">
            System Error
          </h1>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 text-main-foreground">
            Something went terribly wrong
          </h2>
          
          <p className="text-lg font-bold mb-10 text-foreground bg-background border-4 border-border p-4 shadow-[4px_4px_0px_0px_var(--border)] inline-block">
            {error.message || "An unexpected error occurred in the application."}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => reset()}
              className="bg-chart-3 text-main-foreground font-black text-xl px-10 py-5 border-4 border-border shadow-[6px_6px_0px_0px_var(--border)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all uppercase cursor-pointer"
            >
              Try Again
            </button>
            <Link 
              href="/"
              className="bg-background text-foreground font-black text-xl px-10 py-5 border-4 border-border shadow-[6px_6px_0px_0px_var(--border)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all uppercase"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
