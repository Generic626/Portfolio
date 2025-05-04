import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Matthew Fung",
  description: "Welcome To My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`bg-background text-white w-screen overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
