import type { Metadata } from "next";
import "./globals.css";
import { indexingEnabled, schoolSiteUrl } from "./search-config";
import { SiteHeader, SiteFooter } from "./site-shell";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(schoolSiteUrl),
  title: {
    default: "Школа парикмахеров и бьюти-профессий в СПб — Beauty Detali School",
    template: "%s — Beauty Detali School",
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico?v=detali-1`, sizes: "16x16 32x32 48x48" },
      { url: `${basePath}/favicon-32.png?v=detali-1`, type: "image/png", sizes: "32x32" },
      { url: `${basePath}/favicon.svg?v=detali-1`, type: "image/svg+xml", sizes: "any" },
    ],
    apple: { url: `${basePath}/apple-touch-icon.png?v=detali-1`, sizes: "180x180" },
  },
  // Enable indexing only when the approved site replaces the production school.
  robots: { index: indexingEnabled, follow: indexingEnabled },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('detali-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}` }} /></head>
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
