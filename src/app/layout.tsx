import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin | Fullstack Developer",
  description: "I'm Kevin, a Computer Science Bachelor from Indonesia focusing on the MERN and PERN stacks.",
  keywords: ["Kevin", "Fullstack Developer", "MERN Stack", "PERN Stack", "Portfolio"],
  authors: [{ name: "Kevin" }],
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
function Footer() {
  return (
    <footer style={{ padding: '3rem 1rem', textAlign: 'center', borderTop: '1px solid var(--surface-border)', marginTop: '4rem' }} className="glass">
      <p style={{ color: 'rgba(255,255,255,0.6)' }}>© {new Date().getFullYear()} Kevin. Built with Next.js & Vanilla CSS.</p>
    </footer>
  );
}
