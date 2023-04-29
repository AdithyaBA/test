const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Create the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})