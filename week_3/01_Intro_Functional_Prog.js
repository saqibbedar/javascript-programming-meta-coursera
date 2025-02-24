// Functioanl Programming and OOP

//  In programming, there are two commonly used paradigms
// 1. Functional Programming - FP
// 2. Object Oriented Programming - OOP

// Functional Programming Example

let shoes = 100
let govTax = 1.1

function totalPrice(price, tax) {
    return price * tax
}
let topay = totalPrice(shoes, govTax)
console.log(topay);

// Exchange Currency 

let currencyOne = 300
let currencyTwo = 0
let exchangeRate = 10

function exChangeCurrency(amount, rate) {
    return amount * rate
}

currencyTwo = exChangeCurrency (currencyOne, exchangeRate)
console.log(currencyTwo);
// let currencyOne = 120
// let currencyTwo = 0
// let exchangeRate = 2.4

// function exChangeCurrency(amount, rate) {
//     return amount * rate
// }

// currencyTwo = exChangeCurrency(currencyOne, exchangeRate)
// console.log(currencyTwo)


