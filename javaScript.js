// Write a function that takes an array of numbers and returns a new array with the numbers that are divisible by 3.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: [3, 6, 9]

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function divisible(arr) {
  return arr.filter((el) => el % 3 === 0);
}

console.log(divisible(arr));

// Write a function that takes an array of strings and returns a new array with the strings in reverse order.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: ['you', 'meet', 'to', 'nice', 'world', 'hello']

var arr = ["hello", "world", "nice", "to", "meet", "you"];

function reverse(arr) {
  return arr.reverse();
}

console.log(reverse(arr));

// Write a function that takes an array of numbers and returns a new array with only the even numbers.
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

var arr = [1, 2, 3, 4, 5, 6];

function even(arr) {
  return arr.filter((el) => el % 2 === 0);
}
console.log(even(arr));

// Write a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: ['hello', 'meet', 'nice', 'to', 'world', 'you']

var arr = ["hello", "world", "nice", "to", "meet", "you"];

function sortedAlpabetical(arr) {
  return arr.sort();
}

console.log(sortedAlpabetical(arr));
