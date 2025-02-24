// Types in JavaScript
// there are two types in JavaScript 

// 1. Primitive  2. Reference

// Primitive = number, string, null, undefined, Boolean
// Aur jiska copy karny par real copy hojaey wo value Primitive type hoti ha

var a = 10;
b = a;
b = b+2; // output of b is 12 and a's is 10 still.

// referece = [], (), {};
// aisi koi bhi value jisko copy karny par real value copy nahi hota, 
// balki us main value ka refrence pass hojata hai,
// ussy hum referece value khty hain.

var a = [1,2,3,4];
var b = a;
b.pop(); 

// here b is equale to a means what b has no it's own value but it holds a's value
// which is [1,2,3,4]; but when I use pop() function with b it will effect a 
// as now a's value is [1,2,3] and same for b. this is main thing in referece 
// that we are reffering from particular thing a particular thing. 