import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Session Token",
  description: "Project created to study how to implement a full login system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <html lang="en">
      <body className={`${inter.className} dark:bg-zinc-950 dark:text-zinc-200`}>
        {children}
      </body>
    </html>
  </>;
}
