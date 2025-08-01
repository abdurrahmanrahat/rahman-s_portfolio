import Providers from "@/lib/Providers/Providers";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
        <body className="bg-dark text-white">
          <div className="min-h-screen">{children}</div>
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
