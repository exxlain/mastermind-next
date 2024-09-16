import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Castlemar = localFont({
  src: "./fonts/CastlemarRegular.otf",
});

export const metadata: Metadata = {
  title: "Mastermind game",
  description: "web version",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Castlemar.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
