import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://school.sk12m.ru"),
  title: {
    default: "Beauty Detali School — школа мастеров красивого бизнеса в Санкт-Петербурге",
    template: "%s — Beauty Detali School",
  },
  description: "Курсы beauty-профессий в центре Санкт-Петербурга. Техника, сервис и личный бренд с действующими стилистами. Познакомьтесь с Beauty Detali School на бесплатном занятии.",
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
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('detali-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}` }} /></head>
      <body>{children}</body>
    </html>
  );
}
