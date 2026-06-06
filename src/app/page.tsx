import Link from "next/link";
import Header from "@/components/Header";
import { codeToHtml } from "shiki";

export default async function Home() {
  const codeString = `from sistine import Sistine, el

app = Sistine(title="My App")

@app.sistine("/")
def home():
    return str(
        el.div(cls="p-4 bg-chart-3 border-4 border-border")(
            el.h1(cls="text-2xl font-black")("Awesome!"),
            el.button(x_on_click="alert('Hi')")("Click")
        )
    )`;

  let highlightedCode = "";
  try {
    highlightedCode = await codeToHtml(codeString, {
      lang: "python",
      theme: "vitesse-dark",
    });
  } catch (e) {
    highlightedCode = `<pre><code>${codeString}</code></pre>`;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-base selection:bg-main selection:text-main-foreground">
      <Header />
      
      <main className="flex-1 flex flex-col bg-secondary-background">
        <div className="max-w-[1400px] w-full mx-auto border-x-4 border-border grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-70px)] bg-background">
          
          {/* Left Vertical Banner (Japanese Style) */}
          <div className="hidden lg:flex col-span-1 border-r-4 border-border bg-chart-2 items-center justify-center p-4 shadow-[inset_-4px_0_0_0_rgba(0,0,0,0.1)] overflow-hidden relative">
            <div className="flex flex-col items-center animate-marquee-vertical absolute top-0 w-full pt-[100%] pb-[100%]">
              <h1 className="writing-vertical-rl text-orientation-upright text-5xl font-black text-main-foreground tracking-[0.4em] uppercase mb-16">
                システィーナ
              </h1>
              <h1 className="writing-vertical-rl text-orientation-upright text-5xl font-black text-main-foreground tracking-[0.4em] uppercase mb-16 opacity-50">
                システィーナ
              </h1>
              <h1 className="writing-vertical-rl text-orientation-upright text-5xl font-black text-main-foreground tracking-[0.4em] uppercase mb-16 opacity-20">
                システィーナ
              </h1>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-1 lg:col-span-11 flex flex-col">
            
            {/* Top Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-border flex-1">
              
              {/* Text Box */}
              <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-border bg-main relative overflow-hidden group">
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: 'url("/sistine-bg.png")' }}
                ></div>
                
                <div className="animate-stagger">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tighter text-main-foreground uppercase z-10">
                    Build UIs <br/>
                    <span className="bg-background text-foreground px-4 py-2 border-4 border-border inline-block mt-4 shadow-shadow">
                      With Python
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl font-bold text-main-foreground mb-12 max-w-xl border-l-8 border-border pl-6 py-2 bg-main z-10">
                    Sistine wraps Streamlit with a routing layer, DOM builder, and reactive components—giving you pixel-perfect custom UI.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 z-10">
                    <Link href="/docs" className="bg-chart-4 text-main-foreground font-black text-xl px-8 py-4 border-4 border-border shadow-[4px_4px_0px_0px_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all text-center uppercase">
                      Get Started
                    </Link>
                    <a href="https://github.com/araryarch/sistine" target="_blank" rel="noreferrer" className="bg-background text-foreground font-black text-xl px-8 py-4 border-4 border-border shadow-[4px_4px_0px_0px_var(--border)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all text-center uppercase">
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Floating Mascot Window */}
                <div className="hidden xl:flex absolute bottom-8 right-8 w-64 flex-col border-4 border-border bg-background shadow-shadow z-20 hover:!rotate-0 transition-transform animate-float opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center gap-2 px-3 py-2 border-b-4 border-border bg-chart-1">
                    <div className="size-3 border-2 border-border bg-chart-5"></div>
                    <div className="size-3 border-2 border-border bg-chart-3"></div>
                    <div className="font-black text-xs uppercase tracking-widest ml-auto">Sistine.exe</div>
                  </div>
                  <img src="/sistine.png" alt="Sistine" className="w-full aspect-video object-cover" />
                </div>
              </div>

              {/* Code Box */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex items-center justify-center bg-secondary-background bg-[radial-gradient(#d1d1d1_2px,transparent_2px)] [background-size:24px_24px] dark:bg-[radial-gradient(#333_2px,transparent_2px)] relative">
                {/* Mobile Mascot */}
                <img src="/sistine.png" alt="Sistine" className="xl:hidden absolute top-4 right-4 w-32 border-4 border-border shadow-shadow object-cover aspect-video z-20 animate-float opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "0.4s" }} />
                
                <div className="w-full relative z-10 animate-slide-up opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "0.2s" }}>
                  <div className="absolute inset-0 bg-chart-1 border-4 border-border translate-x-4 translate-y-4 z-0"></div>
                  <div className="relative bg-[#121212] border-4 border-border z-10 flex flex-col h-full shadow-shadow">
                    <div className="flex items-center gap-3 px-4 py-3 border-b-4 border-border bg-chart-5">
                      <div className="size-4 border-4 border-border bg-chart-2"></div>
                      <div className="size-4 border-4 border-border bg-chart-3"></div>
                      <div className="size-4 border-4 border-border bg-chart-4"></div>
                      <div className="ml-auto font-black text-main-foreground tracking-widest text-sm uppercase">main.py</div>
                    </div>
                    <div 
                      className="p-6 overflow-x-auto text-sm font-base font-bold [&>pre]:!bg-transparent"
                      dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Features Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-background border-b-4 border-border">
              <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-border hover:bg-chart-2 hover:text-main-foreground transition-colors group flex flex-col">
                <div className="text-5xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">01</div>
                <h3 className="text-2xl font-black mb-4 uppercase">HTML Builder</h3>
                <p className="font-bold text-lg mt-auto">Build HTML with a chaining syntax—attributes first, children after. Full CSS control.</p>
              </div>
              <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-border hover:bg-chart-3 hover:text-main-foreground transition-colors group flex flex-col">
                <div className="text-5xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">02</div>
                <h3 className="text-2xl font-black mb-4 uppercase">Reactive Client</h3>
                <p className="font-bold text-lg mt-auto">Alpine.js powered components. Talk to your <code>@app.query</code> endpoints without reloading.</p>
              </div>
              <div className="p-8 hover:bg-chart-4 hover:text-main-foreground transition-colors group flex flex-col">
                <div className="text-5xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">03</div>
                <h3 className="text-2xl font-black mb-4 uppercase">MVC Architecture</h3>
                <p className="font-bold text-lg mt-auto">Decorator-based routing with path params. Keep logic organized with views and controllers.</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
