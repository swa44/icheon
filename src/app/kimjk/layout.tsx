import type { Metadata } from "next";
import NavGuideScript from "./components/NavGuideScript";
import "./kimjk-styles.css";

export const metadata: Metadata = {
  title: "이천시의원 김재국",
  description: "시민의 일상을 바꾸는 생활정치",
  openGraph: {
    url: "https://xn--hu5bi8g.com/kimjk",
    type: "website",
    title: "이천시의원 김재국",
    description: "시민의 일상을 바꾸는 생활정치",
    images: [
      "https://postfiles.pstatic.net/MjAyNjAxMTJfOTIg/MDAxNzY4MjAyNjYzODQ1.keP3S4A7Arj6rJsR8LLMaoViqBEvKJ7DNeZX-Iqu4v8g.MGVYluCiiiVyKsqakc-2aYooUzDyosXmrSUAhfLm4EAg.JPEG/meta.jpg?type=w966",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이천시의원 김재국",
    description: "시민의 일상을 바꾸는 생활정치",
    images: [
      "https://postfiles.pstatic.net/MjAyNjAxMTJfOTIg/MDAxNzY4MjAyNjYzODQ1.keP3S4A7Arj6rJsR8LLMaoViqBEvKJ7DNeZX-Iqu4v8g.MGVYluCiiiVyKsqakc-2aYooUzDyosXmrSUAhfLm4EAg.JPEG/meta.jpg?type=w966",
    ],
  },
  icons: {
    icon: [
      { url: "/kimjk/assets/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/kimjk/assets/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/kimjk/assets/96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/kimjk/assets/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/kimjk/assets/196x196.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [
      { url: "/kimjk/assets/57x57.png", sizes: "57x57" },
      { url: "/kimjk/assets/60x60.png", sizes: "60x60" },
      { url: "/kimjk/assets/72x72.png", sizes: "72x72" },
      { url: "/kimjk/assets/76x76.png", sizes: "76x76" },
      { url: "/kimjk/assets/114x114.png", sizes: "114x114" },
      { url: "/kimjk/assets/120x120.png", sizes: "120x120" },
      { url: "/kimjk/assets/144x144.png", sizes: "144x144" },
      { url: "/kimjk/assets/152x152.png", sizes: "152x152" },
    ],
  },
  manifest: "/kimjk/manifest.json",
};

export default function KimJKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="kimjk-container">
        {children}
        <NavGuideScript />
      </div>
    </>
  );
}
