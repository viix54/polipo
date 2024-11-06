import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { nextSsrCssPlugin } from "polipo/next";
import { FigmaProvider, devPlugin, googleFontsPlugin } from "polipo/react";

import layoutData from '../../src/app/layout2.json';

import * as fs from 'node:fs';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  (() => {
    console.log(process.env.NODE_ENV)
  })()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FigmaProvider
          layoutData={layoutData}
          plugins={[
            ...(process.env.NODE_ENV === "development" ? [devPlugin] : []),
            nextSsrCssPlugin,
            googleFontsPlugin,
          ]}
        >
          {children}
        </FigmaProvider>
      </body>
    </html>
  );
}
