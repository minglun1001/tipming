import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TipMing",
  description: "Personal donation website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
