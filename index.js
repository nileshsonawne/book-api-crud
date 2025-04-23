const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();

//  define the port in PORT = 5000
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/api", bookRoutes);

// Connect DB and start server
connectDB();

//  server start 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
