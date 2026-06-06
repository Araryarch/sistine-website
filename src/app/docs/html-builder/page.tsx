import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import Alert from "@/components/Alert";

export default function HtmlBuilderDocs() {
  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-8 border-border pb-4">
        HTML Builder (el)
      </h1>

      <p className="mb-6 font-bold text-lg">
        Build HTML with chaining syntax — attributes first, children after:
      </p>

      <CodeBlock 
        language="python" 
        code={`el.div(cls="card p-4 rounded shadow")(
    el.h2(cls="text-xl font-bold")("Title"),
    el.p(cls="text-gray-600")("Description")
)`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">Special Attributes</h3>
      <div className="overflow-x-auto border-4 border-border shadow-shadow my-6">
        <table className="w-full text-left font-bold border-collapse">
          <thead>
            <tr className="bg-chart-4 text-main-foreground border-b-4 border-border">
              <th className="p-4 border-r-4 border-border">Python</th>
              <th className="p-4">HTML Output</th>
            </tr>
          </thead>
          <tbody className="bg-secondary-background text-foreground">
            <tr className="border-b-4 border-border">
              <td className="p-4 border-r-4 border-border"><code>cls=</code> / <code>className=</code></td>
              <td className="p-4"><code>class="..."</code></td>
            </tr>
            <tr className="border-b-4 border-border">
              <td className="p-4 border-r-4 border-border"><code>html_for=</code></td>
              <td className="p-4"><code>for="..."</code></td>
            </tr>
            <tr className="border-b-4 border-border">
              <td className="p-4 border-r-4 border-border"><code>x_on_click=</code></td>
              <td className="p-4"><code>x-on:click="..."</code></td>
            </tr>
            <tr>
              <td className="p-4 border-r-4 border-border"><code>x_bind_href=</code></td>
              <td className="p-4"><code>x-bind:href="..."</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Alert type="warning">
        The <code>style</code> attribute can be a string or a dict: <code>el.div(style=&#123;"display": "flex"&#125;)()</code>
      </Alert>

      <h3 className="text-2xl font-black mt-12 mb-4">Data Attributes & Custom Tags</h3>
      <p className="mb-4 font-bold text-lg">
        You can pass any custom <code>data-*</code> attribute by using kwargs. You can also create entirely custom HTML tags using <code>el.tag()</code>.
      </p>

      <CodeBlock 
        language="python" 
        code={`# Data attributes
el.div(data_user_id="123", data_role="admin")("Profile")
# Output: <div data-user-id="123" data-role="admin">Profile</div>

# Custom tags
el.tag("my-custom-element", cls="awesome")(
    el.span()("Inside custom element")
)
# Output: <my-custom-element class="awesome"><span>Inside custom element</span></my-custom-element>`} 
      />

      <h3 className="text-2xl font-black mt-12 mb-4">Self-closing Tags</h3>
      <CodeBlock 
        language="python" 
        code={`el.input(type="text", name="username")()
el.img(src="avatar.png", alt="Avatar")()
el.br()`} 
      />

      
    </div>
  );
}

