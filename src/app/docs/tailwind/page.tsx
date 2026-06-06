import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Text from "@/components/Text";

export default function TailwindDocs() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        Tailwind CSS
      </h1>

      <p className="mb-6 font-bold text-lg">
        <Text 
          id="Nyalain Tailwind lewat CDN — nggak perlu install Node.js segala:"
          en="Enable Tailwind CDN — no Node.js required:"
        />
      </p>

      <CodeBlock 
        language="python" 
        code={`app = Sistine()
app.use_tailwind()`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id="Contoh Pake" en="Usage Example" />
      </h3>

      <CodeBlock 
        language="python" 
        code={`@app.sistine("/")
def index():
    return str(
        el.button(cls="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded")(
            "Tailwind Button"
        )
    )`} 
      />
    </div>
  );
}

