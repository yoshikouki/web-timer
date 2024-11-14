import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitionProvider } from "@/components/animated-link/view-transition-provider";
import { HeadTitle, HeadTitleProvider } from "@/components/head-title";
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
          <head>
            <HeadTitle />
          </head>
          <body className={cn("antialiased", font.className)}>
            {children}
            <Footer />
          </body>
        </html>
      </HeadTitleProvider>
    </ViewTransitionProvider>
  );
}
