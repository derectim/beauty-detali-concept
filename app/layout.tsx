import type { Metadata } from "next";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://school.sk12m.ru"),
  title: {
    default: "Beauty Detali School — школа beauty-профессий в Санкт-Петербурге",
    template: "%s — Beauty Detali School",
  },
  description: "Практическое обучение парикмахеров, колористов, nail-мастеров, визажистов и других beauty-специалистов в Санкт-Петербурге.",
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Beauty Detali School",
    title: "Профессия, в которой видно вас — Beauty Detali School",
    description: "Практическая школа beauty-профессий в Санкт-Петербурге: 30+ программ, две площадки и обучение на моделях.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Beauty Detali School — школа beauty-профессий в Санкт-Петербурге" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Профессия, в которой видно вас — Beauty Detali School",
    description: "Практическая школа beauty-профессий в Санкт-Петербурге.",
    images: ["/og.png"],
  },
  robots: isGitHubPages
    ? {
        index: false,
        follow: false,
      }
    : {
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
