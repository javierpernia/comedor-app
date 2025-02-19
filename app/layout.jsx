import localFont from "next/font/local";
import "./globals.css";
import BgImage from "./assets/images/BG-IMG-2.png"
import { Header } from "./components/Header";
import { Toaster } from 'react-hot-toast';

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

export const metadata = {
  title: "Comedor App",
  description: "Buen provecho!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <Header />
        <section className="backdrop-brightness-100 backdrop-blur-sm">
          {children}
        </section>
      </body>
    </html>
  );
}
