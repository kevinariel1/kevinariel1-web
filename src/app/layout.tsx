import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio | Fullstack Developer",
  description: "Welcome to my personal portfolio. Discover my journey, skills, and fullstack projects built with modern web technologies.",
  keywords: ["Fullstack Developer", "Portfolio", "Web Development", "React", "Next.js"],
  authors: [{ name: "Myself" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Temporary inline components mapped to the layout
// We will replace these later or create separate files for them
function Navbar() {
  return (
    <nav style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '100%', top: 0, zIndex: 50 }} className="glass">
      <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Portfolio<span className="text-gradient">.</span></div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '3rem 1rem', textAlign: 'center', borderTop: '1px solid var(--surface-border)', marginTop: '4rem' }} className="glass">
      <p style={{ color: 'rgba(255,255,255,0.6)' }}>© {new Date().getFullYear()} My Portfolio. Built with Next.js & Vanilla CSS.</p>
    </footer>
  );
}
