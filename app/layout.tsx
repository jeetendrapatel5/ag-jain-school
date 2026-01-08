import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Marcellus, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: '--font-jakarta' 
});

const marcellus = Marcellus({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: '--font-marcellus' 
});

const dmSerif = DM_Serif_Display({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: '--font-dm-serif' 
});

export const metadata: Metadata = {
  title: "AG Jain School | 85 Years of Excellence",
  description: "CBSE-affiliated English-medium school offering quality education in Chennai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${marcellus.variable} ${dmSerif.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}