// Objects 
var obj = {
    Name : "Saqib Bedar",
    Age : 19,
    City : "Larkana"
};

var obj2 ={
    username : "Hamza Khan",
    password : "@littleBoy",
    city : "Larkana",
}

console.log(""); // enter

for (const key in obj2) {
    console.log(key,'\t:', obj2[key]);
}

console.log(""); // enter

for (const key in obj) {
        var a = key;
        var b = obj[key];
        console.log(a, "\t:", b);
}

console.log(""); // enter

// above loop can be written as:
for (const key in obj) {
    console.log(key, "\t", obj[key]);
}