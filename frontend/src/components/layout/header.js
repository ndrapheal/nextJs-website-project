"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Admin Dashboard
          </Link>

          {/* Navigation */}
          <nav className="flex gap-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
