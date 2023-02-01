/*
JS DATA TYPES

PRIMITIVES
1. String
A String is a sequence of characters like "John Doe".
Strings are written with quotes. You can use single or double quotes but mostly double quotes.

2. Numbers
All JS numbers are stored as decimal numbers (floating point).
Numbers can be written with, or without decimals.

3. BigInt
All JS numbers are stored in a a 64-bit floating-point format.
JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

4. Boolean
Boolean can only have two values: true or false.
It is used often with conditional statements.

5. Undefined
In JS, a variable without a value, has the value undefined. The type is also undefined.

6. Null
7. Symbol


REFERENCE TYPES - Object
    The object data type can contain arrays, objects, collections, etc.

    Array
    JS arrays are written with square brackets [].
    Array items are separated by commas.
    Array indexes are zero-based.

    Object
    JS objects are written with curly braces {}.
    Object properties are written as name:value pairs, separated by commas.


The typeof Operator
JS typeof operator helps finding the type of a variable.
The typeof operator returns the type of a variable or an expression.
*/

// String
let myName = "John Doe"; // String data type
console.log(myName); // John Doe


//Numbers
let number1 = 10;
let number2 = 10.0;
let number3 = 10.5;

console.log(number1); // 10
console.log(number2); // 10
console.log(number3); // 10.5


//BigInt
let bigNumber = BigInt("8723643563475683746583465"); 
console.log(bigNumber); // 8723643563475683746583465n


//Boolean
let b1 = true;
let b2 = false;
let b3 = 3 == 3;
let b4 = 3 == 4;

console.log(b1); // true
console.log(b2); // false
console.log(b3); // true
console.log(b4); // false


// Array
let cities = ["Chicago", "Tokyo", "Paris"];
let numbers = [10, 2.5, 5.0, -7];

console.log(cities); // ["Chicago","Tokyo","Paris"]
console.log(numbers); // [10,2.5,5,-7]

console.log(cities[1]); // Tokyo
console.log(numbers[0]); // 10


//Object
let person = {
    fName: "John",
    lName: "Doe",
    age: 45,
    email: "johndoe@gmail.com"
}

console.log(person); // {"fName": "John", "lName": "Doe", "age": 45, "email": "johndoe@gmail.com"}
console.log(person.age); // 45
console.log(person.email); // johndoe@gmail.com



//The typeof Operator

// Numbers
console.log(typeof 37); // number
console.log(typeof 3.14); // number
console.log(typeof NaN); // number
console.log(typeof Number("1")); // number
console.log(typeof Number("Hello")); // number
console.log(typeof 348756283765823765n); // bigint


// Strings
console.log(typeof ""); // string
console.log(typeof "John"); // string
console.log(typeof ''); // string
console.log(typeof "123"); // string
console.log(typeof String("Hello")); // string
console.log(typeof String("123")); // string


// Booleans
console.log(typeof true); // boolean
console.log(typeof false); // boolean


// Symbols
console.log(typeof Symbol()); // symbol
console.log(typeof Symbol("foo")); // symbol
console.log(typeof Symbol("123")); // symbol


// Undefined
console.log(typeof undefined); // undefined
console.log(typeof myVar); // undefined


// Objects
console.log(typeof {key: "value"}); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof ["abc", 123]); // object
console.log(typeof new Date()); // object
console.log(typeof new String()); // object
console.log(typeof new Boolean()); // object
console.log(typeof new Number()); // object


// Functions
console.log(typeof function () {}); // function
console.log(typeof Math.min); // function