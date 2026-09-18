const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get('/search', (req, res) => {
    console.log(`Searching for ${req.query.term}`);
    res.send(`<h1>${req.query.term}</h1>`);
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});