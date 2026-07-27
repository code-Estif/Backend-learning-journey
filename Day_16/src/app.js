const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("My Express project is working!");
});

app.get("/about", (req, res) => {
    res.send("This is my Day 16 Express project");
});

app.get("/contact", (req, res) => {
    res.send("Contact me at: estif@example.com")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});