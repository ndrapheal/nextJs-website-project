import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() { 
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="mb-4">This is the about page</p>
    
        {/* Sử dụng Link component để chuyển trang */}
        <Link href="/">
            <Button variant="outline">Back to Home</Button>
        </Link>
    
       
        </div>
    );
}