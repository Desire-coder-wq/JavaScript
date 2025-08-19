// // ChatGPT said:
// // Here’s a complete breakdown of JavaScript data types, structures like loops, and how they’re commonly used with HTML in real-world projects. I’ll also give you a practice project idea with a challenge to apply everything.

// // 📘 JavaScript Data Types + Examples
// // 1. Numbers
// // Used for arithmetic and calculations.

// // js
// // Copy
// Edit
// let age = 25;
// let price = 9.99;
// let total = age * price;
// // 🔗 With HTML:

// html
// Copy
// Edit
// <p id="price"></p>
// <script>
//   let price = 19.99;
//   document.getElementById("price").innerText = "Price: $" + price;
// </script>
// 2. Strings
// Text enclosed in quotes.

// js
// Copy
// Edit
// let name = "Alice";
// let message = "Hello, " + name;
// 🔗 With HTML:

// html
// Copy
// Edit
// <p id="greet"></p>

//   let name = "Alice";
//   document.getElementById("greet").innerText = "Hello, " + name;

// 3. Booleans
// True or false values.

// js
// Copy
// Edit
// let isLoggedIn = true;
// if (isLoggedIn) {
//   console.log("Welcome back!");
// }
// 🔗 With HTML:

// html
// Copy
// Edit
// <p id="login-status"></p>

//   let isLoggedIn = false;
//   document.getElementById("login-status").innerText = isLoggedIn ? "Welcome!" : "Please log in.";

// 4. Arrays
// Lists of items.

// js
// Copy
// Edit
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits[1]); // "banana"
// 🔗 With HTML:

// html
// Copy
// Edit
// <ul id="fruit-list"></ul>

//   let fruits = ["apple", "banana", "orange"];
//   let list = "";
//   fruits.forEach(fruit => list += `<li>${fruit}</li>`);
//   document.getElementById("fruit-list").innerHTML = list;

// 5. Objects
// Store related data as key-value pairs.

// js
// Copy
// Edit
// let user = {
//   name: "Jane",
//   age: 30,
//   isMember: true
// };
// console.log(user.name);
// 🔗 With HTML:

// html
// Copy
// Edit
// <p id="user-info"></p>

//   let user = { name: "Jane", age: 30 };
//   document.getElementById("user-info").innerText = `${user.name}, Age: ${user.age}`;

// 6. Functions
// Reusable blocks of code.

// js
// Copy
// Edit
// function greet(name) {
//   return "Hello, " + name;
// }
// 🔗 With HTML:

// html
// Copy
// Edit
// <button onclick="sayHello()">Click Me</button>
// <p id="output"></p>

//   function sayHello() {
//     document.getElementById("output").innerText = "Hello, User!";
//   }

// 7. Loops
// // Used to repeat code.

// // For Loop
// js
// Copy
// Edit
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// // 🔗 With HTML:

// html
// Copy
// Edit
// <ul id="numbers"></ul>
// <script>
//   let output = "";
//   for (let i = 1; i <= 5; i++) {
//     output += `<li>Number ${i}</li>`;
//   }
//   document.getElementById("numbers").innerHTML = output;
// {/* </script>
// While Loop */}
// js
// Copy
// Edit
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }
// // 8. Null & Undefined
// {/* js
// Copy
// Edit
// let a = null;        // explicitly "nothing"
// let b;               // undefined (no value assigned)
// // 🧠 Practice Project: "Personal Task Manager"
// // 📝 Project Description:
// // Create a task manager where a user can:

// // Add tasks (using a string and array)

// // View tasks (loop through array)

// // Mark as completed (boolean toggle)

// // Show total number of tasks (number)

// // Use functions for adding/removing tasks

// // 🧩 What You’ll Use:
// // ✅ Strings (task names)

// // ✅ Arrays (list of tasks)

// // ✅ Booleans (task completed or not)

// // ✅ Numbers (task count)

// // ✅ Functions (add, remove, mark)

// // ✅ Loops (display tasks)

// // ✅ HTML interaction (buttons, input fields) */}

// 💡 Example UI:
// html
// Copy
// Edit
// <h2>Task Manager</h2>
// <input type="text" id="taskInput" placeholder="Add new task">
// <button onclick="addTask()">Add Task</button>

// <ul id="taskList"></ul>
// <p>Total tasks: <span id="taskCount">0</span></p>

// <script>
//   let tasks = [];

//   function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const task = { name: taskInput.value, done: false };
//     tasks.push(task);
//     taskInput.value = "";
//     displayTasks();
//   }

//   function toggleTask(index) {
//     tasks[index].done = !tasks[index].done;
//     displayTasks();
//   }

//   function displayTasks() {
//     let listHTML = "";
//     tasks.forEach((task, index) =>` {
//       listHTML += `<li onclick="toggleTask(${index})" style="cursor:pointer;">
//         ${task.done ? "<s>" : ""}${task.name}${task.done ? "</s>" : ""}
//       </li>`
//     }`);
//     document.getElementById("taskList").innerHTML = listHTML;
//     document.getElementById("taskCount").innerText = tasks.length;
//   }
// </script>
{/* 🧪 Challenge Yourself
Try adding features:

Delete a task

Filter completed vs pending

Save to localStorage so tasks stay after refresh

Sort tasks alphabetically */}