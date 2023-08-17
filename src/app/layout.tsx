import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PC Hub",
  description: "Best place to buy your next PC",
  icons: "", //path to favicon
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="p-10 2xl:p-40 bg-slate-400">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
