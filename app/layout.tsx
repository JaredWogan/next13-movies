import "./globals.css";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
    title: "My Site",
    description: "This is my site",
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: "/favicon.ico",
    },
};

const open_sans = Open_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${open_sans.className} mx-24 my-12`}>
                {children}
            </body>
        </html>
    );
}
