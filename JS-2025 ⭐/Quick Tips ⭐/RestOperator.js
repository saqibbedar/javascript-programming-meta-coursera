// Rest operator: when no of arguments is greater than the number of parameters, we use rest operator to get all the remaining arguments and put them into array return the values.

// In this example, we abcd() function which accepts three arguments but we have used ...rest at the end to check if the arguments are being passed more than the parameters so because of rest operator, it will create an array for all those extra arguments and will return an array at the end.

function abcd(a,b,c,...rest) {
    console.log(a,b,c,rest);
}
abcd(1,2,3,4,5,3,2,6,7)