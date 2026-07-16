const EventEmitter = require("events");

class Door extends EventEmitter {
    open(owner) {
        console.log(`Door opened by ${owner}`);
        this.emit("open", owner);
    }
}

const door = new Door();

door.on("open", (owner) => {
    console.log(`Welcome ${owner}!`)
})

door.open("Estif")