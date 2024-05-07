import type { Metadata } from "next";
import type { Viewport } from 'next';
import "./globals.css";
import Header from './components/Header/header';
import { Podkova } from 'next/font/google'

const podkova = Podkova({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Лучшие афоризмы мира",
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>
) {
  return (
    
    
    <html lang="en">
      <body className={podkova.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
