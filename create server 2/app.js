const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5000;
app.get("/signup", (req, res) => {
  res.send("Hey there");
});
app.listen(5000, () => {
  console.log("Server is running...");
});
