/**
 *  1. How to Create an Empty Array
 * ***** An empty array is a container with no initial elements.
 * ***** It is often used when you want to add items later.
 */


//  ******* Using Literal Syntax ******* //

let emptyArray =[];

//  ******* Using Array Constructor ******* //

let emptyArrayTwo = new Array(); 


/**
 *   2. How to Create an Array with Values
 * ***** Arrays can hold multiple values of any type.
 * ***** Values are enclosed in square brackets [].
 */

// ******** Using square brackets ******* //
let furnitureList = ["Table", "sofa", "cardboard"];

//  ******* Using Array Constructor ******* //

let numbers3 = new Array(1, 2, 3, 4);

/**
 *   3. Creating an Array Using split()
 * ***** split() turns a string into an array.
 * ***** We provide a separator (like space or comma).
 * ***** Useful when dealing with CSV or sentences.
 */
//  ******* Splitting by space ******* //

let row = "sofa Tabble Drawer"
let furnitureList2
console.log(words);

//  ******* Splitting by comma ******* //

let colors = "red,blue,green".split(",");
console.log(colors);

//  ******* Splitting each character ******* //
let letters = "Code".split("");
console.log(letters);

/**
 *   4. Accessing Array Items Using Index
 * ***** Array elements are accessed using indexes.
 * ***** Indexes start from 0.
 * ***** Use array[index] syntax.
 */

//  ******* Use a single index to Access an element ******* //
let animals = ["cat", "dog", "lion"];

console.log(animals[0]); 
console.log(animals[1]); 
console.log(animals[2]); 

//  ******* Use a Loop to Access a Range of Indexes ******* //

let furniture = ["sofa", "Table", "Drawer", ];

for (let i = 1; i <= 2; i++) {
  console.log(furniture[i]);  // "Table", "Drawer"
}

//  ******* Use slice() for a Range ******* //

let fruitsList = ["apple", "banana", "cherry", "mango"];

let someFruits = fruitsList.slice(1, 3);  // ["banana", "cherry"]
console.log(someFruits);

/**
 *   5. Modifying Array Elements
 * ***** We can change an element by assigning a new value to an index.
 * ***** Array items are mutable.
 * ***** Direct assignment works.
 */

let scores = [10, 20, 30];

scores[0] = 15;  // Change 10 to 15
scores[2] = 35;  // Change 30 to 35
scores[1] = scores[1] + 5; //25
scores[1] = scores[1] + scores[2]; // 60
console.log(scores[0])
console.log(scores[1])
console.log(scores[2])

/**
 *   6.  Array Methods
 * ***** Arrays come with built-in methods.
 * ***** These help in adding, removing, or transforming data.
 * ***** Common methods: push, pop, join, slice, length, etc.
 */
let devices = ["Laptop","Smartphone","Tablet","Smart TV"];


//  ******* Add an item  ******* //  
devices.push("Smartwatch"); // ["Laptop","Smartphone","Tablet","Smart TV","Smartwatch"]
console.log(devices); 

// ******** Remove last item ******* //
devices.pop(); // ["Laptop","Smartphone","Tablet","Smart TV"]
console.log(devices); 

// ********  Count elements ******** //
console.log(devices.length); // 4

// ******** Rearranging alphabetically ****** //
devices.sort();
console.log(devices); // [ 'Headphones', 'Smart TV', 'Smartphone', 'Tablet' ]

// ******** Reverse the order ******* //
devices.reverse();
console.log(devices); // [ 'Tablet', 'Smartphone', 'Smart TV', 'Headphones' ]

// ******** Remove from the beginning ******** //
devices.shift(); // ["Smartphone","Tablet","Smart TV"]
console.log(devices); 


// ******** Add to the beginning ******** //
devices.unshift("Headphones");
console.log(devices); // ["Headphones","Smartphone","Tablet","Smart TV"]

// ******** Join items ******* //
let text = devices.join(" - "); // "Headphones - Smartphone - Tablet - Smart TV "
console.log(text); 

// ******** Remove elements ****** //
devices.splice(1, 1); //Remove the second index-element
console.log(devices); // [ 'Headphones', 'Smart TV', 'Laptop' ]
// ******** Add elements ****** //
devices.splice(1, 0, "Smartphone"); //Add an element without removing an element
console.log(devices); // [ 'Headphones', 'Smartphone', 'Smart TV', 'Laptop' ]


// Desire research
// Arrays are like lists of items, and each item has a position called an index (starting from 0).
// You can change any item in the array by using its index and assigning a new value.
// For example, if you have let arr = [5, 10, 15]; and you write arr[1] = 20;, the array becomes [5, 20, 15]. The second item (index 1) is now 20.
// You can use math or other variables to update values, like arr[2] = arr[0] + arr[1]; which adds the first and second items and puts the result in the third spot.
// You can also use a loop to change many items at once, for example, to add 1 to every number in the array.
// In summary: To modify an array element, just use the array name, the index in square brackets, and assign a new value. Arrays are flexible, so you can update their contents any time!

// // re more examples of modifying array elements:

// // Example 1: Change a value by index
let numbers = [2, 4, 6];
numbers[1] = 10; // Now numbers is [2, 10, 6]
console.log(numbers)


// // // // Example 2: Use a variable for the index
let furniture5 = ["Table", "Sofa", "Tv stand"];
let i1= 2;
furniture5[i1] = "bed";
console.log(furniture5)
// // // Now furniture is ["Table", "sofa", "bed"]



// // // Example 3: Update all elements in a loop
let scores = [5, 10, 15];
for (let j = 0; j < scores.length; j++) {
  scores[j] = scores[j] + 1;
}
console.log(scores)
// Now scores is [6, 11, 16]



// // // // Example 4: Use a calculation to update an element
let arr = [1, 2, 3];
arr[0] = arr[1] * arr[2]; // arr is now [6, 2, 3]



// Exercise:

// Create an array with the numbers [3, 6, 9, 12, 15].
// Change the second element to 100.
// Multiply the last element by 2.
// Add 5 to every element using a loop.
// Print the final array.


let arr2 = [3, 6, 9, 12, 15];
 arr2[1] = 100 
 console.log(arr2[1]);

 
 let arr3 = [8,9,5];

 for(let i = 0; i<= 2; i++){
  console.log(arr3[i])
 }
 let arr4 = [3,6,9,12,15];
 arr4[4] *= 2
 console.log(arr4[4])

 let arr5 =[3,6,9,12,15];
 for(let f = 0; f<arr5.length; f++){
  arr5[f] = arr5[f] +5
 }
 console.log(arr5)

//