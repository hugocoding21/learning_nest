"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${inter.className} h-screen`}>
        <div style={{ height: "10%" }}>
          <Navbar />
        </div>
        <div style={{ height: "90%" }}>{children}</div>
      </body>
    </html>
  );
}
