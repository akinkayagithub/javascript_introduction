/*
length property


Extracting characters
charAt() - return the character at a specified index (position) in a string.
charCodeAt() - returns the unicode of the character at a specified index in a string.
Property access with []


Concatenating & interpolating
concat() – concatenate multiple strings into a new string.
Template literals – learn how to substitute variables in a string.


Extracting strings
split() – split a string into an array of substrings.
substring() – extract a substring from a string.
substr() - extract a part of a string with the length specified.
slice() – extract a part of a string.


Searching
search() – searches a string for a string (or a regular expression) and returns the position of the match.
indexOf() – get the index of the first occurrence of a substring in a string.
lastIndexOf() – find the index of the last occurrence of a substring in a string.
includes() – check if a string contains a substring.
startsWith() – check if a string starts with another string.
endsWith() – determine if a string ends with another string.
match() - returns an array containing the results of matching a string against a string (or a regular expression).
matchAll() - 


Trimming
trim() – remove whitespace characters from a string.
trimStart() – remove the leading whitespace characters of a string.
trimEnd() – remove the ending whitespace characters of a string.


Replacing
replace() – replace a substring in a string with a new one.
replaceAll() – replace all occurrences of a substring that matches a pattern with a new one.


Changing cases
toUpperCase – return a string with all characters converted to uppercase.
toLowerCase – return a string with all characters converted to lowercase.


Padding
padStart() & padEnd() – pad a string with another string until the result string reaches the given length.
*/

//String length property
console.log("\n-------String length property-------\n");
let fname = "John";
console.log(fname.length); // 4


//String character access
console.log("\n-------String character access-------\n");
console.log(fname.charAt(0)); // J
console.log(fname[0]); // J
console.log(fname.charCodeAt(0)); // 74 - check ASCII

console.log(fname.charAt(10)); // returns empty
console.log(fname[10]); // returns undefined


//Concatenating & interpolating
console.log("\n-------Concatenating & interpolating-------\n");
let s1 = "Java", s2 = "Script";
console.log(s1.concat(s2));
console.log(s1 + s2);


//Extracting strings
console.log("\n-------Extracting strings-------\n");
let sentence = "JavaScript is a programming language";
let word = "JavaScript";

console.log(sentence.split(" ")); // ['JavaScript', 'is', 'a', 'programming', 'language']
console.log(word.split("")); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

console.log(word.slice(2, 4)); // va
console.log(word.slice(4, 15)); // Script

console.log(word.substring(2, 4)); // va
console.log(word.substring(4, 15)); // Script

console.log(word.substr(2, 4)); // vaSc

console.log(word.slice(-4, -2)); // ri
console.log(word.substring(4, -4)); // Java  - as negative numbers are considered as zero


//Searching
console.log("\n-------Searching-------\n");
let quote = "You can do it";
let text = "back to back";

console.log(quote.indexOf("You")); // 0
console.log(quote.indexOf("can")); // 4
console.log(quote.indexOf("xxx")); // -1

console.log(text.indexOf("back")); // 0
console.log(text.lastIndexOf("back")); // 8
console.log(text.lastIndexOf("xxx")); // -1

console.log(quote.indexOf("You", 5)); // -1
console.log(quote.lastIndexOf("do", 0)); // -1 - as it searches backwards (from the end to the beginning)

console.log(quote.includes("do")); // true
console.log(quote.includes("xxx")); // false

console.log(quote.startsWith("You")); // true
console.log(quote.startsWith("you")); // false
console.log(quote.startsWith("You", 4)); // false

console.log(quote.endsWith("it")); // true
console.log(quote.endsWith("it.")); // false
console.log(quote.endsWith("can", 7)); // true

console.log(quote.search("You")); // 0


//Trimming
console.log("\n-------Trimming-------\n");
let city = "  Chicago  ";

console.log(city.trim()); // "Chicago" 
console.log(city.trim().length); // 7

console.log(city.trimStart()) // "Chicago  "
console.log(city.trimStart().length); // 9

console.log(city.trimEnd()) // "  Chicago"
console.log(city.trimEnd().length); // 9


//Replacing
console.log("\n-------Replacing-------\n");
let address = "123 Street 123";

console.log(address.replace("123", "Nice")); // Nice Street 123 - replaces only the first match
console.log(address.replace(/123/g, "Nice")); // Nice Street Nice - g flag here stands for global match
console.log(address.replaceAll("123", "Nice")); // Nice Street Nice


//Changing cases
console.log("\n-------Changing cases-------\n");
let greeting = "Hello";

console.log(greeting.toUpperCase()); // HELLO
console.log(greeting.toLowerCase()); // hello


//Padding
console.log("\n-------Padding-------\n");
let letter = "$";

console.log(letter.padStart(5, "1")); // 1111$
console.log(letter.padEnd(3, "1")); // $11