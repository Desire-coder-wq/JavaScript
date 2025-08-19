/*Events.....An action triggered by a user or browser which can result into signals, notifications e.t.c
KEY WORDS USED IN EVENTS
1.Even listening / (always watching / listening to an event....i.e buttons)
2.Event handling (is a function that happens after listening)
*/
//let button = document.getElementById("btn");  //for selecting the button

// button.addEventListener("click", function(){    //this line is for adding a function to the button
//     window.alert("You have clicked  button");
// })

// button.addEventListener("click", () =>   //this line is for adding a function to the button
//     window.alert("You have clicked  button")
// );

// let price = document.getElementById("price").value;
// let qty = document.getElementById("qty").value;
// let total = document.getElementById("total")
// let calcBtn = document.getElementById("calcBtn")

// function updateTotal(){
//     let cost = price * qty;
//     cost.toLocaleString();  //cost becomes a string
//     total.textContent =`Total : UGX +${cost} `    //to pust a text to html
//  return;
// };

// calcBtn.addEventListener("click", updateTotal)
// //qty.addEventListener("input", updateTotal)

        //Correction

const form = document.getElementById("orderForm");
const furniture = document.getElementById("furniture");
const customer = document.getElementById("customer");
const total = document.getElementById("total");
const calcBtn = document.getElementById("calcBtn");

function updateTotal() {
    // Get latest values from the inputs
    const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);

    // Calculate cost
    const cost = price * qty;

    // Format number with commas
    const formattedCost = cost.toLocaleString();

    // Display result
    total.textContent = `total: UGX ${formattedCost}`;
}

qty.addEventListener("input", updateTotal);

price.addEventListener("input", updateTotal);


//select by class
  let note = document.querySelector(".note");
  note.style.color = "blue";
//select Nested Elements
    let text = document.querySelector(".container .text");
  text.style.fontWeight = "bold";
  //select by tagName
    let heading = document.querySelector("h1");
  heading.innerText = "Changed Heading";
  //select by id
    let msg = document.querySelector("#message");
  msg.textContent = "Updated with querySelector!";
// use with events
  document.querySelector(".btn").addEventListener("click", () => {
    alert("Button clicked!");

    //select all items
    document.querySelectorAll(".item").forEach(item => {
  item.style.color = "red";
});


