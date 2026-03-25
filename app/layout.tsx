import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ConvertMaster | Convert Metric, Imperial & Local Units",
    template: "%s | ConvertMaster",
  },
  description: "Free online unit converter for length, weight, temperature, area, volume, time, speed, and more. Supports US, UK, Metric, and Indian units.",
  keywords: ["unit converter", "calculator", "metric conversion", "imperial conversion", "measurement converter", "online tool", "indian units", "bigha", "gaj"],
  authors: [{ name: "Rajeev" }],
  creator: "Rajeev",
  publisher: "Universal Converter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Universal Unit Converter",
    description: "Simple, fast, and accurate unit converter for all your needs.",
    siteName: "Universal Unit Converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Unit Converter",
    description: "Simple, fast, and accurate unit converter for all your needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
