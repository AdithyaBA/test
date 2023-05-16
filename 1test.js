const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("I am get request");
  debugger
  res.send("Yen samachara");
})

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
})