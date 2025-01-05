require("dotenv").config();
const express = require("express");
const connectToDb = require("./db/db");

const app = express();
app.use(express.json());

// Connect to MongoDB
connectToDb();

// Routes
// const userRoutes = require("./routes/user.routes");
// app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
