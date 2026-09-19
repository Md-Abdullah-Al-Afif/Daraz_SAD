import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Daraz Bangladesh — System Analysis & Design Report",
  description:
    "The full group report: System Analysis and Design of Daraz Bangladesh (CSE 346, Group 05) — every chapter, table, and figure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--color-ink)] text-[var(--color-paper)]">
        <Nav />
        <main className="md:pl-72">{children}</main>
        <footer className="border-t border-[var(--color-hair)] bg-[var(--color-ink)]/90">
          <div className="mx-auto max-w-4xl px-6 md:px-10 py-4 text-center text-[10px] text-[var(--color-paper-dim)]">
            <div className="font-mono leading-relaxed">
              © 2026 Southeast University • CSE 346 • Summer 2026 • Group 05
            </div>
            <div className="mt-2 tracking-[0.12em] uppercase text-[8.5px] text-[var(--color-paper-dim)]">
              Daraz Bangladesh System Analysis & Design
            </div>
            <div className="mt-3 font-mono text-[9.5px] text-[var(--color-paper-dim)]">
              Made with 💓 by <a href="https://mdabdullahalafif.vercel.app/" target="_blank" rel="noreferrer" className="text-[var(--color-signal)] underline underline-offset-2 hover:text-[var(--color-gold)]">Afif</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
