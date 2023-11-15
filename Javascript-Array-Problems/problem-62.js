// 62. Unshift: Write a function that takes an array of numbers and adds the number 0 to the beginning of the array.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [0, 1, 2, 3, 4, 5]

let array=[1,2,3,4,5]

function addElementInBeginning(array){
    array.unshift(0)
    return array
}


let result=addElementInBeginning(array)


console.log(result)

