import { Geist } from "next/font/google";
import { SITE_METADATA } from "@/content";
import { JsonLd } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className="bg-gray-950 text-gray-100 antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
