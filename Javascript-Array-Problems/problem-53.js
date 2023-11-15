// 53.Fill: Write a function that takes an array of numbers and replaces all the elements from index 1 to index 3 with the number 0.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [1, 0, 0, 0, 5]

let array=[1,2,3,4,5]

// console.log(array.fill(0,1,4))

function replaceswithZero(array){
    return array.fill(0,1,4)
}

let result=replaceswithZero(array)

console.log(array)