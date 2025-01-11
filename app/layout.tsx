import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from '@/app/StoreProvider';

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
    <StoreProvider>
      <html lang="en">
        <head>
          <meta name="google-site-verification" content="lyUQZjfrYJVNOXEpYTAl66KHRsJn67BlMmCHKvd0Crs" />
        </head>
        <body className={`${Castlemar.className} antialiased`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
