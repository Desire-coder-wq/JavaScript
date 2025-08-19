//  JavaScript Operators - Explained with Code Examples

// Arithmetic Operators
let a = 10;
let b = 3;
let addition1 = a + b;
console.log("Addition:", a + b); // 10 + 3 = 13
console.log("Subtraction:", a - b); // 10 - 3 = 7
console.log("Multiplication:", a * b); // 10 * 3 = 30
console.log("Division:", a / b); // 10 / 3 = 3.333...
console.log("Modulus (Remainder):", a % b); // 10 % 3 = 1
console.log("Exponentiation:", a ** b); // 10^3 = 1000

// Assignment Operators
let x2 = 5;

x += 2; // x = x + 2 → 7
console.log("After += 2:", x);

x -= 1; // x = x - 1 → 6
console.log("After -= 1:", x);

x *= 3; // x = x * 3 → 18
console.log("After *= 3:", x);

x /= 2; // x = x / 2 → 9
console.log("After /= 2:", x);

let stockQty = 2000; stockQty -= 2
console.log( `stock left is ${productSold}`)



// Comparison Operators
let r= 10;
let s= "10";

console.log("r == q:", p == q); // true (only value is compared)
console.log("r === q:", p === q); // false (value and type are compared)
console.log("r != q:", p != q); // false
console.log("r !== q:", p !== q); // true
console.log("r > 5:", p > 5); // true
console.log("r < 5:", p < 5); // false
console.log("r >= 10:", p >= 10); // true
console.log("r<= 9:", p <= 9); // false

// Logical Operators
let IsPaid = true;
let IsDelivered = false;

console.log("isPaid && isDelivered:", IsPaid && IsDelivered); // false
console.log("isPaid || isDelivered:", IsPaid || IsDelivered); // true
console.log("!isDelivered:", !isDelivered); // true

//  String Operator
let brand1 = "Mayondo";
let product1 = "Furniture";

let fullName1 = brand + " " + product;
console.log("Concatenated string:", fullName1); // "Mayondo Furniture"

//  Type Operator
let amount1 = 50000;

console.log("typeof amount:", typeof amount1); // "number"
console.log("typeof fullName:", typeof fullName); // "string"

// Bonus - Used in MWF Example

// Calculate total with quantity and transport
let unitPrice1 = 100000;
let quantity1= 3;
let subtotal1 = unitPrice * quantity;

let transportFee0= subtotal * 0.05;
let grandTotal1 = subtotal + transportFee;

console.log("Subtotal:", subtotal);
console.log("Transport (5%):", transportFee);
console.log("Grand Total:", grandTotal);

// Apply discount using -= operator
let discount2= 20000;
grandTotal -= discount;
console.log("After Discount:", grandTotal);

// Use comparison and logical to make decisions
if (quantity >= 3 && grandTotal > 200000) {
  console.log("Apply free delivery.");
}

if (!isDelivered) {
  console.log("Prepare product for delivery.");




}


// 📘 JavaScript Operators - Explained with Code Examples

// Arithmetic Operators
let n = 10;
let m = 3;
let addition = n + m
console.log("Addition:", n+ m);        // 10 + 3 = 13
console.log("Subtraction:",  n- m);     // 10 - 3 = 7
console.log("Multiplication:", n * m);  // 10 * 3 = 30
console.log("Division:", n / m);        // 10 / 3 = 3.333...
console.log("Modulus (Remainder):", n % m); // 10 % 3 = 1
console.log("Exponentiation:", n ** m); // 10^3 = 1000


// Assignment Operators
let x = 5;

x += 2;  // x = x + 2 → 7
console.log("After += 2:", x);

x -= 1;  // x = x - 1 → 6
console.log("After -= 1:", x);

x *= 3;  // x = x * 3 → 18
console.log("After *= 3:", x);

x /= 2;  // x = x / 2 → 9
console.log("After /= 2:", x);


// Comparison Operators
let p = 10;
let q = "10";

console.log("p == q:", p == q);     // true (only value is compared)
console.log("p === q:", p === q);   // false (value and type are compared)
console.log("p != q:", p != q);     // false
console.log("p !== q:", p !== q);   // true
console.log("p > 5:", p > 5);       // true
console.log("p < 5:", p < 5);       // false
console.log("p >= 10:", p >= 10);   // true
console.log("p <= 9:", p <= 9);     // false


// Logical Operators
let isPaid = true;
let isDelivered = false;

console.log("isPaid && isDelivered:", isPaid && isDelivered); // false
console.log("isPaid || isDelivered:", isPaid || isDelivered); // true
console.log("!isDelivered:", !isDelivered);                   // true


//  String Operator
let brand = "Mayondo";
let product = "Furniture";

let fullName = brand + " " + product;
console.log("Concatenated string:", fullName); // "Mayondo Furniture"


//  Type Operator
let amount = 50000;

console.log("typeof amount:", typeof amount);       // "number"
console.log("typeof fullName:", typeof fullName);   // "string"


// Bonus - Used in MWF Example

// Calculate total with quantity and transport
let unitPrice =100000;
let quantity = 3;
let subtotal = unitPrice * quantity;

let transportFee = subtotal * 0.05;
let grandTotal = subtotal + transportFee;

console.log("Subtotal:", subtotal);
console.log("Transport (5%):", transportFee);
console.log("Grand Total:", grandTotal);

// Apply discount using -= operator
let discount = 20000;
grandTotal -= discount;
console.log("After Discount:", grandTotal);

// Use comparison and logical to make decisions
if (quantity >= 3 && grandTotal > 200000) {
  console.log("Apply free delivery.");
}

if (!isDelivered) {
  console.log("Prepare product for delivery.");
}


function createPhone(color, size, type){
    return{
        color: color,
        size: size,
        type: type,
    
        takePicture: function(){
            return this.type + "  1 + 2 + snap"
        },
        playMusic: function(){
            return this.type + " play + pause"
        },
        ring: function(){
            return this.type + " sound"
        }
    }
}
let phoneOne = createPhone("black", "large", "s24");
let phoneTwo = createPhone("white", "large", "16promax");

console.log("phoneOne:", phoneOne);
console.log(phoneOne.takePicture());
console.log(phoneOne.playMusic());
console.log(phoneOne.ring());

//no.1 Create a function to create a user object 
//no.2 Create three users using the function
//no.3 Logout the properties of each user object
//no.4 Call the methods of each user object



//increment and decrement  operators

let z = 5; z ++;
let w = 1; w --;
let stockQuantity = 2000; stockQuantity--;
console.log(`stock left is ${stockQuantity}`)


let productSold = 0;  product++;
let message =`products sold is ${productSold}`
console.log(message)


function recordProducts(){
 product++;
let message =`products sold is ${productSold}`
console.log(message)}

let stock = 5;
if(stock>0){
  console.log("product is available")
}else{
  console.log("out of stock")
}





let stock2 = 3;
let payment = 500000;
let price = 500000;
if(stock>0 && payment>=price){
  console.log ("product is available")
  console.log(saleApproved)
}else{
  console.log("out of stock")
  console.log("can not create a sale")
}
