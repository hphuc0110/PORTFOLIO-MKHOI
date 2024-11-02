import localFont from "next/font/local";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const plusJakataSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "GK Portfolio",
  description: "GIA KHANH Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakataSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
