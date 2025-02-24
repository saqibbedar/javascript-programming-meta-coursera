// push pop shift unshift and splice
// push is used to add some value and pop do it's opposite it removes the value in last
// unshift is used to add a number in starting of array list 
// and shift is used to remove that one from the list 
// splice is used to remove values in middle of an array 

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// adding some value using push
arr.push(9)
console.log(arr) // 1, 2, 3, 4, 5, 6, 7, 8, 9

// removing 9 from the list 
arr.pop() // remove the last number from the list
console.log(arr); //1, 2, 3, 4, 5, 6, 7, 8

// adding num in starting of array
arr.unshift(0)
console.log(arr); // 0, 1, 2, 3, 4, 5, 6, 7, 8

// removing num in starting of array
arr.shift()
console.log(arr); //1, 2, 3, 4, 5, 6, 7, 8

// removing values in middle of an array using splice
arr.splice(1, 2) // splice takes two number the first one is that which is to be removed and second shows it's range where to stop
console.log(arr); // 2 and 3 would be removed becuase 2 is 1 index and I have targeted two to be removed so three will be also removed from the list
// output: 1, 4, 5, 6, 7, 8,
