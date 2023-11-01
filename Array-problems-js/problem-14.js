// 14.Map: Write a function that takes an array of numbers and returns a new array with the numbers squared.
// Example Input: [1, 2, 3]
// Expected Output: [1, 4, 9]


let array=[1,2,3,4,5]


function getSquared(array){
    return array.map((i)=>i*i)
}


let result=getSquared(array)

console.log(result)