// HTML element
const div = document.createElement("div");
div.innerText = "Creating HTML element using JavaScript";
div.setAttribute("id", "main");
div.setAttribute('class', 'main');
document.body.appendChild(div);

// applying CSS
div.style.position = 'absolute';
div.style.top= `50%`
div.style.left= `50%`
div.style.transform= `translate(-50%, -50%)`
div.style.position = 'fixed';