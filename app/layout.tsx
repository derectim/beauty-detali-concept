import type { Metadata } from "next";
import "./globals.css";
import { indexingEnabled, schoolSiteUrl } from "./search-config";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(schoolSiteUrl),
  title: {
    default: "Школа парикмахеров и бьюти-профессий в СПб — Beauty Detali School",
    template: "%s — Beauty Detali School",
  },
  description: "Курсы парикмахеров, колористики, маникюра, визажа, бровей и ресниц в Санкт-Петербурге. Beauty Detali School — в минуте от метро Владимирская. Бесплатное пробное занятие.",
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
  // Enable indexing only when the approved site replaces the production school.
  robots: { index: indexingEnabled, follow: indexingEnabled },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('detali-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}` }} /></head>
      <body>{children}</body>
    </html>
  );
}
