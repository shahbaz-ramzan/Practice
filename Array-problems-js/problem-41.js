// 41. Fill: Write a function that takes an array of numbers and replaces all the elements with the number 0.
// Example Input: [1, 2, 3]
// Expected Output: [0, 0, 0]


let array=[1,2,3]


function fillWithZero(array){
    return array.fill(0)
}

let result=fillWithZero(array)

console.log(result)