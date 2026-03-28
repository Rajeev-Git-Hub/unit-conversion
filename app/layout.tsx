import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import Script from "next/script";
import SchemaMarkup from "../components/SchemaMarkup";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

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
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {/* Schema Markup for Website */}
        <SchemaMarkup type="WebSite" />
        {/* Schema Markup for Software Application */}
        <SchemaMarkup type="SoftwareApplication" data={{ name: "ConvertMaster Unit Converter" }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceOptimizer />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
