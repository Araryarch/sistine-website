import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import Alert from "@/components/Alert";
import { ArrowLeft, Home, Star } from "lucide-react";

export default function ComponentsDocs() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        Reactive Components
      </h1>

      <Alert type="info">
        All components use Alpine.js under the hood for client-side interactions without reloading.
      </Alert>

      <h3 className="text-2xl font-black mt-12 mb-4">QueryDropdown</h3>
      <p className="font-bold mb-4">Two modes: Fetch mode (retrieves from <code>@app.query</code>) or Static mode (static data).</p>
      
      <CodeBlock 
        language="python" 
        code={`from sistine.components import QueryDropdown

# Fetch mode
QueryDropdown(
    query="fetch_types",
    label_key="name",
    placeholder="Select Pokémon Type...",
)

# Static mode
QueryDropdown(
    options=[
        {"name": "Normal"},
        {"name": "Fire"},
        {"name": "Water"},
    ],
    label_key="name",
    placeholder="Select static type...",
)`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">QueryTable</h3>
      <p className="font-bold mb-4">Automatic table with pagination support:</p>
      
      <CodeBlock 
        language="python" 
        code={`from sistine.components import QueryTable

# With pagination
QueryTable(
    query="fetch_pokemon",
    columns=["id", "name", "type"],
    headers=["#", "Name", "Type"],
    params={"limit": 20},
    page_size=5,
)`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">QueryMutation</h3>
      <p className="font-bold mb-4">Write actions (POST/PUT/DELETE) with confirmation:</p>

      <CodeBlock 
        language="python" 
        code={`from sistine.components import QueryMutation

QueryMutation(
    query="add_favorite",
    method="POST",
    body_js='{ name: "Pikachu" }',
    confirm="Add Pikachu to favorites?",
    trigger=el.button(cls="bg-chart-3 text-main-foreground px-4 py-2 rounded flex items-center gap-2")(
        "<i data-lucide='star'></i> Favorite"
    ),
    on_success=el.div(x_text="data.message")(),
    on_error=el.div(x_text="error")(),
)`} 
      />

      
    </div>
  );
}

