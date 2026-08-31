const express = require("express");
const note = require('./routes/notes.js');
const app = express();

app.use('/notes', note);

app.listen(3000, () => {
    console.log("server listening at port 3000");
});