# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "mcp",
#     "httpx",
# ]
# ///

import httpx
from mcp.server.fastmcp import FastMCP

# Initialize FastMCP server
mcp = FastMCP("Sistine Docs Server")
remote_docs_url = "https://raw.githubusercontent.com/Araryarch/sistine/main/docs-site/public/llms.txt"

def fetch_docs() -> str:
    try:
        response = httpx.get(remote_docs_url, timeout=10.0)
        response.raise_for_status()
        return response.text
    except Exception as e:
        return f"Error fetching Sistine documentation: {str(e)}"

@mcp.resource("sistine://docs")
def get_docs_resource() -> str:
    """Read the complete Sistine framework documentation."""
    return fetch_docs()

@mcp.tool()
def get_sistine_docs() -> str:
    """Fetch the complete Sistine framework documentation to help write or scaffold code."""
    return fetch_docs()

@mcp.prompt("code-sistine")
def code_sistine(topic: str = "a basic Sistine application") -> str:
    """Ask the AI to scaffold or write Sistine framework code using the documentation."""
    docs = fetch_docs()
    return f"""You are an expert in the Sistine framework (a Python UI framework wrapping Streamlit).

Here is the documentation:
{docs}

Please help me build: {topic}"""

if __name__ == "__main__":
    mcp.run()
