import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import Alert from "@/components/Alert";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServerQueryDocs() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        Server Query (@app.query)
      </h1>

      <p className="mb-6 font-bold text-lg">
        Register a Python function as a JSON endpoint. It can be called from the browser without reloading.
      </p>

      <CodeBlock 
        language="python" 
        code={`from sistine import Sistine, el, fetch

app = Sistine()

@app.query
def get_cities():
    return ["Jakarta", "Tokyo", "London", "New York"]

@app.query
def get_weather(city: str):
    data = fetch(f"https://wttr.in/{city}?format=j1")
    cc = data["current_condition"][0]
    return {"temp": cc["temp_C"], "desc": cc["weatherDesc"][0]["value"]}`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4"><code>ttl</code> Parameter (Cache)</h3>
      <p className="font-bold mb-4">GET queries can be cached with <code>ttl</code> (in seconds):</p>
      
      <CodeBlock 
        language="python" 
        code={`@app.query(ttl=60)
def get_prices():
    return fetch("https://api.example.com/prices")`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4"><code>method</code> Parameter</h3>
      <p className="font-bold mb-4">Methods other than GET will automatically bypass the cache:</p>
      
      <CodeBlock 
        language="python" 
        code={`@app.query(method="POST")
def create_user(data: dict):
    return fetch("https://api.example.com/users", json_data=data)`} 
      />

      
    </div>
  );
}

