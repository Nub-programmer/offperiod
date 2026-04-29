import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Offperiod | Coming Soon",
  description: "Offperiod is launching soon.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
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
