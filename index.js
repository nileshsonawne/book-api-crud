const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/api", bookRoutes);

// Connect DB and start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
