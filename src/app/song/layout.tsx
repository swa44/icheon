import type { Metadata } from "next";
import "./song.css";

export const metadata: Metadata = {
  title: "이천시 국회의원 송석준",
  description: "상생과 조화의 고장 이천시",
  openGraph: {
    url: "https://xn--hu5bi8g.com/song",
    type: "website",
    title: "국회의원 송석준",
    description: "상생과 조화의 고장 이천시",
    images: ["/song/assets/logo_196.png"],
  },
  icons: {
    icon: [
      { url: "/song/assets/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/song/assets/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/song/assets/96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/song/assets/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/song/assets/196x196.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [
      { url: "/song/assets/57x57.png", sizes: "57x57" },
      { url: "/song/assets/60x60.png", sizes: "60x60" },
      { url: "/song/assets/72x72.png", sizes: "72x72" },
      { url: "/song/assets/76x76.png", sizes: "76x76" },
      { url: "/song/assets/114x114.png", sizes: "114x114" },
      { url: "/song/assets/120x120.png", sizes: "120x120" },
      { url: "/song/assets/144x144.png", sizes: "144x144" },
      { url: "/song/assets/152x152.png", sizes: "152x152" },
    ],
  },
  manifest: "/song/manifest.json",
};
export default function SongLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
