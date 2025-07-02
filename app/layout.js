import "./globals.css";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";

// Load local fonts
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

// Load Google Font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Metadata chuẩn
export const metadata = {
  title: "MK Portfolio",
  description: "MINH KHÔI Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.className}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
