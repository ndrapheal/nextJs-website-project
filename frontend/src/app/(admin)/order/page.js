// src/app/(admin)/orders/page.js
"use client";

import OrderTable from "@/components/pages/order/orderPage";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Quản lý đơn hàng</h1>
      <OrderTable />
    </div>
  );
}
