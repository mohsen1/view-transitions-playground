import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email App",
  description: "A simple email application built with Next.js",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { section: string };
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <Head>
            <meta name="view-transition" content="same-origin" />
          </Head>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
