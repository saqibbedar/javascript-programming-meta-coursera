// Event Loop: it is a functionality loop between main-stack and side-stack that watch-dog whether main is empty or not, or side-stack is done with its task or not, if it is then it would be bring to main stack to perform the execution only when main-stack is empty.

// Event Loop: it is a functionality loop between main-stack and side-stack
// that watch-dog whether main is empty or not, or side-stack is done with its task or not,
// if it is then it would be bring to main stack to perform the execution only when main-stack is empty.

console.log("hello"); // first executed
console.log("hello2");// second executed
setTimeout(() => {
    console.log("hello3"); // fourth executed because of side-stack
}, 0);
console.log("hello"); // third executed