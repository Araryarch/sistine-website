import CodeBlock from "@/components/CodeBlock";
import Alert from "@/components/Alert";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Text from "@/components/Text";

export default function DocsIntro() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        <Text id="Sistine — Dokumentasi Lengkap" en="Sistine — Complete Documentation" />
      </h1>

      <Alert type="info">
        <Text 
          id="Framework Python buat bikin web UI reaktif ala React, ditenagai oleh HTML/Tailwind + Alpine.js dan Streamlit."
          en="A Python framework for building React-like reactive web UIs, powered by HTML/Tailwind + Alpine.js and Streamlit."
        />
      </Alert>

      <h2 className="text-3xl font-black mt-12 mb-6">
        <Text id="1. Pengenalan" en="1. Introduction" />
      </h2>
      <p className="mb-4">
        <Text id="Streamlit emang jago buat bikin app data cepet, tapi kurang nendang di bagian:" en="Streamlit is great for fast data apps, but it falls short on:" />
      </p>
      <ul className="list-disc list-inside mb-6 font-bold space-y-2">
        <li><Text id="Kontrol CSS presisi (hover, flexbox, grid, animasi)." en="Precise CSS control (hover, flexbox, grid, animations)." /></li>
        <li><Text id="Komponen HTML kustom." en="Custom HTML components." /></li>
        <li><Text id="Arsitektur MVC beneran." en="True MVC architecture." /></li>
      </ul>

      <p className="mb-4 font-bold bg-chart-3 p-4 border-4 border-border shadow-shadow">
        <Text 
          id={<><strong>Sistine</strong> membungkus Streamlit dengan routing layer dan DOM builder (<code>el</code>). Ini ngerender HTML kustom lewat <code>st.html()</code> dengan viewport fullscreen — ngasih kamu kebebasan buat bikin <strong>UI kustom pixel-perfect</strong> sambil tetep ngoding Python di Streamlit.</>}
          en={<><strong>Sistine</strong> wraps Streamlit with a routing layer and a DOM builder (<code>el</code>). It renders custom HTML via <code>st.html()</code> with a fullscreen viewport — allowing you to create <strong>pixel-perfect custom UIs</strong> while still using Streamlit from Python.</>}
        />
      </p>

      
    </div>
  );
}

