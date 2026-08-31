const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All notes");
})

router.get('/:id', (req, res) => {
    res.send("one note")
})

module.exports = router;