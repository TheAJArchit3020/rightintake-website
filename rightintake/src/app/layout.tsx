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
  title: "Right Intake – AI Calorie Estimator from Meal Photos",
  description:
    "Right Intake uses AI to estimate calories, protein, and macros from a photo of your meal. Built for Indian food and busy lives — no weighing, no manual tracking.",
  icons: {
    icon: "/images/header/rightintakelogo_website.png",
  },
  keywords: [
    "AI calorie tracker",
    "photo calorie estimator",
    "Indian food calorie counter",
    "calorie tracker app",
    "protein tracking",
    "Right Intake",
    "calorie app India",
    "automatic food logging",
    "nutrition AI app",
    "calorie counting made easy",
  ],
  alternates: {
    canonical: "https://rightintake.com",
  },
  openGraph: {
    title: "Right Intake – AI Calorie Estimator from Meal Photos",
    description:
      "Track calories and macros by just clicking a photo. Right Intake uses AI to estimate nutrition values — built for Indian food and fast tracking.",
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
