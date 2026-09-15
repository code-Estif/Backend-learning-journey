const express = require("express");
const app = express();

function logger(req, res, next) {
    next();
}

function auth(req, res, next) {
    if (req.query.admin === "true") {
        return next();
    }

    return res.send("Not authorized");
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get("/users", auth, (req, res) => {
    console.log("IsAdmin: ", req.isAdmin)
    res.send("<h1>Users page</h1>");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});