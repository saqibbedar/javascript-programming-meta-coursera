// Exercise: Web page content update

// To capture user input, you can use the built-in prompt() method, like this:


let answer = prompt('What is your Name?')

// Once you have the user-provided input inside the answer variable, 
// you can manipulate it any way you need to.


// For example, you can output the typed-in information on the screen, as an <h1> HTML element.

// let answer = prompt('What is your name?');  // Mentioned above

if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

// This is probably the quickest and easiest way to capture user input on a website, 
// but doing it this way is not the most efficient approach, especially in more complex scenarios.


// You'll begin by coding out a "test solution" to the task at hand:

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})


var h1 = document.querySelector('h1')
var arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click']
function handleClicks() {
        switch(h1.innerText) {
            case arr[0]:
                h1.innerText = arr[1]
                break
            case arr[1]:
                h1.innerText = arr[2]
                break
            case arr[2]:
                h1.innerText = arr[3]
                break
            default:
                h1.innerText = arr[0]
        }
    }
    h1.addEventListener('click', handleClicks);
    