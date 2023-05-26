import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exchange Rate CAD",
  description:
    "Currency converter tool provides foreign exchange rates by Mastercard",
  appleWebApp: {
    statusBarStyle: "default",
    capable: true, // Whether the web app is capable of full-screen display.
    title: "Exchange Rate CAD"
  },
  applicationName: "Exchange Rate CAD",
  icons: {
    icon: "/icons/icon-512x512.png"
  },
  themeColor: "#000",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
