"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";

// Dữ liệu mẫu
const categories = [
  {
    name: "Áo thun",
    description: "Tất cả các loại áo thun nam nữ",
    products: 45,
    createdAt: "2024-12-20",
    status: "Active",
  },
  {
    name: "Giày thể thao",
    description: "Các mẫu sneaker & giày chạy",
    products: 18,
    createdAt: "2024-11-01",
    status: "Active",
  },
  {
    name: "Phụ kiện",
    description: "Mũ, balo, dây lưng, tất, v.v.",
    products: 9,
    createdAt: "2025-02-10",
    status: "Inactive",
  },
];

const statusColor = {
  Active: "bg-green-100 text-green-800",
  Inactive: "bg-red-100 text-red-800",
};

export default function CategoriesManagement() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(query) ||
      cat.description.toLowerCase().includes(query)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-2">
        Category / <span className="text-black font-medium">Categories</span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-1">Categories</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Manage your product categories and their visibility.
      </p>

      {/* Search + Add */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <Input
          type="text"
          placeholder="Search category name..."
          className="max-w-sm"
        />
        <Button className="bg-black text-white hover:bg-gray-800">
          + Add category
        </Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium">Products</th>
              <th className="px-4 py-3 font-medium">Created at</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((cat, index) => (
              <tr key={index} className="border-t hover:bg-neutral-100">
                <td className="px-4 py-3 font-medium">{cat.name}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {cat.description}
                </td>
                <td className="px-4 py-3">{cat.products}</td>
                <td className="px-4 py-3">{cat.createdAt}</td>
                <td className="px-4 py-3">
                  <Badge
                    className={`text-xs font-medium ${
                      statusColor[cat.status]
                    } rounded-full px-2 py-0.5`}
                  >
                    {cat.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-right">
                  <MoreVertical className="h-4 w-4 text-muted-foreground cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
