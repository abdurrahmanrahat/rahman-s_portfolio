import Providers from "@/lib/Providers/Providers";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdur Rahman",
  description: "Portfolio of Me",
};

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // as needed
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <Providers>
        <body
          className={` ${quicksand.className} bg-white dark:bg-dark text-gray-900 dark:text-gray-100 transition-all duration-300`}
        >
          <div className="min-h-screen">{children}</div>
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
