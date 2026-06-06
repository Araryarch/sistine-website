import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TableOfContents from "@/components/TableOfContents";
import DocsPagination from "@/components/DocsPagination";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-chart-3 selection:text-foreground">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <main className="flex-1 lg:ml-[250px] p-8 md:p-12 lg:p-16 min-h-[calc(100vh-70px)] w-full relative">
          
          {/* Subtle Watermark Background */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-fixed bg-cover bg-center"
            style={{ backgroundImage: 'url("/sistine-bg.png")' }}
          ></div>
          
          <div className="relative z-10 flex justify-between gap-12 animate-stagger max-w-[1400px] mx-auto">
            <div className="flex-1 max-w-4xl min-w-0">
              {children}
              <DocsPagination />
            </div>
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  );
}
