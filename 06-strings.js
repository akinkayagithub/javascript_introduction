/*
JS strings are useful for holding data that can be represented in text form.
A JS string is zero or more characters written inside quotes.
We can use either double or single quotes to create a string.
NOTE: backtick (`) is also used for strings
Backticks are an ES6 feature that allows you to create strings in JavaScript. 
Backticks are mostly used for code embedding purposes.
Besides, using backticks makes it easier for string operations.

Escape sequences
\n  inserts a new line
\t  inserts a tab space
\"  inserts double quote
\'  inserts single quote
\\  inserts backslash
*/

let fname = "John";
let lname = 'Doe';
let fullname = `${fname} ${lname}`;

console.log(fname); // John
console.log(lname); // Doe
console.log(fullname); // John Doe


let sentence = "We are \"JavaScript\" programmers";
console.log(sentence); // We are "JavaScript" programmers

let text = 'It\'s all good!';
console.log(text); // It's all good!


let greeting1 = "Hello";
let greeting2 = new String("Hello");

console.log(greeting1 == greeting2); // true
console.log(greeting1 === greeting2); // false