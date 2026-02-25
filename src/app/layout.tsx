import { Inter } from "next/font/google";
import "./globals.css";
import { WindowSystemProvider } from "@maomaolabs/core";
import "@maomaolabs/core/style.css";
import { OSWalkthrough } from "@/components/OSWalkthrough";
import favicon from "./favicon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MaoMao OS | @maomaolabs/core",
  description: "A standalone lightweight React library that brings a complete, performant, and responsive desktop window management experience to the web.",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WindowSystemProvider>
          <OSWalkthrough>
            {children}
          </OSWalkthrough>
        </WindowSystemProvider>
      </body>
    </html>
  );
}
