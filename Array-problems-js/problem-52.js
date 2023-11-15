// 52.Every: Write a function that takes an array of numbers and returns true if all the numbers are positive.
// Example Input: [1, 2, -3]
// Expected Output: false


let array=[1,2,-3]

function isAllPositive(array){
    return array.every((n)=>n>0)
}

let result=isAllPositive(array)

console.log(result)