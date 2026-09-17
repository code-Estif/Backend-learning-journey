const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send(`Welcome ${req.body.username}! Your email is ${req.body.email}`);
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});