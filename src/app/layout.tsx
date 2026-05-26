import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-subheading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JSK Enterprises",
  description:
    "JSK Enterprises is an Indian owned engineering company specializing in the
fields of Water & Waste Water Treatment, Plumbing & Fire Fighting services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
