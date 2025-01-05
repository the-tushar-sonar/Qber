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
