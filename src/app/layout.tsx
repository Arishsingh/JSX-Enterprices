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
  metadataBase: new URL("https://jsxenterprises.in"),
  title: "JSK Enterprises",
  description:
    "JSK Enterprises is an Indian owned engineering company specializing in the fields of Water & Waste Water Treatment, Plumbing & Fire Fighting services.",
  openGraph: {
    title: "JSK Enterprises",
    description:
      "Indian-owned MEP contractor specialising in Water Treatment, Plumbing & Fire Fighting. Vadodara · Ahmedabad · Pan India.",
    url: "https://jsxenterprises.in",
    siteName: "JSK Enterprises",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "JSK Enterprises – Water Treatment, Plumbing & Fire Fighting",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSK Enterprises",
    description:
      "Indian-owned MEP contractor specialising in Water Treatment, Plumbing & Fire Fighting. Vadodara · Ahmedabad · Pan India.",
    images: ["/hero.png"],
  },
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
