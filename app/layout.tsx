import Container from "@/components/layout/Container";
import NavBar from "@/components/layout/NavBar";
import SocketProvider from "@/providers/SocketProvide";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Video Confrence App",
  description: "Video confrencing app using WebRTC",
};

const inter= Inter({subsets:["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SocketProvider>
          <main className="flex flex-col min-h-screen bd-secondary">
            <NavBar/>
            <Container>
            {children}
            </Container>
          </main>
        </SocketProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
