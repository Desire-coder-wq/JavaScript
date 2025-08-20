 

// Let's start with OOP in JavaScript.

// Object-Oriented Programming in JavaScript
// 1. Classes & Objects

// A class is a blueprint for creating objects.

// Objects are instances of a class.

js
class Person {
  constructor(name, age) {
    this.name = name; // attribute
    this.age = age; // attribute
  }
  
  greet() { // method
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice

// 2. Attributes (Fields) and Methods (Behaviors)

// Attributes (fields) are properties that belong to the object.

// Methods are functions that define behaviors.

// Example above shows name and age as fields, and greet() as a method.

// 3. Encapsulation

// Encapsulation means bundling data and methods that work on data inside a class.

// It hides internal state and only exposes what is necessary.

// With ES6, private fields can be created using #.

js
class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age; // private field
  }
  
  getAge() {
    return this.#age;
  }
}

const p = new Person("Bob", 25);
console.log(p.age); // undefined
console.log(p.getAge()); // 25


// 4. Inheritance

// One class can inherit properties and methods from another.

js
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age); // call parent constructor
    this.salary = salary;
  }
  
  showSalary() {
    console.log(`${this.name} earns ${this.salary}`);
  }
}

const emp = new Employee("John", 40, 50000);
emp.greet(); // inherited method
emp.showSalary(); 

// 5. Polymorphism

// Subclasses can override parent methods to behave differently.

js
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof");
  }
}

const dog = new Dog();
dog.speak(); // Woof


// 6. Abstraction

// Hiding complex implementation details, exposing only the necessary parts.

// Achieved by using methods to interact with data instead of accessing directly.

// Real-world OOP Examples in JavaScript
// Example: Modeling a banking system with Account as base and SavingsAccount and CheckingAccount as derived classes.

// ES5 vs ES6 Overview
// Feature	ES5	ES6 (ES2015)
// Classes	Constructor functions	class syntax
// Module system	None (used IIFE or libraries)	import/export
// Arrow functions	Not available	Available
// Template literals	String concatenation	Template literals with `` `${}```
// Destructuring Assignment	No	Yes
// Require vs Import
// require: CommonJS module syntax used in Node.js.

// import: ES6 module syntax used in modern JS for front-end and back-end.

// Export Types
// Default export: Only one per module, imported without {}.

// Named export: Multiple per module, imported using {}.

text
// Export default
export default function() {}

// Named export
export const name1 = "John";
export function greet() {}

// Destructuring Assignment
// Extract values from arrays or objects directly.

text
const [a, b] = [1][2]
const {name1, age} = {name: "Alice", age: 30};
// Spread & Rest Operators
// Spread (...) expands an array or object.

// Rest collects multiple elements into an array.

text
const arr = [2][3][1]
const arr2 = [...arr, 4]; // Spread

function fun(...args) {
  console.log(args); // Rest collects args into array
}
// Arrow Functions and this Binding
// Arrow functions use lexical this.

// function has dynamic this.

text
const obj1 = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // undefined because lexical this in arrow
  },
  greet2() {
    console.log(this.name); // 'Alice'
  }
};
// Template Literals
// Strings with embedded expressions.

text
const name4 = "Bob";
console.log(`Hello, ${name}!`);
// Default Parameters
// Function parameters with default values.

text
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
// ES6 Classes vs ES5 Constructor Functions
// ES6 Classes are syntactic sugar over prototype-based constructor functions.

// ES5 example:

text
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};
// Fetch API (GET & POST Requests)
text
// GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// POST request
fetch('https://api.example.com/data', {
  method: 'POST',
  body: JSON.stringify({name: "Alice"}),
  headers: {'Content-Type': 'application/json'}
});
// Working with JSON data
// Parsing and stringifying JSON:

text
const obj = JSON.parse('{"name":"Alice"}');
const str = JSON.stringify(obj);

// Web Storage (localStorage & sessionStorage)
text
localStorage.setItem('name', 'Alice');
const name = localStorage.getItem('name');

sessionStorage.setItem('name', 'Bob');
const nameSession = sessionStorage.getItem('name');
// Combining Async Code with DOM updates
text
async function fetchAndDisplay() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  document.getElementById('output').textContent = JSON.stringify(data);
}
// Introduction to Asynchronous Programming
// Async code lets you run tasks without blocking main thread.

// Common async patterns: callbacks, promises, async/await.

Promises
 and .then()
text
fetch('https://api.example.com')
  .then(response => response.json())
  .then(data => console.log(data));
// Async/Await Syntax and Best Practices
text
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
// Error Handling with try...catch
// Used with async/await for cleaner async error handling.

// Functional Programming Principles
// Functions as first-class citizens.

// Avoid side effects.

// Use pure functions, immutability.

// Higher-order Functions
// Functions that take or return other functions.

text
function greet(msg) {
  return function(name) {
    console.log(`${msg}, ${name}`);
  };
}

const greetHello = greet("Hello");
greetHello("Alice");


// Closures and Scope
// Functions remember their lexical environment.

text
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
// Constructor Functions vs Factory Functions
// Constructor functions use new and prototype inheritance.

// Factory functions create and return objects directly.

// Constructor example:

text
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const p2 = new Person('Alice');
p.greet();
// Factory example:

text
function createPerson(name) {
  return {
    name,
    greet() {
      console.log(`Hi, I'm ${name}`);
    }
  };
}

const p1 = createPerson('Bob');
p.greet();
// If you want, I can provide specific code samples or explanations for any of these topics in more detail. Would you like to start with a particular topic?

// Related
// How do classes and objects work together to implement encapsulation in JavaScript
// Can you demonstrate inheritance and polymorphism using ES6 classes with examples
// What are the differences between ES5 constructor functions and ES6 classes
// How to perform GET and POST requests using Fetch API with JSON data handling
// How do as