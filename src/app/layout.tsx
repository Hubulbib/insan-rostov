import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarComponent from "insan/components/nav-bar.component";
import FooterComponent from "insan/components/footer.component";
import { Metrika } from "insan/components/yandex-metric.components";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Инсан Ростов",
  description: "Помогаем всем вместе",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" type="image/x-icon" />
        <meta name="yandex-verification" content="a0b1c905bf8c723f" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Metrika />
        <div className="app">
          <NavBarComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
