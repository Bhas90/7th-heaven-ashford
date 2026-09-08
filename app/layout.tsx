import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "7th Heaven Bakery Ashford | Cakes, Desserts & Catering",
  description: "Explore cakes, desserts, corporate catering and celebration packages from 7th Heaven Bakery, 16 Church Road, Ashford.",
  icons: { icon: "/7th-heaven-logo.png", shortcut: "/7th-heaven-logo.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
