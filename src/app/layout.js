import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Matthew Fung",
  description: "Welcome To My Portfolio",
  icon: [{ url: "/assets/avatar.png", type: "image/png" }],
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
