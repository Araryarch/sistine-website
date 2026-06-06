import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import Text from "@/components/Text";

export default function Installation() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        <Text id="Instalasi" en="Installation" />
      </h1>

      <p className="mb-6 font-bold text-lg">
        <Text 
          id={<>Sistine butuh Python 3.10+ ke atas. <code>streamlit</code> bakal otomatis diinstall sebagai engine utama di baliknya.</>}
          en={<>Sistine requires Python 3.10+. <code>streamlit</code> will be automatically installed as the underlying framework engine.</>}
        />
      </p>

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id="Pake uv (Sangat Disarankan)" en="Using uv (Recommended)" />
      </h3>
      <p className="mb-4 font-bold">
        <Text 
          id={<>Kita bener-bener nyaranin pake <a href="https://docs.astral.sh/uv/" target="_blank" className="text-chart-1 underline hover:text-chart-5 transition-colors">uv</a> biar installnya secepat kilat. Ini juga ngebantu banget buat bikin virtual environment tanpa ribet.</>}
          en={<>We highly recommend using <a href="https://docs.astral.sh/uv/" target="_blank" className="text-chart-1 underline hover:text-chart-5 transition-colors">uv</a> for a much faster installation experience. It will also help you create your virtual environment seamlessly.</>}
        />
      </p>

      <CodeBlock 
        language="bash" 
        code={`# 1. Create a virtual environment
uv venv

# 2. Activate the virtual environment
# On Windows:
.venv\\Scripts\\activate
# On macOS/Linux:
source .venv/bin/activate

# 3. Install sistine
uv pip install sistine`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id="Pake pip Standar" en="Using Standard pip" />
      </h3>
      <p className="mb-4 font-bold">
        <Text 
          id="Kalo lu lebih suka pake bawaan standar Python, pastiin lu udah ada di virtual environment, trus install pake pip:"
          en="If you prefer the standard Python toolchain, make sure you are in a virtual environment, then install via pip:"
        />
      </p>

      <CodeBlock 
        language="bash" 
        code={`# Create and activate venv
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install sistine
pip install sistine`} 
      />

      
    </div>
  );
}

