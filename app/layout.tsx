import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ReferCheck - A better decision for you",
  description: "A Better Decision for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
