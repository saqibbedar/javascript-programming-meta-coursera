// toReversed(): this method is used to flip your array with single readable line. 

// Say goodbye to .reverse() method as toReversed is a perfect way to flip any value in an array

const numbers = [1,  2, 3, 4, 5, 6, 7, 8, 9, 10];
const revNums = numbers.toReversed();
console.log(revNums)
console.log(numbers)

const a = 123;
function revInt(n) {
    let reversedNumber = "";
    while (n != 0) {
        let result = n%10;
        reversedNumber += result;
        n= parseInt(n/10);
    }
    return parseInt(reversedNumber);
}

var b = revInt(a);
console.log(b);
