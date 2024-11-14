import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-screen grid grid-rows-[max-content_1fr_max-content]`}
        style={{
          // bacrgb(216,208,231)kground: 'rgb(248,244,255)',
          background: 'radial-gradient(circle, rgba(233,240,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Navbar />
        <main className="container max-w-[925px]">
          {children}
        </main>
        <footer className="w-full flex justify-center p-5 relative bottom-0">
          Built with <span className="text-red-500 px-2">&hearts;</span> by naotheone
        </footer>
      </body>
    </html>
  );
}
