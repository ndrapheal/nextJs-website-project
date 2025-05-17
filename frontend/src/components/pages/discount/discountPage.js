"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker";

export default function DiscountSection() {
  const [discount, setDiscount] = useState({
    code: "",
    description: "",
    discountType: "fixed",
    amount: "",
    usageLimit: "",
    startDate: null,
    endDate: null,
    reusable: true,
    status: true,
  });

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold">Tạo mã giảm giá</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Mã giảm giá</Label>
            <Input
              placeholder="VD: SUMMER20"
              value={discount.code}
              onChange={(e) =>
                setDiscount({ ...discount, code: e.target.value })
              }
            />
          </div>

          <div>
            <Label>Loại giảm</Label>
            <select
              className="w-full border border-gray-300 rounded px-2 py-1"
              value={discount.discountType}
              onChange={(e) =>
                setDiscount({ ...discount, discountType: e.target.value })
              }
            >
              <option value="fixed">Giảm số tiền</option>
              <option value="percent">Giảm theo %</option>
            </select>
          </div>

          <div>
            <Label>Giá trị giảm</Label>
            <Input
              type="number"
              placeholder="VD: 50000 hoặc 10 (%)"
              value={discount.amount}
              onChange={(e) =>
                setDiscount({ ...discount, amount: e.target.value })
              }
            />
          </div>

          <div>
            <Label>Giới hạn sử dụng</Label>
            <Input
              type="number"
              placeholder="VD: 100"
              value={discount.usageLimit}
              onChange={(e) =>
                setDiscount({ ...discount, usageLimit: e.target.value })
              }
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <Label>Thời gian áp dụng</Label>
            <CalendarDateRangePicker
              date={{ from: discount.startDate, to: discount.endDate }}
              setDate={(range) =>
                setDiscount({
                  ...discount,
                  startDate: range?.from,
                  endDate: range?.to,
                })
              }
            />
          </div>

          <div>
            <Label>Dùng lại</Label>
            <Switch
              checked={discount.reusable}
              onCheckedChange={(value) =>
                setDiscount({ ...discount, reusable: value })
              }
            />
          </div>

          <div>
            <Label>Trạng thái</Label>
            <Switch
              checked={discount.status}
              onCheckedChange={(value) =>
                setDiscount({ ...discount, status: value })
              }
            />
          </div>
        </div>

        <Button className="mt-4">Lưu mã giảm giá</Button>
      </CardContent>
    </Card>
  );
}
