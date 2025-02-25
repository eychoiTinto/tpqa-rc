import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const pretendard = localFont({
  src: [
    {
      path: "fonts/Pretendard-Regular.otf",
      weight: "400", // Normal weight
      style: "normal",
    },
    {
      path: "fonts/Pretendard-Bold.otf",
      weight: "700", // Bold weight
      style: "normal",
    },
    {
      path: "fonts/Pretendard-SemiBold.otf",
      weight: "600", // SemiBold weight
      style: "normal",
    },
    {
      path: "fonts/Pretendard-Medium.otf",
      weight: "500", // Medium weight
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});
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
