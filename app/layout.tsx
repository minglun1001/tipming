import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TipMing",
  description: "Support my content",
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
