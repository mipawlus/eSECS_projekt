import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "eSECS - System Ewidencji Czasu Służby",
  description: "System ewidencji czasu służby strażaków PSP/OSP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
