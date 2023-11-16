
// 71. Write a function that takes an array of numbers and returns the sum of all even numbers in the array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: 30


let array=[1,2,3,4,5,6,7,8,9,10]

function sumOfEvenNumbers(array){

     let evenNumbers=array.filter((n)=>n%2===0)

     return evenNumbers.reduce((acc,val)=>acc+val,0)
}

let result=sumOfEvenNumbers(array)

console.log(result)