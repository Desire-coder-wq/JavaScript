let stockIn = [5000,2000,1000,3400,6000,1500]
for(i = 0; i >= 5; i++){
    console.log(stockIn)
}

//if you know the number of times to repeat
const products = ["chair", "Table", "tv- stand"];

for (let i = products.length - 1; i >= 0; i--) {
  console.log(`${i}. ${products[i]}`);
}


//when u don't know the number f time to repeat'use while loop'


while (condition) {
  // code block to be executed
}

let i = 0;
while (i < 5) {        
  console.log(i);
  i++;
}

// while (condition ie stock available){ code if condition is true ; increment /decrement}
let stock =20
while (stock>20){
    console.log(`Seling item --stock left is ${stock}`);
    stock--;
}
 //the do--while loop

x = 0
i = 0

// do {
//   x = x + i;
//   console.log(x)
//   i++;
// } while (i < 5);
// // => 0 1 3 6 10



// for of loop
const RawMaterials=["Hardwood","Tmber"]

for (let RawMaterials of RawMaterials){
    
  console.log(RawMaterials);
}





const fruits = ["apple", "orange", "banana"];

for (let fruit of fruits) {
  console.log(fruit);
}
// => apple
// => orange
// => bana

// for in loop
const fruits4= ["apple", "orange", "banana"];

for (let index in fruits) {
  console.log(index);
}
// => 0
// => 1
// => 2
    
// nested loop

for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    console.log(`${i}-${j}`);
  }
}



