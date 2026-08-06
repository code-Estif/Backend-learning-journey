const express = require("express");

const app = express();

// Add the missing line here
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("User received!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});