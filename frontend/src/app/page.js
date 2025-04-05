"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserManagement from "@/app/User/userManagerment";
export default function Home() {
  return (
    <>
      <main className="container mx-auto p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Welcome to Next.js</h1>
        <p className="mb-4">This is the home page</p>

        <div className="flex gap-4">
          <Link href="/about">
            <Button>Go to About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Go to Contact</Button>
          </Link>
        </div> */}
        <UserManagement/>
      </main>
    </>
  );
}
