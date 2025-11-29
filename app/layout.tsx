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
  title: "Mini Humidifier - Compact USB Humidifier for Desk & Bedroom",
  description: "Affordable, cute, impulse-buy humidifier for desks, bedrooms, and small rooms. Whisper-quiet, USB-powered, up to 35 hours runtime.",
  keywords: ["humidifier", "mini humidifier", "desk humidifier", "USB humidifier", "quiet humidifier"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
