// 1. Reverse: Write a function that takes an array and returns a new array with the elements reversed.
// Example Input: [1, 2, 3]
// Expected Output: [3, 2, 1]

// let array = [1, 2, 3];

// function reversed(array) {
//   return array.reverse();
// }

// const result = reversed(array);
// console.log(result);

// 2.Map: Write a function that takes an array of numbers and returns a new array with the numbers squared.
// Example Input: [1, 2, 3]
// Expected Output: [1, 4, 9]

// let array = [1, 2, 3];

// function squared(array) {
//   return array.map((n) => n * n);
// }

// const result = squared(array);
// console.log(result);

// Filter: Write a function that takes an array of numbers and returns a new array with only the numbers greater than 0.
// Example Input: [1, 2, 3, -1, -2, -3]
// Expected Output: [1, 2, 3]

// let array = [1, 2, 3, -1, -2, -3];

// function filter(array) {
//   return array.filter((b) => b > 0);
// }
// const result = filter(array);
// console.log(result);

// Map and Filter: Write a function that takes an array of numbers and returns a new array with only the even numbers squared.
// Example Input: [1, 2, 3, 4, 5, 6]
// Expected Output: [4, 16, 36]

// let array = [1, 2, 3, 4, 5, 6];

// function filtered(array) {
//   let even = array.filter((n) => n % 2 === 0);
//   return even.map((n) => n * n);
// }

// const result = filtered(array);
// console.log(result);

// Reduce: Write a function that takes an array of numbers and returns the sum of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6

// let array = [1, 2, 3];

// function reducer(array) {
//   return array.reduce((acc, cur) => acc + cur);
// }
// const result = reducer(array);

// console.log(result);

// Find: Write a function that takes an array of numbers and returns the first number greater than 1.
// Example Input: [1, 2, 3]
// Expected Output: 2

// let array = [1, 2, 3];

// function finder(array) {
//   return array.find((n) => n > 1);
// }

// const result = finder(array);

// console.log(result);

// Reduce: Write a function that takes an array of numbers and returns the product of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6

// let array = [1, 2, 3];

// function getProduct(array) {
//   return array.reduce((acc, n) => acc * n);
// }

// const result = getProduct(array);

// console.log(result);

// FindIndex: Write a function that takes an array of numbers and returns the index of the first number greater than 1.
// Example Input: [1, 2, 3]
// Expected Output: 1

let array = [1, 2, 3];

function greaterNumbers(array) {
  let numberGreater = array.find((n) => n > 1);

  console.log(numberGreater);
  return array.findIndex(numberGreater);
}

const result = greaterNumbers(array);

console.log(result);

// not done yet
