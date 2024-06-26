import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import noise from "@/assets/noise.png"

const montserrat = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  bg-gray-100 overflow-x-hidden`} style={{
        backgroundImage: `url(${noise.src})`,
        backgroundSize: "100px 100px", // Adjust this to match your image size
        backgroundPosition: "0 0",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",

      }}>{children}</body>
    </html>
  );
}
