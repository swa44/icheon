import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이천시",
  description: "이천시 국민의힘 선거 후보자 안내",
  icons: {
    icon: [
      { url: "/assets/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/assets/57x57.png", sizes: "57x57" },
      { url: "/assets/60x60.png", sizes: "60x60" },
      { url: "/assets/72x72.png", sizes: "72x72" },
      { url: "/assets/76x76.png", sizes: "76x76" },
      { url: "/assets/114x114.png", sizes: "114x114" },
      { url: "/assets/120x120.png", sizes: "120x120" },
      { url: "/assets/144x144.png", sizes: "144x144" },
      { url: "/assets/152x152.png", sizes: "152x152" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
