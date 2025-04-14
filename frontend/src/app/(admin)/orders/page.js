// src/app/(admin)/orders/page.js
"use client";

import OrderTable from "@/components/pages/order/orderPage";

export default function OrdersPage() {
  return (
    <div className="container mx-auto">
    
      <OrderTable />
    </div>
  );
}
