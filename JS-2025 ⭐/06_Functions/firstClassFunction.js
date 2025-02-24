// First class functions: It is concept which allows us to treat functions as value and store them into a variable

// concept to treat functions like values

const func = ()=>{
    // this is first class function stored like a value in func variable
    console.log('This is a First Class Function');
}
func();

console.log("")

function myFunction(a) {
    a(10);
}
myFunction(()=>{
    console.log("Hello");
});