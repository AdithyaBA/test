const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// All routes
const userRouter = require("./routes/auth");

// Create the DB connection
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("CONNECTED TO MONGODB");
}).catch((err) => {
    console.log("FAILED TO CONNECT TO DB", err.message);
})

// Set the PORT
const PORT = process.env.PORT || 8000

// Create the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})