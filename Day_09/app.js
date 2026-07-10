const fs = require("fs");

console.log("Starting");
fs.readFile("journal.txt", "utf8", (err, data) => {
    fs.appendFile("copy.txt", data, (err) => {
        if(err) {
            console.log(err);
        };
    });
    if(err) {
        console.log(err);
        return;
    };
    console.log(data);
    console.log("Text added successfully!");
});