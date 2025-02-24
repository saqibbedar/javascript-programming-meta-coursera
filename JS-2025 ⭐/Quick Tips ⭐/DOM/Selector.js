// JavaScripts dot manipulation

// qerySelector

document.querySelector('p') // select the p tag in html file
document.querySelector('a') // select the anchor tag in html file
document.querySelectorAll('p') // select all the p tags available in p tag.




/* Another useful JavaScript selector is get element by ID which can find objects 
in the dawn that match a specified html ID attributes.
For example, let's say we want to find something on this page with the idea of heading, 
I typed document.getelement by ID. */

document.getElementById('heading') // it will find the 



/* 
let's use a similar method that returns an element based on a specified class name 
rather than ID. We can do this by calling document.getElementsByClassName
*/

document.getElementsByClassName('txt') 


/*⭐⭐⭐ it is important to note that the word element is singular for ID and plural for class name. 
Additionally, suppose the element you're looking for cannot be found in that case you will be 
returned null for IDs. An empty collection represented by square brackets for class names.
*/