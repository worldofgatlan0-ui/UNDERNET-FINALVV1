import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNDERNET — Your world, connected",
  description: "A neon-lit social universe for messages, videos, communities, and calls.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
