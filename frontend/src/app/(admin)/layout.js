// src/app/(admin)/layout.js
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Dashboard",
  description: "Quản trị hệ thống",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex h-screen bg-background text-foreground">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-background">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
