const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("study", () => {
    console.log("Open VS Code");
});

emitter.on("study", () => {
    console.log("Start coding");
});

emitter.on("study", () => {
    console.log("Complete today's lesson");
});

emitter.emit("study");