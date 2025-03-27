const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const connectDatabase = require("./src/config/database");

// Nạp biến môi trường
dotenv.config();

// Kết nối cơ sở dữ liệu
connectDatabase();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Định tuyến
const customerRoutes = require("./src/routes/customer-routers");
app.use("/api/customers", customerRoutes);

// Xử lý lỗi không tìm thấy route
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Đường dẫn không tồn tại",
  });
});

// Cổng và khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy trên cổng ${PORT}`);
});
