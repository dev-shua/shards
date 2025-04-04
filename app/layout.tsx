import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const manRopeFont = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
});
const metamorphousFont = localFont({
  src: "./fonts/Metamorphous-Regular.otf",
  variable: "--font-metamorphous",
});

export const metadata: Metadata = {
  title: "Shards",
  description:
    "System for Handling Adventures, Resources, and Dynamic Storytelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manRopeFont.variable} ${metamorphousFont.variable} font-manrope antialiased bg-stone-800 text-stone-200`}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
