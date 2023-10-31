// problem-05.js
// Reduce: Write a function that takes an array of numbers and returns the sum of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6



let array=[1,2,3]


function sumOfAll(array){
   return array.reduce((acc,item)=>acc+item)

}

let result=sumOfAll(array)

console.log(result)