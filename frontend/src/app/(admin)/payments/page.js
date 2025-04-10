// src/app/(admin)/payments/page.js
import PaymentTable from "@/components/pages/payment/paymentPage";

export default function PaymentsPage() {
  return (
    <div className="space-y-4">
      <PaymentTable />
    </div>
  );
}
