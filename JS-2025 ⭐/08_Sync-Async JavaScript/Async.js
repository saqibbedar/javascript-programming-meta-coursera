// Async: start all tasks at one place, and whoever gets ready first just return that so it won't wait for other tasks to be done but behaves on tasks whether which is going to be complete first. 

// Examples of Async programming
// setTimeout()
// setInterval()
// fetch
// axios
// promises
// XMLHttpRequest

// async code is send to side stack until it be responded and as soon as it is responded and main stack is clear then its code is bring to the main stack and execution is made.

// As a whole, javascript is single threaded language which means it is sync by its nature, the execution is made when a task gets completed in stacks, first come first serve.

// Single thread: it means it only has power to perform single computation at a time, and javascript is a single threaded language and it can perform one operation at a time.