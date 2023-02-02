/*
Conditional statements are used to execute different blocks of codes on different conditions.
For such cases we can use below statements;
    Use if to specify a block of code to be executed, if a specified condition is true
    Use else to specify a block of code to be executed, if the same condition is false
    Use else if to specify a new condition to test, if the first condition is false
    Use switch to specify many alternative blocks of code to be executed

NOTE: Switch cases use strict comparison (===).
The values must be of the same type to match.
A strict comparison can only be true if the operands are of the same type.
*/

// if statement
if (true) {
    console.log("Hello World");
}


// if-else statement
let a = 2, b = 3;

if (a > b) {
    console.log("a is more than b");
}
else {
    console.log("b is more than or equals b");
}


// if- else if - else statement
let number = 5;

if (number > 0) {
    console.log("The number is positive");
}
else if (number < 0) {
    console.log("The number is negative");
}
else {
    console.log("The number is neutral");
}


// switch statement
let day = new Date().getDay();

switch (new Date().getDay()) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("ERROR!");
}