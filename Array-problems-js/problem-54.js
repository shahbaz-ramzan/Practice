// 54.Find: Write a function that takes an array of numbers and returns the first number that is greater than 3.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: 4


let array=[1,2,3,4,5]

function greaterThan3(array){
    return array.find((n)=>n>3)
}

let result=greaterThan3(array)

console.log(result)