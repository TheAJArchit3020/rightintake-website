import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Right Intake – Personalized Nutrition Plans & Calorie Tracker",
  description:
    "Right Intake helps you discover customized nutrition plans from certified experts. Whether you're focused on fitness, managing PCOS, or improving health, find your ideal diet strategy and connect with top nutritionists and track calories progress with ease on Right Intake..",
  icons: {
    icon: "/images/header/rightintakelogo_website.png",
  },
  keywords: [
    "nutrition plans",
    "diet plans",
    "online nutritionist",
    "PCOS diet",
    "weight loss diet",
    "fitness meal plans",
    "Right Intake",
    "personalized nutrition",
    "Caorie Counter",
  ],
  openGraph: {
    title: "Right Intake – Personalized Nutrition Plans & Calorie Tracker",
    description:
      "Explore customized nutrition plans crafted by certified nutritionists. Schedule calls and track calories progress with ease on Right Intake.",
    url: "https://rightintake.com",
    type: "website",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/images/header/rightintakelogo_website.png"
          type="image/png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
