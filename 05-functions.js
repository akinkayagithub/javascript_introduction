/*
A function is a block of code that performs a specific task
Functions are also known as methods or behaviors of the class
A JS function is defined with the function keyword, followed by a name, and by parentheses ().
The parentheses may include parameter names separated by commas.

Syntax:
function name(parameter1, parameter2, parameter3) {
    // code to be executed
}

Why do we need functions?
The main advantage is code reusability. We can write a method once and use it multiple times. We do not have to rewrite the entire code each time

Local Variables
Variables declared within a JS function, become local to the function.
Local variables can only be accessed within the function.
*/

// void function
function sayHi(){
    console.log("Hi");
}

sayHi(); // Hi


//return function
function sum(a, b){
    return a + b;
}

console.log(sum(3, 5)); // 8
console.log(sum(2.5, 3.5)); // 6
console.log(sum("4", "6")); // 46


// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b){
    return a < b ? a : b; 
}

console.log(min(5, 7)); // 5
console.log(min(7, 7)); // 7
console.log(min(9, 7)); // 7


//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n){
    return x ** n;
}

console.log(pow(3, 2)); // 9
console.log(pow("3", 3)); // 27
console.log(pow(4, 2)); // 16
console.log(pow("4", "2")); // 16