
// 11.Filter: Write a function that takes an array of numbers and returns a new array with only the odd numbers.
// Example Input: [1, 2, 3, 4]
// Expected Output: [1, 3]


let input=[1,2,3,4 ]


function returnOdd(input) {
   return input.filter((item)=>item%2 !== 0)
}

let result=returnOdd(input)

console.log(result)