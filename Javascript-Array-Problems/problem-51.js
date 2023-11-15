// 51.Filter: Write a function that takes an array of numbers and returns a new array with only the even numbers.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [2, 4]


let array=[1,2,3,4,5]

function evenNumberArray(array){
    return array.filter((num)=>num%2===0)
}

let result=evenNumberArray(array)

console.log(result)