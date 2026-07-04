const path = require('path');
const file = {
  dir: "Node.JS/Day_07",
  base: "app.js",
};

console.log(path.resolve('app.js'));
console.log(path.basename('app.js'));
console.log(path.extname('app.js'));
console.log(path.resolve('app'));
console.log(path.dirname("Node.JS/Day_07/app.js"));
console.log(path.parse('Node.JS/Day_07/app.js'));
console.log(path.join('code collection', 'Node.JS', 'Day_07', 'app.js'));
console.log(path.format(file));