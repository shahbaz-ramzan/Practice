// 64.Concat: Write a function that takes two arrays of numbers and returns a new array with the elements from both arrays.
// Example Input: [1, 2, 3], [4, 5, 6]
// Expected Output: [1, 2, 3, 4, 5, 6]


let array1=[1,2,3,]

let array2=[4,5,6]


function concatTwoArrays(array1,array2){
    return array1.concat(array2)
}

let result=concatTwoArrays(array1,array2)

console.log(result)

