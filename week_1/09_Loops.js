// Loops in javascript
for (let a = 0; a <= 0; a++)
{
    console.log(a + "\n") // 0
}

for (let i = 1; i <= 6; i++) {
    console.table(i);
}

/* output of above code will be 0 because loop will stop,
after seeing the first condition that a =0 and also a<=0 
then we applied the addition property that is a++ to add values to zero 
until it is less than or equal to the number. 
Because we choose zero so further addition will not take place as zero into zero remains the zero.*/

// 4 table using for loop
for (i = 0; i<= 41; i = i + 4){
    console.log(i)
}

// 10 table using for loop
console.log("This is table of 10" +"\n") //+"\n" using to enter in a newline
for (var i = 10; i <= 101; i = i + 10){
    console.log(i);
} 
// for (var i = 0; i < 101; i += 10) {
//     console.log(i);
// }

// five table using for loop

// console.log("This is five table" +"\n")
// for (let i = 0; i < 51; i = i+5){
//     console.log(i )
// }

// reverse five table 

// console.log("This is reversed five table")

// for(let i = 50; i > 4; i = i-5){
//     console.log(i)
// }

// // Basic syntax of for loop (where "n" is any number)

// for (let i=n; i<n; i++){
//     console.log(i)
// }

// Note: it can be replaced with anything like in first example I have used "a" instead of "i".
// Maybe "i" looks difficult to you, so can choose anything instead of it.

// while loop
// var i = 4;
// if (i <5) {
//     console.log("Hello");}
//     else{
//             console.log("goodbye")
//         }