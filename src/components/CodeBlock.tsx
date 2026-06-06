import React from "react";
import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";

export default async function CodeBlock({ code, language = "python" }: { code: string; language?: string }) {
  // Use a reliable theme like 'github-dark' or 'one-dark-pro' for dark mode contrast.
  // Shiki renders HTML directly with inline styles, ensuring it looks good regardless of Tailwind context.
  let html = "";
  try {
    html = await codeToHtml(code, {
      lang: language,
      theme: "vitesse-dark",
    });
  } catch (e) {
    // Fallback if language is invalid
    html = `<pre><code>${code}</code></pre>`;
  }

  return (
    <div className="my-6 relative group">
      <div className="absolute inset-0 bg-secondary-background border-4 border-border shadow-shadow z-0 translate-x-2 translate-y-2"></div>
      <div className="relative bg-[#121212] border-4 border-border z-10 overflow-hidden shadow-shadow">
        <div className="flex items-center justify-between px-4 py-2 bg-chart-4 border-b-4 border-border">
          <div className="flex items-center gap-2">
            <div className="size-4 border-4 border-border bg-chart-5"></div>
            <div className="size-4 border-4 border-border bg-chart-3"></div>
            <div className="size-4 border-4 border-border bg-chart-2"></div>
          </div>
          <div className="flex items-center gap-2">
            {language && (
              <span className="font-bold text-main-foreground text-xs uppercase tracking-wider">{language}</span>
            )}
            <CopyButton code={code} />
          </div>
        </div>
        
        {/* Shiki output container */}
        <div 
          className="p-4 overflow-x-auto text-base md:text-lg font-base font-bold [&>pre]:!bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
