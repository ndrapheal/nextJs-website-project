"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";

// Dữ liệu mẫu cho sản phẩm tồn kho
const inventoryItems = [
  {
    sku: "TSHIRT-BLACK-M",
    name: "Áo thun đen size M",
    stock: 24,
    status: "In Stock",
    updatedAt: "2025-04-08",
  },
  {
    sku: "SHOES-WHITE-42",
    name: "Giày thể thao trắng size 42",
    stock: 5,
    status: "Low Stock",
    updatedAt: "2025-04-09",
  },
  {
    sku: "CAP-RED",
    name: "Mũ lưỡi trai đỏ",
    stock: 0,
    status: "Out of Stock",
    updatedAt: "2025-04-06",
  },
];

const statusColor = {
  "In Stock": "bg-green-100 text-green-800",
  "Low Stock": "bg-yellow-100 text-yellow-800",
  "Out of Stock": "bg-red-100 text-red-800",
};

export default function InventoryManagement() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredItems = inventoryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.sku.toLowerCase().includes(query)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-2">
        Category /{" "}
        <span className="text-black font-medium">Inventory management</span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-1">Inventory Management</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Track and manage your stock levels across products.
      </p>

      {/* Search + Add */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <Input
          type="text"
          placeholder="Search by product name or SKU..."
          className="max-w-sm"
        />
        <Button className="bg-black text-white hover:bg-gray-800">
          + Add inventory
        </Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">SKU</th>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Stock</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Last updated</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="border-t hover:bg-neutral-100">
                <td className="px-4 py-3">{item.sku}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.stock}</td>
                <td className="px-4 py-3">
                  <Badge
                    className={`text-xs font-medium ${
                      statusColor[item.status]
                    } rounded-full px-2 py-0.5`}
                  >
                    {item.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">{item.updatedAt}</td>
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
