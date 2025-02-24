// Impure Functions: are those functions which give different value on each call

const randomFunction = (val, num)=>{
    return Math.random(val)* num;
}
var result1 = randomFunction(10, 100);
var result2 = randomFunction(10, 100);
console.log(result1); // 75.27157566949445
console.log(result2); // 75.27157566949445

// Even though, we have a same values 10 and 100 but still result would be changed on every print so it is a impure function which gives a changed value on each print.

