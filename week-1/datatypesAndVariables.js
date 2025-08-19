/*
Premetive Data types hold single values( thye can not be changed directly)
1. strings/Text
2. numbers
   intergers
   big integer
   decimals
3. bolean
   true/false

4. undefined 
   
5. null
   let x=null
6. symbol
   uniquess
   


*/
let productName ="timber"//strings we put them in quotes
typeof(productName)
console.log(typeof(productName))
let productCost = 4500
let transportIsNeeded = true
let tableColor
let discount = null
console.log(productCost *2
    
)

/*
Non primitive Data type(they can be changed directly without reassigning the value)
1. Array( all arrays are ordered lists [indexing])
       is a list off item
        [ number]
        [string
        ["sofa","table"]
        let productList=[ sofa,table,cupboard]
2. object
        in javaScript everything is an object
        {name:"sofa"
        price: 2000
        cloor:"blue"
        }
3. Data
4. Function





 */
let productList = ["sofa","table","cupboard"]
console.log(productList)

let diningTableObject = { 
 productName: "Dining table",
 quantity: 2,
 price : 3500,
 totalCost : quantity * price
}
let quantity = 2
let price = 3500
let totalCost = quantity * price
console.log(totalCost)

let paymentType = "Cash"
const VAT = 0.05 //const means value can't be changed
const PI = 3.14
console.log(paymentType)