// 38.Some: Write a function that takes an array of numbers and returns true if any of the numbers are even.
// Example Input: [1, 2, 3]
// Expected Output: true



let array=[1,2,3,4]


function checkEvenElement(array){
    return array.some((n)=>n%2==0)
}

let result=checkEvenElement(array)

console.log(result)