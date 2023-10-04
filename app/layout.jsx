import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "ShortUrl",
  description: "App for shortening longs urls.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
