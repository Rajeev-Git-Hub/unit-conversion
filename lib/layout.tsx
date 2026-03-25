import React from 'react';

export const metadata = {
  title: 'ConvertMaster',
  description: 'Universal Unit Converter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}