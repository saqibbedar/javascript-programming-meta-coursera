function addFive(val) {
    return val + 5;
}
module.exports = addFive;

// write npm init -y in terminal to install node.js modules Hi
// Install jest npm install --save-dev jest
// Run npm run test
// create a new file .test.js to run the test
// run it in teminal by giving this command npm run test



// Assignment

/*
1.  open "{}package.json" than open the "terminal" input "cd ./jest-testing"this  step makes the "pointing to `jest-testing` directory  "

2. in the terminal input "npm install --save-dev jest". Be careful not to put double quotes around the statement, this step make the "Install the jest npm package using the npm install command and the --save-dev flag.  "

3.in the terminal input "npm run test" wait test if you got color green "pass " it means you got it!

4.open "JS timesTwo.js"  input the code: */


function timesTwo(num) {
    return 2*num
}
// Task 2: Export the timesTwo function as a module
module.exports=timesTwo

const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20)
});