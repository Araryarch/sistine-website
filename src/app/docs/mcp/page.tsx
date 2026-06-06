import CodeBlock from "@/components/CodeBlock";
import Alert from "@/components/Alert";
import Text from "@/components/Text";

export default function McpDocs() {
  return (
    <div className="pb-20 animate-stagger">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        <Text id="Integrasi AI (MCP)" en="AI Integration (MCP)" />
      </h1>
      
      <p className="text-xl mb-8 font-bold leading-relaxed border-l-8 border-border pl-6 py-2 bg-chart-3 text-main-foreground shadow-shadow">
        <Text 
          id={<>Sistine udah dilengkapi dengan server <a href="https://modelcontextprotocol.io/" target="_blank" className="underline">Model Context Protocol (MCP)</a> bawaan. Lu bisa colok ini langsung ke AI assistant atau code editor favorit lu (kayak Claude Desktop, Cursor, atau Windsurf) biar si AI auto-paham cara ngoding Sistine!</>}
          en={<>Sistine comes with a built-in <a href="https://modelcontextprotocol.io/" target="_blank" className="underline">Model Context Protocol (MCP)</a> server. You can plug this directly into your AI assistant or code editor (like Claude Desktop, Cursor, or Windsurf) so the AI instantly knows how to write Sistine code!</>}
        />
      </p>

      <h3 className="text-2xl font-black mt-12 mb-4">
        <Text id="Cara Kerjanya" en="How it works" />
      </h3>
      <p className="mb-6 font-bold text-lg">
        <Text 
          id={<>Server MCP ini nyediain dokumentasi lengkap Sistine sebagai tool (<code>get_sistine_docs</code>) dan resource (<code>sistine://docs</code>). Waktu AI lu butuh bantuan buat nulis code Sistine, dia bakal otomatis nanya ke server ini alih-alih nebak-nebak atau halusinasi.</>}
          en={<>The MCP server exposes Sistine's complete documentation as a tool (<code>get_sistine_docs</code>) and resource (<code>sistine://docs</code>). When your AI needs help writing Sistine code, it will automatically query this server instead of guessing or hallucinating.</>}
        />
      </p>

      <h2 className="text-3xl font-black mt-16 mb-6 pb-2 border-b-4 border-border">
        <Text id="Setup di Claude Desktop" en="Setup in Claude Desktop" />
      </h2>
      <p className="mb-4 font-bold text-lg">
        <Text 
          id={<>Buka file konfigurasi Claude Desktop lu. Biasanya ada di:<br /><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code><br /><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></>}
          en={<>Open your Claude Desktop configuration file. You can usually find it at:<br /><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code><br /><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></>}
        />
      </p>
      <p className="mb-4 font-bold text-lg">
        <Text id="Tambahin konfigurasi server ini:" en="Add the following server configuration:" />
      </p>

      <CodeBlock 
        language="json" 
        code={`{
  "mcpServers": {
    "sistine-docs": {
      "command": "uv",
      "args": [
        "run",
        "https://raw.githubusercontent.com/Araryarch/sistine/main/docs-site/mcp-server.py"
      ]
    }
  }
}`} 
      />
      <Alert type="info">
        <Text 
          id={<>Ini manfaatin kehebatan <code>uv run</code> dari Python. AI Agent lu bakal otomatis donlot script MCP ini langsung dari GitHub, bikin <em>virtual environment</em> secara <em>on-the-fly</em>, trus langsung jalan tanpa lu perlu install apa-apa!</>}
          en={<>This utilizes the magic of Python's <code>uv run</code>. Your AI Agent will automatically download this MCP script straight from GitHub, create a virtual environment on-the-fly, and run it without you needing to install anything!</>}
        />
      </Alert>
      <Alert type="info">
        <Text 
          id={<>Sistine itu <em>framework</em> Python, jadi pendekatan pake <code>uv</code> ini kelihatan rapi banget dan nyatu sama ekosistem (<em>zero configuration, zero registry</em>). Lu <strong>NGGAK PERLU</strong> punya akun NPM sama sekali!</>}
          en={<>Sistine is a Python framework, so this <code>uv</code> approach feels super clean and fits right into the ecosystem (zero configuration, zero registry). You <strong>DO NOT</strong> need an NPM account at all!</>}
        />
      </Alert>

      <h2 className="text-3xl font-black mt-16 mb-6 pb-2 border-b-4 border-border">
        <Text id="Setup di Cursor" en="Setup in Cursor" />
      </h2>
      <p className="mb-4 font-bold text-lg">
        <Text id="Cursor udah support MCP bawaan lewat settings-nya." en="Cursor natively supports MCP via its settings." />
      </p>
      <ul className="list-disc list-inside font-bold text-lg mb-6 space-y-2">
        <li><Text id="Buka Cursor Settings." en="Open Cursor Settings." /></li>
        <li><Text id={<>Pilih menu <strong>Features</strong> &gt; <strong>MCP Servers</strong>.</>} en={<>Navigate to <strong>Features</strong> &gt; <strong>MCP Servers</strong>.</>} /></li>
        <li><Text id={<>Klik <strong>+ Add New MCP Server</strong>.</>} en={<>Click <strong>+ Add New MCP Server</strong>.</>} /></li>
        <li><Text id={<>Isi nama dengan <code>sistine-docs</code>.</>} en={<>Set the name to <code>sistine-docs</code>.</>} /></li>
        <li><Text id={<>Isi tipe dengan <code>command</code>.</>} en={<>Set the type to <code>command</code>.</>} /></li>
        <li><Text id={<>Isi command dengan: <code>uv run https://raw.githubusercontent.com/Araryarch/sistine/main/docs-site/mcp-server.py</code></>} en={<>Set the command to: <code>uv run https://raw.githubusercontent.com/Araryarch/sistine/main/docs-site/mcp-server.py</code></>} /></li>
      </ul>

      <h2 className="text-3xl font-black mt-16 mb-6 pb-2 border-b-4 border-border">
        <Text id="Cara Pake" en="Usage" />
      </h2>
      <p className="mb-4 font-bold text-lg">
        <Text id="Kalo udah beres, tinggal buka chat AI lu dan bilang aja kayak gini:" en="Once installed, simply open your AI chat and say something like:" />
      </p>
      <CodeBlock 
        language="text" 
        code={`"Use the get_sistine_docs tool to read the framework documentation, then help me build a login page."`} 
      />
      <p className="mt-4 font-bold text-lg">
        <Text id="Si AI bakal otomatis narik syntax yang bener dan bikinin UI lu dengan sempurna!" en="The AI will automatically pull the correct syntax and build the UI perfectly!" />
      </p>
    </div>
  );
}

