import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import Text from "@/components/Text";

export default function CliDocs() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        <Text id="CLI & Kerangka" en="CLI & Scaffolding" />
      </h1>

      <p className="mb-6 font-bold text-lg">
        <Text 
          id="Sistine nyediain tool command-line buat mempermudah pembuatan dan manajemen project lu."
          en="Sistine provides command-line tools to streamline project creation and management."
        />
      </p>

      <CodeBlock 
        language="bash" 
        code={`# Initialize an MVC project in the current directory
sistine init

# Initialize in a specific directory
sistine init my_project

# Run the server (default: main.py)
sistine run

# Run a specific file with auto-reload
sistine run app.py

# Build static HTML (exports to /dist)
sistine build main.py --out dist`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id="Struktur Project" en="Project Structure" />
      </h3>
      <p className="mb-4 font-bold text-lg">
        <Text 
          id={<>Jalanin <code>sistine init</code> bakal langsung ngebangun struktur MVC (Model-View-Controller) yang siap buat production:</>}
          en={<>Running <code>sistine init</code> will scaffold a production-ready MVC (Model-View-Controller) structure:</>}
        />
      </p>

      <CodeBlock 
        language="text" 
        code={`my_project/
├── main.py             # App entry point & router
├── controllers/        # Business logic and @app.query endpoints
│   └── home_ctrl.py
├── views/              # UI components using el.* builder
│   ├── layout.py       # Base HTML structure
│   └── home_view.py    # Specific page views
├── models/             # Database/Data layer
└── assets/             # Static files (CSS, images, etc.)`} 
      />

      
    </div>
  );
}

