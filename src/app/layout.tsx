import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitionProvider } from "@/components/animated-link/view-transition-provider";
import { HeadTitleProvider } from "@/components/head-title";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Footer } from "./footer";

const font = Inter({ subsets: ["latin"] });

export { metadata } from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitionProvider>
      <HeadTitleProvider>
        <html lang="en" className="dark">
          <body className={cn("antialiased", font.className)}>
            {children}
            <Footer />
            <Toaster />
          </body>
        </html>
      </HeadTitleProvider>
    </ViewTransitionProvider>
  );
}
