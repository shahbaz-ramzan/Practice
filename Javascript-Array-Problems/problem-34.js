// 34.Flat: Write a function that takes a nested array of numbers and returns a new array that is not nested.
// Example Input: [[1, 2], [3, 4], [5, 6]]
// Expected Output: [1, 2, 3, 4, 5, 6]

let array=[[1,2],[3,4],[5,6]]

// console.log(array.flat())

function removeNestedArray(array){
    return array.flat()
}

let result=removeNestedArray(array)

console.log(result)