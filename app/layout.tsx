import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./provider";



export const metadata: Metadata = {
  title: "Uifry",
  description: "Your Finance App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
        <Navbar></Navbar>
        <main className="relative overflow-hidden">
          
        {children}
        </main>
        
        <Footer></Footer>
        </Providers>
        </body>
    </html>
  );
}
