import { greet } from "./greetings.js";
import { add, substract, multiply} from "./calculator.js"
import user from "./user.js";

function app() {
    console.log(greet('Estif'))
    console.log(add(5, 3));
    console.log(substract(5, 3));
    console.log(multiply(5, 3));
    console.log(`I'm ${user.name} ,and I'm ${user.age} years old`)
}

app();