import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">This is the contact page</p>

        <div className="flex gap-4">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
