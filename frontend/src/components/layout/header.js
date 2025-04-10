"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(search ? { q: search } : {});
      router.replace(`${pathname}?${params.toString()}`);
    }, 400); // debounce

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-background">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      <div className="w-full max-w-md ml-auto">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
