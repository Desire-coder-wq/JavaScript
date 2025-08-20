🔥 1. Closures

A closure is when a function “remembers” variables from its outer scope, even after that scope has finished executing.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

🔥 2. Prototypes & Inheritance

Every object in JavaScript has a prototype. This allows inheritance and sharing of methods.

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return `Hi, I’m ${this.name}`;
};

const john = new Person("John");
console.log(john.sayHi()); // Hi, I’m John

🔥 3. this and Context

this depends on how a function is called (not where it is defined).

const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};

obj.greet(); // Alice
const greetFn = obj.greet;
greetFn();   // undefined (or window in browser)


Use .bind, .call, .apply to control this.

🔥 4. Asynchronous JavaScript

Callbacks

Promises

Async/Await

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}
fetchData();

🔥 5. Event Loop & Concurrency

JS is single-threaded but handles async tasks with an event loop.
Order of execution: Call Stack → Web APIs → Callback Queue → Event Loop.

console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");
// Output: A, C, B

🔥 6. Modules & Import/Export

Helps organize code into separate files.

// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));

🔥 7. Functional Programming Concepts

Higher-order functions (map, filter, reduce)

Immutability

Pure functions

const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

🔥 8. Generators & Iterators

Special functions that can pause and resume execution.

function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGen();
console.log(gen.next()); // {value: 1, done: false}

🔥 9. Destructuring & Spread/Rest

Short, flexible ways to handle arrays and objects.

const person = { name: "Tom", age: 25 };
const { name, age } = person;
console.log(name, age);

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

🔥 10. Advanced Object Features

Object property shorthand

Computed properties

Object.freeze / Object.seal

Proxy & Reflect

const handler = {
  get: (target, prop) => (prop in target ? target[prop] : "Not Found"),
};
const user = new Proxy({ name: "Sam" }, handler);
console.log(user.name); // Sam
console.log(user.age);  // Not Found
