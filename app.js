const express = require("express");
const app = express();
const dotenv = require("");
const mongoose = require("mongoose");

// Create the DB connection

// Set the PORT
const PORT = process.env.PORT || 8000

// Create the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})