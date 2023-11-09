// 23.Some: Write a function that takes an array of numbers and returns true if at least one number is negative.
// Example Input: [1, -2, 3]
// Expected Output: true


let array=[1,-2,3]

function checkNegativeNumber(array){
    return array.some((n)=>n<0)
}

let result=checkNegativeNumber(array)

console.log(result)