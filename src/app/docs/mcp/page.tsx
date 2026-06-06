import CodeBlock from "@/components/CodeBlock";
import Alert from "@/components/Alert";

export default function McpDocs() {
  return (
    <div className="pb-20 animate-stagger">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        AI Integration (MCP)
      </h1>
      
      <p className="text-xl mb-8 font-bold leading-relaxed border-l-8 border-border pl-6 py-2 bg-chart-3 text-main-foreground shadow-shadow">
        Sistine comes with a built-in <a href="https://modelcontextprotocol.io/" target="_blank" className="underline">Model Context Protocol (MCP)</a> server. You can plug this directly into your AI assistant or code editor (like Claude Desktop, Cursor, or Windsurf) so the AI instantly knows how to write Sistine code!
      </p>

      <h3 className="text-2xl font-black mt-12 mb-4">How it works</h3>
      <p className="mb-6 font-bold text-lg">
        The MCP server exposes Sistine's complete documentation as a tool (<code>get_sistine_docs</code>) and resource (<code>sistine://docs</code>). When your AI needs help writing Sistine code, it will automatically query this server instead of guessing or hallucinating.
      </p>

      <h2 className="text-3xl font-black mt-16 mb-6 pb-2 border-b-4 border-border">Setup in Claude Desktop</h2>
      <p className="mb-4 font-bold text-lg">
        Open your Claude Desktop configuration file. You can usually find it at:
        <br />
        <strong>Windows:</strong> <code>%APPDATA%\\Claude\\claude_desktop_config.json</code>
        <br />
        <strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>
      </p>
      <p className="mb-4 font-bold text-lg">Add the following server configuration:</p>

      <CodeBlock 
        language="json" 
        code={`{
  "mcpServers": {
    "sistine-docs": {
      "command": "uv",
      "args": [
        "run",
        "https://raw.githubusercontent.com/araryarch/sistine/main/docs-site/mcp-server.py"
      ]
    }
  }
}`} 
      />
      <Alert type="info">
        Ini menggunakan kehebatan <code>uv run</code> dari Python. AI Agent Anda akan secara otomatis mengunduh script MCP ini langsung dari GitHub Anda, membuat <em>virtual environment</em> secara <em>on-the-fly</em>, lalu menjalankannya tanpa Anda perlu meng-install apa pun!
      </Alert>
      <Alert type="tip">
        Sistine adalah <em>framework</em> Python, jadi pendekatan menggunakan <code>uv</code> ini terlihat sangat rapi dan menyatu dengan ekosistem (<em>zero configuration, zero registry</em>). Anda <strong>TIDAK PERLU</strong> memiliki akun NPM sama sekali!
      </Alert>

      <h2 className="text-3xl font-black mt-16 mb-6 pb-2 border-b-4 border-border">Setup in Cursor</h2>
      <p className="mb-4 font-bold text-lg">
        Cursor natively supports MCP via its settings.
      </p>
      <ul className="list-disc list-inside font-bold text-lg mb-6 space-y-2">
        <li>Open Cursor Settings.</li>
        <li>Navigate to <strong>Features</strong> &gt; <strong>MCP Servers</strong>.</li>
        <li>Click <strong>+ Add New MCP Server</strong>.</li>
        <li>Set the name to <code>sistine-docs</code>.</li>
        <li>Set the type to <code>command</code>.</li>
        <li>Set the command to: <code>uv run https://raw.githubusercontent.com/araryarch/sistine/main/docs-site/mcp-server.py</code></li>
      </ul>

      <h2 className="text-3xl font-black mt-16 mb-6 pb-2 border-b-4 border-border">Usage</h2>
      <p className="mb-4 font-bold text-lg">
        Once installed, simply open your AI chat and say something like:
      </p>
      <CodeBlock 
        language="text" 
        code={`"Use the get_sistine_docs tool to read the framework documentation, then help me build a login page."`} 
      />
      <p className="mt-4 font-bold text-lg">
        The AI will automatically pull the correct syntax and build the UI perfectly!
      </p>
    </div>
  );
}

