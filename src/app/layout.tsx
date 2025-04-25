import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Sofiia Atamaniuk Portfolio",
  description:
    "Frontend Developer Portfolio built with Next.js and Tailwind CSS",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
        <main className="px-4 py-6 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
