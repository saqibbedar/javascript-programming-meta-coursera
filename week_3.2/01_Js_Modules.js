/*
In all versions of JS, all functions that are defined on the window object are global. 
While useful for simple projects, this created some issues when third party libraries or 
multiple developers became involved. 


For example, 
a global function from one script could override a function from another one 
using the same variable name, techniques were developed to bypass these issues 
but they were not without flaws. And so for a long time, JavaScript lacked 
built in natively supported module functionality.


⭐ An engineer at Mozilla named Kevin Bangor tried to fix 
this through a project called Server JS which was later renamed to Common JS 


CommonJS is designed to specify how modules should work outside of the browser environment.

 It is mostly used on server side JavaScript namely node.js 
 a downside of CommonJS is that browsers don't understand its syntax.
*/