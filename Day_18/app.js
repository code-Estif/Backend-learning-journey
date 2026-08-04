const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/products", (req, res) => {
  res.send("Product found")
});

app.post("/products", (req, res) => {
  res.send("Product created");
});

app.put("/products", (req, res) => {
  res.send("Product updated");
});

app.delete("/products", (req, res) => {
  res.send("Product deleted");
});

app.listen(3000, () => {
  console.log("Server running...");
});