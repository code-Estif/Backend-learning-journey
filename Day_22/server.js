const express = require('express');
const app = express();

app.get("/products", (req, res) => {
    res.send(`Searching for ${req.query.category} from ${req.query.brand}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});