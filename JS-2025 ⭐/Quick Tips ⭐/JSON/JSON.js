const jsonSting = '{"greetings" : "Hello"}';
JSON.parse(jsonSting)
const aPlainObject = JSON.parse(jsonSting)
aPlainObject.greetings = 'Hi';

const data = {
    user : 'John',
    user2 : 'Wicky',
    user3 : 'Sonia'
}
JSON.stringify(data) // '{"user":"John","user2":"Wicky","user3":"Sonia"}'

// It's important to remember that while plain JavaScript objects can hold functions, JSON strings cannot. Another limitation is that valid JSON doesn't allow the use of JavaScript comments. Also when you stringify a JavaScript object containing a method, that method will be excluded from the stringify operation.


// MCQs: You can convert a JSON file to a JavaScript object so that you can work with that object's properties.