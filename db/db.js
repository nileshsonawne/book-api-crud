const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // from the mongoose database string 
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection failed", error);  // error message
    process.exit(1);
  }
};

module.exports = connectDB;
