import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DB Enterprises | Heat. Power. Air. Controls. — Calgary's Dual Red Seal Contractor",
  description:
    "Dual Red Seal certified electrical & HVAC contractor serving Calgary and Alberta. EV chargers, AC installation, heat pumps, electrical troubleshooting, controls. Call 587-333-4822.",
  keywords: [
    "electrician Calgary",
    "HVAC Calgary",
    "EV charger installation Calgary",
    "heat pumps Calgary",
    "AC installation Calgary",
    "Red Seal electrician",
    "Red Seal refrigeration",
    "DB Enterprises",
  ],
  openGraph: {
    title: "DB Enterprises | Heat. Power. Air. Controls.",
    description:
      "Dual Red Seal certified contractor — residential & commercial HVAC, electrical, refrigeration, and controls.",
    type: "website",
    locale: "en_CA",
    siteName: "DB Enterprises",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
