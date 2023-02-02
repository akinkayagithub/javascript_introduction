/*
Assignment Operator
= is used to assing a value to a variable
+= addition assignment
-= subtraction assignment
*= multiplication assignment
**= exponentiation assignment
%= remainder assignment


Arithmetic operators
+ addition
- subtraction 
* multiplication
** exponentiation
/ division
% modulus
++ increment
-- decrement


Comparison operators
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator


Logical operators
&&	logical and
||	logical or
!	logical not

*/


//Assignment operators
let a = 1, b = 2, c = 3, d = 4, e = 5, f = 6;

console.log(a += 2); // 3
console.log(b -= 1); // 1
console.log(c *= 3); // 9
console.log(d **= 2); // 16
console.log(e /= 5); // 1
console.log(f %= 4); // 2


//Arithmetic operators
let x = 6, y = 4;

console.log(x + y); // 10
console.log(x - y); // 2
console.log(x * y); // 24
console.log(x / y); // 1.5
console.log(x % y); // 2
console.log(x ** 2); // 36
console.log(y++); // 4
console.log(y); // 5


// comparison operators
let num1 = 3, num2 = 5, num3 = 3, num4 = "3", num5 = "5";

console.log(num1 == num2); // false
console.log(num1 == num3); // true
console.log(num1 === num3); // true

console.log(num1 == num4); // true
console.log(num1 === num4); // false

console.log(num2 != num3); // true
console.log(num2 != num5); // false
console.log(num1 !== num3); // false
console.log(num1 !== num4); // true

console.log(num2 > num3); // true
console.log(num4 < num5); // true
console.log(num2 >= num3); // true
console.log(num2 > num4); // true

console.log(2 > 3 ? "John" : "Jane"); // Jane


//Logical operators
let b1 = true, b2 = false;

console.log(b1 && b2); // false
console.log(b1 && (3 > 5)); // false
console.log(b2 || !b1); // false
console.log(b2 || (2 === 2)); // true