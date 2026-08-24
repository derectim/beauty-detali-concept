import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://school.sk12m.ru"),
  title: {
    default: "Beauty Detali School — школа beauty-профессий в Санкт-Петербурге",
    template: "%s — Beauty Detali School",
  },
  description: "Практическое обучение парикмахеров, колористов, nail-мастеров, визажистов и других beauty-специалистов в Санкт-Петербурге.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Beauty Detali School",
    title: "Профессия крупным планом — Beauty Detali School",
    description: "Школа beauty-профессий с практическим обучением в Санкт-Петербурге.",
  },
  twitter: {
    card: "summary",
    title: "Профессия крупным планом — Beauty Detali School",
    description: "Школа beauty-профессий с практическим обучением в Санкт-Петербурге.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
