import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import Alert from "@/components/Alert";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Text from "@/components/Text";

export default function ServerQueryDocs() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        <Text id="Query Server (@app.query)" en="Server Query (@app.query)" />
      </h1>

      <p className="mb-6 font-bold text-lg">
        <Text 
          id="Daftarin fungsi Python jadi endpoint JSON. Fungsi ini bisa dipanggil langsung dari browser tanpa perlu reload halaman."
          en="Register a Python function as a JSON endpoint. It can be called from the browser without reloading."
        />
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

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id={<>Parameter <code>ttl</code> (Cache)</>} en={<><code>ttl</code> Parameter (Cache)</>} />
      </h3>
      <p className="font-bold mb-4">
        <Text 
          id={<>Query GET bisa di-cache pake parameter <code>ttl</code> (dalam detik):</>}
          en={<>GET queries can be cached with <code>ttl</code> (in seconds):</>}
        />
      </p>
      
      <CodeBlock 
        language="python" 
        code={`@app.query(ttl=60)
def get_prices():
    return fetch("https://api.example.com/prices")`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id={<>Parameter <code>method</code></>} en={<><code>method</code> Parameter</>} />
      </h3>
      <p className="font-bold mb-4">
        <Text 
          id="Method selain GET bakal otomatis ngebypass cache:"
          en="Methods other than GET will automatically bypass the cache:"
        />
      </p>
      
      <CodeBlock 
        language="python" 
        code={`@app.query(method="POST")
def create_user(data: dict):
    return fetch("https://api.example.com/users", json_data=data)`} 
      />
    </div>
  );
}

