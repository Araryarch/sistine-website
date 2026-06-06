import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-base selection:bg-main selection:text-main-foreground">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-[radial-gradient(#d1d1d1_2px,transparent_2px)] [background-size:24px_24px] dark:bg-[radial-gradient(#333_2px,transparent_2px)]">
        <div className="max-w-2xl w-full border-4 border-border bg-main shadow-shadow p-8 md:p-16 relative overflow-hidden text-center">
          <div className="absolute top-4 left-4 size-16 border-4 border-chart-2 bg-transparent rounded-none flex items-center justify-center rotate-12 opacity-80">
            <span className="text-chart-2 font-black text-2xl">迷</span>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-black mb-4 text-main-foreground drop-shadow-[4px_4px_0_var(--border)]">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-main-foreground">
            Page Not Found
          </h2>
          
          <p className="text-xl font-bold mb-10 text-main-foreground bg-background text-foreground border-4 border-border p-4 shadow-[4px_4px_0px_0px_var(--border)] inline-block">
            Looks like you are lost in the layout.
          </p>
          
          <div className="flex justify-center">
            <Link 
              href="/"
              className="bg-chart-4 text-main-foreground font-black text-xl px-10 py-5 border-4 border-border shadow-[6px_6px_0px_0px_var(--border)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all uppercase"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
