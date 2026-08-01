import type { Metadata } from "next";
import { Outfit, Red_Hat_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

const outfitSans = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const redHatMono = Red_Hat_Mono({
    variable: "--font-red-hat-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Harvy Angelo",
    description: "Personal Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${outfitSans.variable} ${redHatMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
