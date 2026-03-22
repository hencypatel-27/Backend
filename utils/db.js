const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔌 Connecting to DB...");

    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is missing");
    }
    await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Database connection failed");
    console.log(error.message);
  }
};

module.exports = connectDB;