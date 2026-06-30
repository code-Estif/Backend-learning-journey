import { add, multiply, substract } from "./calculator.js";
import { Hello } from "./greeting.js";
import { message } from "./message.js";
function App() {
    console.log(Hello("Estif!")),
    console.log(message)
    console.log(add(2, 3)),
    console.log(multiply(4, 5)),
    console.log(substract(10, 2))
}

App();
