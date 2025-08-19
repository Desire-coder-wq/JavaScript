// // function functionName(){
// //     // write any code here
// //     //return
//     //console.log
// }
// // call javascript to work
functionName()

function functionName(params){
    // write any code here
    //return
    //console.log
}
// call javascript to work
functionName(arguments)
function addTwoNumbers(){
    let x= 1;
    let y= 2;
    let sum= x+y;
    return(sum);
}
console.log( addTwoNumbers())
function addTwoNumbers(x,y){
    let sum= x+y;
    return(sum);
}
console.log (addTwoNumbers(7,8));
console.log (addTwoNumbers(2,3));
console.log (addTwoNumbers(3,3));
 console.log   (addTwoNumbers(3,7));
 // write a fuction to square any number

 function squareNumber(x){
    return x*x;
 }
console.log(squareNumber(29,6));
console.log(squareNumber(23,67));
console.log(squareNumber(26,7));
console.log(squareNumber(25,78));
console.log(squareNumber(19,90));
//calculating total cost
function calculateTotalCost(quantity,unitPrice){
    const transportFee =5000;
    let subTotalCost = quantity * unitPrice;
    let total = subTotalCost + transportFee;
    return total
// }
console.log(calculateTotalCost(2,350000));
  let totalBeforeVat = calculateTotalCost(2,350000);
  function calculatePriceAfterTax(total){
    const vat = 0.18
    let vatFee = total * vat
    let priceAfterTax = total - vatFee
    return {priceAfterTax, vatFee}
  }
  console.log(calculatePriceAfterTax(totalBeforeVat))
,
  function printFullName(){
    let firstName = "Rose",
    lastName = "Desire",
   fullName = firstName + lastName
    return fullName

  }
  console.log(printfullName)

  let actions = [
  function greet(){
    console.log('hello')
  },
  function calculate(){
    console.log(1+1);
//   },
  function thankYou(){
    console.log('thank you for using our system')
  }
  actions[0]();
  actions[1]();
  actions[2]();
  //using functions using object
  let unitPrice
  let quantity
  let productName
  let transportFee
  let vatFee
  let paymethod 
  let calculateTotalCost
  


  let order ={
    unitPrice: 20000000,
    Quantity: 3,
    calculateSubTotal: function(){
        return this.unitPrice * this.quantity
    }
  }
  order.unitPrice
  order.Quantity
  order.calculateSubTotal()

  let car = {
    name: "rangerover",
    weight: 10000,
    stop: function(){
        return 'vroom'
    }

  }
  car.name
  car.weight
  car.start()
  console.log(car.name+ car.weight )




//   📋 Group D: Arrays
// 📚 Team Name: The List Builders
// Members 
// 1.	Rose 
// 2.	Claire 
// 3.	Hana 
// 4.	Jennifer
// 5.	Timothy	📝 Assignment:
// 1.	How to create an empty array
// 2.	How to create an array with values
// 3.	Creating an array using split
// 4.	Accessing array items using index
// 5.	Modifying array element
// 6.	Array Methods 





//no.1 Create a function to create a user object 
//no.2 Create three users using the function
//no.3 Logout the properties of each user object
//no.4 Call the methods of each user object




function userObject(fullname, email, position){
    return {
        fullname: fullname,
        email: email,
        position: position,
        isLoggedIn: false,
        isMarried: false,
        printInformation: function(){
            return (`${fullname}\nE-email: ${email}\nPosition: ${position}`);
        },
        login: function(){
             this.isLoggedIn = true;
             return (`${fullname} islogged in!`);
        },
        logout: function(){
            this.isLoggedout = false;
              return (`${fullname} islogged out!`);
        },
        getStatus: function(){
            return (`${this.fullname} Iscurrently ${this.isLoggedIn ? "logged In" : "logged out"}`);
        },
        isMarried: function(){
            this.isMarried = true
            return (`${fullname} ismarried!`)
        },
         isNotMarried: function(){
            this.isMarried = true
            return (`${fullname} isnotmarried!`)
        }

    }

}

let userOne = userObject("Hana Debay","hana.debay@gmail.com","Manager");
console.log(userOne.email , userOne.fullname)
let userTwo = userObject("Desire", "desire2025@gmail.com","Software Engineer")
let userThree = userObject("Timothy", "timothy2025@gmail.com","CEO")
console.log(userOne.printInformation());
console.log(userOne.login());
//console.log(userOne.logout());
console.log(userOne.isMarried());
console.log(userTwo.printInformation())
console.log(userTwo.isNotMarried())




// 1 differences btn function declarations and function expressions
// 2 limitations of using function expressions over function declarations
// 3 advantages of using function expressions over function declarations.

  
//   Feature	Function Declaration	Function Expression
// Syntax	function sayHi() {}	const sayHi = function() {};
// Hoisting	✅ Hoisted — can be called before it's defined	❌ Not hoisted — must be defined before use
// Name	Always named	Can be anonymous or named
// Use case	Good for top-level functions	Useful for callbacks, IIFEs, closures
// Scope	Declared in block/global scope	Exists only in the enclosing block/scope




// 🚫 2. Limitations of using function expressions over function declarations
// Not hoisted
// → You can't call a function expression before it's defined in the code.

js
Copy
Edit
greet(); // ❌ ReferenceError
const greet = function() { console.log("Hi!"); };
// Harder to debug when anonymous
// → Anonymous function expressions don’t show a name in stack traces, making debugging harder.

// Can’t always be used in certain syntax contexts
// → For example, you can’t use a function expression on its own at the top level without assignment or wrapping.




//  3. Advantages of using function expressions over function declarations
// Control over when it’s available
// → Since they’re not hoisted, they only exist after they're defined. This reduces accidental use before setup.

// Better for closures and scoping
// → Especially useful in functional programming and when passing functions as arguments (e.g., event handlers, callbacks).

// Supports IIFEs (Immediately Invoked Function Expressions)
// → Useful for creating private scopes.

js
Copy
Edit
(function() {
  console.log("Runs immediately");
})();
// More flexible in dynamic contexts
// → You can assign different functions to variables based on conditions.






// ✅ 1. Differences between Function Declarations and Function Expressions
// 🔹 Function Declaration
js
Copy
Edit
// Function Declaration
function greet() {
  console.log("Hello from declaration!");
}

greet(); // ✅ Works because it's hoisted
// 🔹 Function Expression
js
Copy
Edit
// Function Expression
const greet = function() {
  console.log("Hello from expression!");
};

greet(); // ✅ Works only after this line
// 🚫 2. Limitations of Function Expressions
// ❌ Not Hoisted
js
Copy
Edit
sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
  console.log("Hello!");
// };
// ❌ Harder to Debug (Anonymous Function)
js
Copy
Edit
const logMessage = function() {
  throw new Error("Something went wrong");
};

logMessage();
// In stack trace: anonymous or unclear function name
// ✅ 3. Advantages of Function Expressions
// 🔹 Scoped & Controlled Execution
// js
Copy
Edit
if (true) {
  const run = function() {
    console.log("Run inside block");
  };
  run(); // ✅ Works inside block
}

run(); // ❌ ReferenceError: run is not defined
// 🔹 Used as a Callback
js
Copy
Edit
setTimeout(function() {
  console.log("Hello after 1 second");
}, 1000);
// 🔹 IIFE (Immediately Invoked Function Expression)
js
Copy
Edit
(function() {
  console.log("Runs immediately");
})(); // ✅ Useful for scoping and modules
// 🔹 Assigned Dynamically
js
Copy
Edit
let operation;

if (true) {
  operation = function() {
    console.log("Add something");
  };
} else {
  operation = function() {
    console.log("Subtract something");
  };
}

operation(); // ✅ Outputs: Add something
// ✅ Summary Table
// Feature	Function Declaration	Function Expression
// Hoisting	✅ Yes	❌ No
// Can be anonymous	❌ No	✅ Yes
// Used as callback	❌ Less common	✅ Very common
// Used in IIFE	❌ No	✅ Yes
// Debugging	✅ Easier (named)	❌ Harder if anonymous
// Scope control	❌ Global/block	✅ Scoped/block-local