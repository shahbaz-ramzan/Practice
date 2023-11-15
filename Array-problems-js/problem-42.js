// 42.Includes: Write a function that takes an array of numbers and returns true if the array contains the number 5.
// Example Input: [1,2,3,4,5]
// Expected Output: True

let array=[1,2,3,4,5];


function checkValueExists(array){
    return array.includes(5)
}

let result=checkValueExists(array)


console.log(result)