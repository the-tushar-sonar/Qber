// const dotenv = require("dotenv");
// dotenv.config(); // Load environment variables

// const express = require("express");
// const cors = require("cors");
// const connectToDb = require("./db/db.js"); // Import the database connection function

// const app = express();

// // Connect to the database
// connectToDb();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse incoming JSON requests

// // Default Route
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// // Export the app instance for use in server.js or testing
// module.exports = app;



const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db.js");

const app = express();

// Connect to MongoDB
connectToDb();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = app;
