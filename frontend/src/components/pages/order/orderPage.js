// src/app/(admin)/orders/components/OrderTable.jsx
"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const dummyOrders = [
  {
    id: "DH001",
    customer: "Nguyễn Văn A",
    date: "2025-04-01",
    total: "1,200,000₫",
    status: "Processing",
  },
  {
    id: "DH002",
    customer: "Trần Thị B",
    date: "2025-04-03",
    total: "2,500,000₫",
    status: "Delivered",
  },
];

const orderStatusColorMap = {
  Pending: "bg-yellow-100 text-yellow-800",
  Processing: "bg-green-100 text-green-800",
  Shipped: "bg-blue-100 text-blue-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
  Refunded: "bg-blue-100 text-blue-800",
  Failed: "bg-red-100 text-red-800",
  "On Hold": "bg-yellow-100 text-yellow-800",
};


export default function OrderTable() {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground mb-2">
        Category / <span className="text-black font-medium">Notifications</span>
      </div>
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-1">Notifications</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage your mail.</p>

      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
          <tr>
            <th className="px-4 py-2">Mã đơn</th>
            <th className="px-4 py-2">Khách hàng</th>
            <th className="px-4 py-2">Ngày đặt</th>
            <th className="px-4 py-2">Tổng tiền</th>
            <th className="px-4 py-2">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map((order) => (
            <tr key={order.id} className="border-t dark:border-gray-700">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">{order.total}</td>
              <td className="px-4 py-2">
                <Badge
                  className={`text-xs font-normal px-2 py-1 rounded 
      ${orderStatusColorMap[order.status] || "bg-gray-100 text-gray-800"} 
      hover:bg-inherit hover:text-inherit`}
                >
                  {order.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
