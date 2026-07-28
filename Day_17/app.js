const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Bye Bye World!");
});

app.get("/products", (req, res) => {
    res.send("This is my day 17 product");
});

app.get("/user", (req, res) => {
    res.send("Contact me at username:-@Estif21")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});