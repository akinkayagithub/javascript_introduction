/*
In a programming language, variables are considered as containers used to store data.
JavaScript uses the keywords var, let and const for variables.
= sign (assignment operator) is used to assign values to variables.


When to use var?
var keyword is used in all JavaScript code from 1995 to 2015.
let and const keywords were added to JavaScript in 2015.
If you want your code to run in older browsers, you must use var.


When to use JavaScript const?
const is used if you will not need to change your variable value.
const variables have final values which cannot be changed.


When to use JavaScript let?
Variables defined with let cannot be updated-reassigned with a new value.
*/

var name; // declaration

name = "John"; // assignment

name = "Jane"; // re-assignment


let age = 45; // declaration & initialization

age = 23; // re-assignment

console.log(age); // 23


const address = "Chicago";

address = "Miami"; //Uncaught TypeError: Assignment to constant variable.