const fs = require("fs");

console.log("1");

fs.readFile("test.txt", "utf8", (err, data) => {
  console.log("2");
});

console.log("3");