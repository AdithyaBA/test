const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// All routes
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

// Create the DB connection
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("CONNECTED TO MONGODB");
}).catch((err) => {
    console.log("FAILED TO CONNECT TO DB", err.message);
})

app.use(bodyParser.json())

// Middlewares
app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);

// Set the PORT
const PORT = process.env.PORT || 8000

// Create the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})