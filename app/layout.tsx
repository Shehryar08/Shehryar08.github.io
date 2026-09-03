import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shehryar08.github.io"),
  title: "Mian Shehryar Hassan | Computer Science and Quality Engineering",
  description: "Portfolio of Mian Shehryar Hassan, a Computer Science student contributing to software quality and release validation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mian Shehryar Hassan | Portfolio",
    description: "Computer Science, quality engineering, networking, and dependable software.",
    url: "/",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Mian Shehryar Hassan | Portfolio",
    description: "Computer Science, quality engineering, networking, and dependable software.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const themeScript = `
  (() => {
    document.documentElement.classList.add('js');
    const stored = localStorage.getItem('shehryar-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = stored || preferred;
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>{children}</body></html>;
}
