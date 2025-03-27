// Sử dụng zod để validation
import * as z from "zod";

// Validation schema cho khách hàng
export const customerSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  phone: z.string().optional(),
});
