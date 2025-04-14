// src/app/(admin)/payments/components/PaymentTable.jsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";


const paymentStatusColorMap = {
  Pending: "bg-yellow-100 text-yellow-800",
  Paid: "bg-green-100 text-green-800",
  Failed: "bg-red-100 text-red-800",
  Refunded: "bg-blue-100 text-blue-800",
  "Partially Refunded": "bg-blue-100 text-blue-800",
  Disputed: "bg-red-100 text-red-800",
  Canceled: "bg-red-100 text-red-800",
  Authorized: "bg-yellow-100 text-yellow-800",
  Expired: "bg-gray-100 text-gray-800",
};

const dummyPayments = [
  {
    paymentId: "PAY001",
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    amount: "1,000,000₫",
    method: "VNPay",
    status: "Pending",
    date: "2025-04-10",
  },
  {
    paymentId: "PAY002",
    orderId: "ORD002",
    customerName: "Trần Thị B",
    amount: "2,500,000₫",
    method: "Momo",
    status: "Paid",
    date: "2025-04-09",
  },
  {
    paymentId: "PAY003",
    orderId: "ORD003",
    customerName: "Lê Văn C",
    amount: "850,000₫",
    method: "Tiền mặt",
    status: "Canceled",
    date: "2025-04-08",
  },
];

export default function PaymentTable() {
    return (
      <div className="space-y-4">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-2">
          Category /{" "}
          <span className="text-black font-medium">Notifications</span>
        </div>
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-1">Notifications</h1>
        <p className="text-sm text-muted-foreground mb-6">Manage your mail.</p>

        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Mã thanh toán</th>
              <th className="px-4 py-3">Mã đơn hàng</th>
              <th className="px-4 py-3">Khách hàng</th>
              <th className="px-4 py-3">Số tiền</th>
              <th className="px-4 py-3">Phương thức</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Ngày thanh toán</th>
            </tr>
          </thead>
          <tbody>
            {dummyPayments.map((payment) => (
              <tr
                key={payment.paymentId}
                className="border-t dark:border-gray-700"
              >
                <td className="px-4 py-3">{payment.paymentId}</td>
                <td className="px-4 py-3">{payment.orderId}</td>
                <td className="px-4 py-3">{payment.customerName}</td>
                <td className="px-4 py-3">{payment.amount}</td>
                <td className="px-4 py-3">{payment.method}</td>
                <td className="px-4 py-3">
                  <Badge
                    className={`text-xs font-normal px-2 py-1 rounded ${
                      paymentStatusColorMap[payment.status] ||
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {payment.status}
                  </Badge>
                </td>

                <td className="px-4 py-3">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
