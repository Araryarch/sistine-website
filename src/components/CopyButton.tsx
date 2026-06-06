"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast("Copied to clipboard!", {
        icon: <Check className="size-5" />
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
      toast("Failed to copy code.", {
        className: "!bg-chart-2 !text-foreground"
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 border-2 border-border bg-background hover:bg-chart-3 shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all ml-4"
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="size-4 text-chart-4 font-black" />
      ) : (
        <Copy className="size-4 text-foreground" />
      )}
    </button>
  );
}
