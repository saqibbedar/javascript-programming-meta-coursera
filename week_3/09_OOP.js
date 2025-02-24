// OOP revolves around the idea of organizing 
// our programs using objects to group related data and functionality.

/* In oop data is grouped while in FP data is separate.

Using the functional programming approach, 
you clearly separate a program's data from 
functions that work on that data.

With the OOP approach, 
you create an object and store all data related 
to that object including variables, 
functions and output statements.
*/

// ***Functions inside objects are known as Methods()

// Example of Functional Programming
var shoes = 100
var tax = 1.5
function totalprice(shoes, tax) {
    return shoes * tax
}
var finalPrice = totalprice(shoes, tax)
console.log(finalPrice)

// Example of OOP
var purchase = {
    shoes : 100,
    tax : 1.2,
    totalprice : function () {
        var calculation = purchase.shoes * purchase.tax
        console.log('Total Price', calculation)
    }
}
purchase.totalprice()

// Another example - Using .this keyword 
// To refer object name instead of mentioning it
var bookPurchase = {
    bookPrice : 300,
    taxOnBook : 1.5,
    forTotalPrice : function () {
        var calculation = this.bookPrice * this.taxOnBook
        console.log('Total Price of book is', calculation );
    }
}
bookPurchase.forTotalPrice();