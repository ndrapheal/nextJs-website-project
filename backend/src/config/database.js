const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DATABASE,
    });
    console.log("✅ Kết nối MongoDB thành công");
    console.log("✅ Database:", mongoose.connection.name);
    console.log("✅ Host:", mongoose.connection.host);
  } catch (error) {
    console.error("❌ Lỗi kết nối MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
