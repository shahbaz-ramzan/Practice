// 27.Map: Write a function that takes an array of strings and returns a new array that contains the lengths of the strings.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: [5, 6, 6]

let array=["apple", "banana", "cherry"]


function returnLength(array){
      return array.map((n)=>n.length)
}

let result=returnLength(array)

console.log(result)