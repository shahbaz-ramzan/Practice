// 57.LastIndexOf: Write a function that takes an array of numbers and returns the index of the last occurrence of the number 2.
// Example Input: [1, 2, 3, 2, 4, 5, 2]
// Expected Output: 6


let array=[1,2,3,2,4,5,2]


function findLastIndex(array){
    return array.lastIndexOf(2)
}

let result=findLastIndex(array)


console.log(result)