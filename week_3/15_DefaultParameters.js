/* 
A useful a ES6 feature allows me to set a default parameter 
inside a function definition  First, 

What that means is, I'll use an ES6 feature which allows me to set a default parameter 
inside a function definition, which goes hand in hand with the 
defensive coding approach, while requiring almost no effort to implement.
*/


function noDefaultPara(number) {
    console.log("Result", number * number);
}

/* vaScript, due to its dynamic nature, doesn't throw an error, 
but it does return a non-sensical output. */
noDefaultPara() // Result NAN - Not a Number


class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'


class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6

/* 
This approach improves the developer experience of my code, 
because I no longer have to worry about feeding the WithDefaultParameters class 
with all the arguments.
*/

/* 
In conclusion, in this reading I've covered the following: 

How to approach designing an object-oriented program in JavaScript 

The role of the extends and super keywords 

The importance of using default parameters.
*/