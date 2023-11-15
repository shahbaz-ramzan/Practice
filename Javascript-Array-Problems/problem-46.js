// 46. Slice: Write a function that takes an array of numbers and returns a new array with only the elements from index 1 to index 3.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [2, 3, 4]


let array=[1,2,3,4,5]

function returnElement1to3(array){
    return array.slice(1,4)
}

let result=returnElement1to3(array)

console.log(result)