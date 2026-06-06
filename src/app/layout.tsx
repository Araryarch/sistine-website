import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sistine | UI Framework untuk Python",
  description: "Bangun web UI reaktif ala React dengan HTML/Tailwind + Alpine.js, powered by Streamlit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jetBrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-base transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
            <Toaster 
              position="bottom-right"
              toastOptions={{
                className: "border-4 border-border bg-chart-4 text-main-foreground font-black shadow-[4px_4px_0_var(--border)] rounded-none !p-4 !text-base",
                style: { borderRadius: '0px' }
              }}
            />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
