import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QZ",
  description: "QiitaとZennをまとめて検索",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body >{children}</body>
    </html>
  );
}
