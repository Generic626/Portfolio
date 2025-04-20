import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Matthew Fung",
  description: "Welcome To My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background text-white w-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
