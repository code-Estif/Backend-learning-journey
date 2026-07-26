const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.get("/api", (req, res) => {
    res.send("Welcome to my API");
})

app.get("/api/products", (req, res) => {
    res.send("All products");
});

app.get("/api/users", (req, res) => {
    res.send("All users");
});

