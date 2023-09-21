// Write a function that takes a string as input and returns the length of the string.
// Sample input: "Hello World"
// Expected output: 11

// let string = "Hello World";

// function findLength(string) {
//   return string.length;
// }
// console.log("length is", findLength(string));

// Write a function that takes a string as input and returns the string in uppercase.
// Sample input: "hello world"
// Expected output: "HELLO WORLD"

// let string = "hello world";

// function toUpperCase(string) {
//   return string.toUpperCase();
// }
// console.log("TO UPERCASE:", toUpperCase(string));

// Write a function that takes a string as input and returns the string in lowercase.
// Sample input: "HELLO WORLD"
// Expected output: "hello world"

// let string = "HELLO WORLD";

// console.log(string);

// function toLowerCase(string) {
//   return string.toLowerCase();
// }

// console.log("tolower case:", toLowerCase(string));

// Write a function that takes a string as input and returns the first character of the string.
// Sample input: "hello"
// Expected output: "h"

// let string = "hello";

// function getFirst(string) {
//   return string.charAt(0);
// }
// console.log(getFirst(string));

// Write a function that takes a string as input and returns the last character of the string.
// Sample input: "hello"
// Expected output: "o"

// let string = "hello";

// function getLast(string) {
//   let length = string.length;
//   return string.charAt(length - 1);
// }
// console.log(getLast(string));

// 6.Write a function that takes a string as input and returns a new string with the first character of the input string removed.
// Sample input: "hello"
// Expected output: "ello"

// let string = "hello";

// function removeString(string) {
//   return string.slice(1);
// }
// console.log(removeString(string));

// 7.Write a function that takes a string as input and returns a new string with the last character of the input string removed.
// Sample input: "hello"
// Expected output: "hell"

// let string = "hello";

// function removeLast(string) {
//   let length = string.length;
//   return string.slice(0, length - 1);
// }
// console.log(removeLast(string));

// Write a function that takes two strings as input and concatenates them.
// Sample input: "hello", "world"
// Expected output: "hello world"

// let string = "hello";
// let string1 = "world";

// function concatination(string, string1) {
//   return `${string} , ${string1}`;
// }
// console.log(concatination(string, string1));

// 9.Write a function that takes a string as input and returns a new string with all spaces removed.
// Sample input: "hello world"
// Expected output: "helloworld"

// let string = "hello world";
// function removeSpaces(string) {
//   return string.trim().join();
// }
// console.log(removeSpaces(string));

// let string = "hello world";

// function removeSpaces(string) {
//   return string.replace(/\s/g, "");
// }

// console.log(removeSpaces(string));

// let string = "helloworld";

// function removeSpaces(string) {
//   return string.replace(/\s/g, " ");
// }
// console.log(removeSpaces(string));

// Write a function that takes a string as input and returns a new string with all vowels removed.
// Sample input: "hello world"
// Expected output: "hll wrld"

// let string = "hello world";

// function removeVowels(string) {
//   return string.replace(/[aeiou]/g, "");
// }

// console.log(removeVowels(string));

// Write a function that takes a string as input and returns a new string with all consonants removed.
// Sample input: "hello world"
// Expected output: "eo o"

// function removeConsonants(inputString) {
//   const vowels = "aeiouAEIOU";
//   let stringWithoutConsonants = "";

//   for (let i = 0; i < inputString.length; i++) {
//     const char = inputString.charAt(i);
//     if (vowels.includes(char) || char === " ") {
//       stringWithoutConsonants += char;
//     }
//   }

//   return stringWithoutConsonants;
// }

// const inputString = "hello world";
// const result = removeConsonants("hello world");
// console.log(result); // Output: "eo o"

let string = "hello world";

function removeConsonants(string) {
  const vowels = "AEIOUaeiou";
  const withoutConsonants = "";
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (vowels.includes(char) || char === " ") {
      withoutConsonants += char;
    }
  }
  return withoutConsonants;
}

console.log(removeConsonants(string));
