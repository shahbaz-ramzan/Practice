
// 12.Filter: Write a function that takes an array of numbers and returns a new array with only the even numbers.
// Example Input: [1, 2, 3, 4]
// Expected Output: [2, 4]



let input=[1,2,3,4]

function evenNumber(input) {
    return input.filter((item)=>item%2===0)
}


let result=evenNumber(input)

console.log(result)