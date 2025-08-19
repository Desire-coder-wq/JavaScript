// ChatGPT said:
// 🔤 JavaScript Strings – Fully Explained
// In JavaScript, strings are sequences of characters used to represent text. Strings are primitive data types and are immutable, which means once created, they cannot be changed (though you can create new strings based on them).

// 📌 1. Creating Strings
// You can create strings in JavaScript using:

// Single quotes: 'hello'

// Double quotes: "hello"

// Template literals (backticks): `hello`

// javascript
// Copy
// Edit
// let str1 = 'Hello';
// let str2 = "World";
// let str3 = `Hello, ${str2}!`;  // Template literal with variable interpolation
// 📌 2. String Properties
// .length – Returns the number of characters in the string.

// javascript
// Copy
// Edit
// let name = "JavaScript";
// console.log(name.length);  // Output: 10
// 📌 3. String Methods (Common and Important)
// Method	Description
// charAt(index)	Returns character at specified index
// slice(start, end)	Extracts part of the string
// substring(start, end)	Similar to slice
// substr(start, length)	Deprecated, avoid using
// toUpperCase()	Converts to uppercase
// toLowerCase()	Converts to lowercase
// trim()	Removes whitespace from both ends
// includes(substring)	Checks if substring exists
// replace(old, new)	Replaces part of the string
// split(separator)	Splits string into an array
// concat()	Joins two or more strings
// startsWith()	Checks if string starts with given chars
// endsWith()	Checks if string ends with given chars
// indexOf()	Finds first occurrence
// lastIndexOf()	Finds last occurrence
// repeat(n)	Repeats the string n times

// 🔹 Example:

javascript
Copy
Edit
let phrase = "  Learn JavaScript  ";

console.log(phrase.trim());                  // "Learn JavaScript"
console.log(phrase.toUpperCase());           // "  LEARN JAVASCRIPT  "
console.log(phrase.includes("Java"));        // true
console.log(phrase.replace("Learn", "Master")); // "  Master JavaScript  "
// 📌 4. Template Literals
// Template literals allow multi-line strings, interpolation, and expression evaluation:

javascript
Copy
Edit
let user = "Alice";
let greeting = `Hello, ${user.toUpperCase()}!`;
console.log(greeting);  // Hello, ALICE!
// 📌 5. Immutability of Strings
// You cannot change a character in a string directly:

javascript
Copy
Edit
let word = "code";
word[0] = "m";         // ❌ This won't work
// console.log(word);     // Still "code"
// To modify a string, you must create a new one:

javascript
Copy
Edit
let newWord = "m" + word.slice(1);  // "mode"
// ✅ Activity: Practice Strings in JavaScript
// After you understand the concepts, try this activity:

// 🧠 Activity: "String Toolkit"
// Create a simple tool (you can use prompt() and alert() if running in a browser) that does the following:

// Ask the user to enter a sentence.

// Display:

// The length of the sentence

// The sentence in uppercase and lowercase

// Whether it contains the word "JavaScript"

// The first and last characters

// A new version with "JavaScript" replaced by "JS"

// The sentence split into words (array)

// 🔧 Example Code (Browser Version):
javascript
Copy
Edit
let sentence = prompt("Enter a sentence:");

alert("Length: " + sentence.length);
alert("Uppercase: " + sentence.toUpperCase());
alert("Lowercase: " + sentence.toLowerCase());
alert("Contains 'JavaScript'? " + sentence.includes("JavaScript"));
alert("First char: " + sentence.charAt(0));
alert("Last char: " + sentence.charAt(sentence.length - 1));
alert("Replaced: " + sentence.replace("JavaScript", "JS"));
alert("Words: " + sentence.split(" "));
// 🧪 Bonus Challenge:
// Try building a string reverser that takes input and outputs it reversed.

javascript
Copy
Edit
let input = "hello";
let reversed = input.split('').reverse().join('');
console.log(reversed); // "olleh"

let price = 50;
let quality = 25;
let total = "The total costal cost is ${price *quantity} shs";

console.log(total);

// string methods