/*
String templates terminology is also known as template strings, template literals or backticks syntax.
String templates use backticks (``) rather than single or double quotes to define a string.
Template literals makes it easy to embed single or double quotes into your string.
Template literals allows to create multiline strings.


Interpolation
It is replacing variables or expressions with real values.
Template literals provide an easy way to interpolate variables and expressions into strings.
The method is called string interpolation. ${...}


Variable Substitutions
Template literals allow variables in strings. ${variable}


Expression Substitution
Template literals allow expressions in strings. ${expression}
*/


//BackTics Syntax
let address = `Chicago IL, 12345`;
console.log(address); // Chicago IL, 12345


// Quotes Inside Strings
let desc1 = `I'm John Doe`; 
let desc2 = `I'm a "JavaScript" specialist`; 
console.log(desc1); // I'm John Doe
console.log(desc2); // I'm a "JavaScript" specialist


// Multiline Strings
let quote = 
`I
can
do
it`;

console.log(quote);
/*
I
can
do
it
*/


// Variable Substitutions
let fname = "John";
let lname = 'Doe';
console.log(`Hello ${fname} ${lname}!`); // Hello John Doe!


// Expression Substitution
let productPrice = 1.5, quantity = 5;
console.log(`The total amount of ${quantity} products is $${productPrice * quantity}`); // The total amount of 5 products is $7.5