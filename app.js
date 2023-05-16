const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const dbConnection = require("./db/database");

// Connect to DB
dbConnection()

const PORT = process.env.PORT;

// create the server
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})