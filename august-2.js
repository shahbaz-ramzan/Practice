// Write a function that takes an array of numbers and returns the median of the numbers.
// Input: [1, 2, 3, 4, 5]
// Output: 3

var arr = [5, 3, 2, 4, 1, 6];

function findMedian(arr) {
  sortedArr = arr.sort((a, b) => a - b);
  let n = sortedArr.length;
  if (n % 2 === 1) {
    return sortedArr[Math.floor(n / 2)];
  } else {
    let midleIndx = n / 2;
    return (sortedArr[midleIndx - 1] + sortedArr[midleIndx]) / 2;
  }
}

let median = findMedian(arr);
console.log(median);

// Write a function that takes an array of strings and returns a new array with only the strings that are palindromes.
// Input: ['racecar', 'hello', 'world', 'madam', 'civic']
// Output: ['racecar', 'madam', 'civic']

var arr = ["racecar", "hello", "world", "madam", "civic"];

function isPalindrome(str) {
  let reversestr = str.split("").reverse().join("");
  if (str == reversestr) {
    return str;
  }
}
function findPalindrome(arr) {
  return arr.filter((str) => isPalindrome(str));
}

console.log(findPalindrome(arr));
