// 44.Map: Write a function that takes an array of numbers and returns a new array with each number multiplied by 2.
// Example Input: [1, 2, 3]
// Expected Output: [2, 4, 6]


let array=[1,2,3,4]


function multiplyBy2(array){
    return array.map((n)=>n*2)
}

let result=multiplyBy2(array)

console.log(result)