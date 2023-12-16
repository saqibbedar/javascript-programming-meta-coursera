/* DOM is like a TV remote that lets you change the webpage content on the screen.
The DOM is in the form of a JavaScript object with nested objects 
for different parts of the page. 

The DOM is the model of the HTML file saved as a JavaScript object in your browser's memory. 
The browser automatically builds the DOM for every webpage that it downloads.

For example, if you type a URL into your browser's address bar, 
the browser would fetch the webpage that exists on this domain.


If the browser connects to the server and it allows the browser to download the page, 
it will receive all the HTML code and save it in its memory. 
The browser will then show the downloaded page

To interact with the DOM, you can use the Elements tab inside the browser's DevTools.
The Elements tab allows you to interact with the DOM of the currently active webpage 
using a graphical user interface, also known as a GUI.
*/

const h2 = document.createElement('h2')
h2.innerText = 'This is an h2 Heading';
'This is an h2 Heading'
h2.setAttribute('id', 'subHeading')
h2.setAttribute('calss', 'secondry')
document.body.appendChild(h2);