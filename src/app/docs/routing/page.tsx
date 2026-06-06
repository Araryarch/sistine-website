import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import Text from "@/components/Text";

export default function RoutingDocs() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        <Text id="Routing (Rute)" en="Routing" />
      </h1>

      <p className="mb-6 font-bold text-lg">
        <Text 
          id={<>Pake decorator <code>@app.sistine()</code> buat daftarin rute baru:</>}
          en={<>Use the <code>@app.sistine()</code> decorator to register a route:</>}
        />
      </p>

      <CodeBlock 
        language="python" 
        code={`from sistine import Sistine, el

app = Sistine(title="My App")

@app.sistine("/")
def home():
    return str(el.h1("Home Page"))

@app.sistine("/user/{user_id}")
def profile(user_id: int):
    return str(el.h1(f"User {user_id}"))`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id="Parameter Query" en="Query Parameters" />
      </h3>
      <p className="mb-4 font-bold text-lg">
        <Text 
          id={<>Lu bisa ngambil query parameter URL biasa (contohnya <code>?sort=asc&page=2</code>) langsung dari API bawaannya Streamlit:</>}
          en={<>You can access standard URL query parameters (e.g. <code>?sort=asc&page=2</code>) directly from Streamlit's experimental API:</>}
        />
      </p>

      <CodeBlock 
        language="python" 
        code={`import streamlit as st

@app.sistine("/search")
def search():
    query_params = st.query_params
    sort_order = query_params.get("sort", "desc")
    
    return str(el.div()(
        el.h1(f"Search Results (Sorted: {sort_order})")
    ))`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id="Navigasi Client-side" en="Client-side Navigation" />
      </h3>
      <p className="mt-8 mb-4 font-bold text-lg">
        <Text 
          id={<>Buat pindah halaman, pake parameter query <code>?route=</code> bawaannya routernya Sistine:</>}
          en={<>Navigate via the <code>?route=</code> query parameter using Sistine's router:</>}
        />
      </p>

      <CodeBlock 
        language="python" 
        code={`# This automatically changes the route without full page reload
el.a(href="/?route=/user/42")("Go to User 42")`} 
      />
    </div>
  );
}

