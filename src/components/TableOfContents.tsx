"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const refreshHeadings = () => {
      const elements = Array.from(document.querySelectorAll("main h2, main h3"));
      
      const items: TOCItem[] = elements.map((elem, index) => {
        if (!elem.id) {
          elem.id = elem.textContent?.toLowerCase().replace(/\s+/g, '-') || `heading-${index}`;
        }
        return {
          id: elem.id,
          text: elem.textContent || "",
          level: Number(elem.tagName.charAt(1)),
        };
      });

      setHeadings(items);

      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-80px 0px -80% 0px" }
      );

      elements.forEach((elem) => observer?.observe(elem));
    };

    // Initial load
    // Need a tiny timeout to let the new page's DOM mount fully
    const timeout = setTimeout(refreshHeadings, 150);

    // Watch for DOM changes inside <main> to catch late-rendering or soft-navigates
    const mainElement = document.querySelector("main");
    const mutationObserver = new MutationObserver(() => {
      refreshHeadings();
    });

    if (mainElement) {
      mutationObserver.observe(mainElement, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block w-[300px] shrink-0 pt-16">
      <div className="sticky top-[100px] border-4 border-border bg-secondary-background p-8 shadow-shadow">
        <h4 className="font-black uppercase tracking-widest text-lg mb-6 border-b-4 border-border pb-4">
          On This Page
        </h4>
        <ul className="space-y-4 font-bold text-base">
          {headings.map((heading) => (
            <li 
              key={heading.id} 
              style={{ marginLeft: heading.level === 3 ? "1.5rem" : "0" }}
            >
              <a
                href={`#${heading.id}`}
                className={`block transition-colors hover:text-main ${
                  activeId === heading.id 
                    ? "text-main underline decoration-4 underline-offset-4" 
                    : "text-foreground/70"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
