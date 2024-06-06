import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/Footer";
import { Providers } from "./provider";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });


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
    <html lang="en" >
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
