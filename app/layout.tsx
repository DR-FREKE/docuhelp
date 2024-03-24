import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocuhelpAI",
  description: "Docuhelp ai is a platform for...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#F6F6F6] text-gray-950 relative text-sm md:text-base`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
