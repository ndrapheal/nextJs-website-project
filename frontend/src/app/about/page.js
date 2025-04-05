import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">This is the about page</p>

      {/* Cách 1: Sử dụng Link component để chuyển trang */}
      <Link href="/">
        <Button variant="outline">Back to Home</Button>
      </Link>

      {/* Cách 2: Sử dụng useRouter hook (giống như useNavigate trong React) */}
      <Button
        variant="outline"
        className="ml-2"
        onClick={() => {
          // Xử lý logic trước khi chuyển trang
          window.location.href = "/";
        }}
      >
        Back to Home (with logic)
      </Button>
    </div>
  );
}
