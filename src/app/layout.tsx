import type { Metadata } from "next";
import { Outfit, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-subheading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JSk Enterprises",
  description:
    "JSX Enterprises is an Indian owned engineering company specializing in the fields of Water & Waste Water Treatment, Plumbing & Fire Fighting services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
