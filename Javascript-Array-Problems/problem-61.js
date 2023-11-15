// 61. Shift: Write a function that takes an array of numbers and removes the first element from the array.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [2, 3, 4, 5]


let array=[1,2,3,4,5]


function removeFirstElement(array){
     array.shift()
     return array
}

let result=removeFirstElement(array)


console.log(result)