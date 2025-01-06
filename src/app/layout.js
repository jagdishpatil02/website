import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const InterMono = Inter({
  variable: "--font-geist-Inter",
  subsets: ["latin"],
});
export const metadata = {
  title: "Jagdish Patil",
  description:
    "Welcome to Jagdish Patil's portfolio. I am a software engineer with expertise in web development. Explore my projects and get in touch!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${InterMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
