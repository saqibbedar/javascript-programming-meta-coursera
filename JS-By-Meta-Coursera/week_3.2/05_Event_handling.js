const target = document.querySelector ('body');
function bodyClicked() {
    console.log('body is cliked');
}
target.addEventListener('click', bodyClicked)

function headingClicked() {
    console.log('clicked the heading') 
}

// I will use onclick function in html to make it functional
<h1 onclick="headingClicked()">This is heading</h1>