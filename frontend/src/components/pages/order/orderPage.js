// src/app/(admin)/orders/components/OrderTable.jsx
"use client";

const dummyOrders = [
  {
    id: "DH001",
    customer: "Nguyễn Văn A",
    date: "2025-04-01",
    total: "1,200,000₫",
    status: "Đang xử lý",
  },
  {
    id: "DH002",
    customer: "Trần Thị B",
    date: "2025-04-03",
    total: "2,500,000₫",
    status: "Đã giao",
  },
];

export default function OrderTable() {
  return (
    <div className="overflow-x-auto rounded-lg shadow border bg-white dark:bg-background">
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
              <td className="px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
