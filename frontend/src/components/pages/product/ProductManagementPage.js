"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // custom hoặc từ shadc
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"; // custom hoặc từ shadcn
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // custom hoặc từ shadcn
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker"; // custom or từ shadcn
import { MoreVertical, Pencil, Trash2, Eye } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: "1",
    name: "Apple iPhone 14 Pro",
    sku: "IP14PRO256GB",
    price: 1199,
    status: "active",
    category: "smartphone",
    image: "/products/iphone14pro.png",
    createdAt: "2024-12-01",
  },
  // thêm sản phẩm giả lập...
];

export default function ProductManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Product Management</h2>
        <p className="text-muted-foreground">
          Manage your store’s product listings and inventory.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center gap-4">
        <Input
          placeholder="Search by name or SKU..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-[250px]"
        />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="smartphone">Smartphone</SelectItem>
            <SelectItem value="laptop">Laptop</SelectItem>
            <SelectItem value="accessory">Accessory</SelectItem>
          </SelectContent>
        </Select>

        <CalendarDateRangePicker />
      </div>

      {/* Product Table */}
      <div className="rounded-md border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr className="border-b">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">SKU</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Created</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-muted/50">
                <td className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                </td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.sku}</td>
                <td className="p-4">${product.price}</td>
                <td className="p-4 capitalize">{product.status}</td>
                <td className="p-4">{product.createdAt}</td>
                <td className="p-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600 focus:bg-red-100">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
