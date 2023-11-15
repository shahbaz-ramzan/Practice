// 90. Write a function that takes an array of numbers and returns a new array with the numbers that are divisible by 3.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: [3, 6, 9]


let array=[1,2,3,4,5,6,7,8,9]


function divisibleBy3(array){
    return array.filter((n)=>n%3===0)
}

let result=divisibleBy3(array)

console.log(result)