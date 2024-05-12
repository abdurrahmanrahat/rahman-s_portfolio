import Providers from "@/lib/Providers/Providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdur Rahman",
  description: "Portfolio of Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <Providers>
        <body className={roboto.className}>
          <div className="min-h-screen">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
