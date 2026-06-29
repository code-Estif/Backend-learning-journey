const fs = require("fs");
const command = process.argv[3];
const newTask = process.argv[1];

fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const tasks = JSON.parse(data);
    console.log("Your Tasks:"); 
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
});
