const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("register", (user) => {
    console.log("Student Registered")
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Grade: ${user.grade}`);
});

emitter.on("register", (user) => {
    console.log(`Welcome ${user.name}`)
})

emitter.emit("register", {
    name: "Estif",
    age: 17,
    grade: 10
});