// app/forgot-password/page.jsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md bg-card text-card-foreground p-8 rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-center">Quên mật khẩu</h1>
        <p className="text-sm text-muted-foreground text-center">
          Nhập email để nhận link đặt lại mật khẩu
        </p>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </div>
          <Button className="w-full">Gửi liên kết đặt lại</Button>
        </div>
      </div>
    </div>
  );
}
    