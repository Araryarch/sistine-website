import CodeBlock from "@/components/CodeBlock";
import Alert from "@/components/Alert";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DocsIntro() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        Sistine — Complete Documentation
      </h1>

      <Alert type="info">
        A Python framework for building React-like reactive web UIs, powered by HTML/Tailwind + Alpine.js and Streamlit.
      </Alert>

      <h2 className="text-3xl font-black mt-12 mb-6">1. Introduction</h2>
      <p className="mb-4">
        Streamlit is great for fast data apps, but it falls short on:
      </p>
      <ul className="list-disc list-inside mb-6 font-bold space-y-2">
        <li>Precise CSS control (hover, flexbox, grid, animations).</li>
        <li>Custom HTML components.</li>
        <li>True MVC architecture.</li>
      </ul>

      <p className="mb-4 font-bold bg-chart-3 p-4 border-4 border-border shadow-shadow">
        <strong>Sistine</strong> wraps Streamlit with a routing layer and a DOM builder (<code>el</code>). It renders custom HTML via <code>st.html()</code> with a fullscreen viewport — allowing you to create <strong>pixel-perfect custom UIs</strong> while still using Streamlit from Python.
      </p>

      
    </div>
  );
}

