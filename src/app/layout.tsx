import Header from "@/components/header";
import Chat from "@/components/chat";

import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "Expert Listing",
  description: "A real estate expert listing platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <Header />
        {children}
        <Chat />
      </body>
    </html>
  );
}
