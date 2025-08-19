console.log(document.title)
console.log(document.body)
console.log(document.links)
console.log(document.forms)


// document.getElementById("heading")
let heading = document.getElementById("heading")
console.log(heading)
heading.textContent="WELCOME TO MAYONDO"
heading.style.color="aqua"


let header = document.getElementById("first")
header.innerHTML = "<h2>quality furniture products</h2>"

//EVENTS

//More Dom Methods
// let subHeading=document.getElementsByTagName("")
// console.log(subHeading)



// for (let i =0; i<subHeading.length;  i++) {
//   console.log(`${i}. ${subHeading[i]}`);
// }

// let paragarph= document.getElementsByClassName("about")
// console.log(paragarph.length)


// let thirdTitle= document.querySelector("h3") // selects the first available element with clas name of h3
// // works exactly like css

// let thirdTitle=document.querySelector("#third_title"); // 

// let thirdTitle=document.querySelector(".thirdTitle")
let headingsArray= document.querySelectorAll("h2") // this captures everything
headingsArray[1].className="sub-heeading"
headingsArray[1].id="sub-heeadings"

headingsArray[1].setAttribute("class"  ,"container")
headingsArray[1].setAttribute("id", "sub-heading")

headingArray[1].textContent= "login"
headingsArray[1].style.backgroundColor = "green"



headingsArray[2].className="sub-heeading"
headingsArray[2].id="sub-heeadings"

headingsArray[2].setAttribute("class"  ,"container")
headingsArray[2].setAttribute("id", "sub-heading")

headingArray[2].textContent= "welcome"
headingsArray[2].style.backgroundColor = "orange"
// document.createElement()
