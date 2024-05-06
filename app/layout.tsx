import type { Metadata } from "next";
import type { Viewport } from 'next';
import "./globals.css";
import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';


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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
