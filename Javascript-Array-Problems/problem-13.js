// 13
// Map: Write a function that takes an array of numbers and returns a new array with the numbers doubled.
// Example Input: [1, 2, 3]
// Expected Output: [2, 4, 6]


let array=[1,2,3,4,5]


function doubleNumber(array){
    return array.map((i)=>i*2)
}

const result=doubleNumber(array)

console.log(result)