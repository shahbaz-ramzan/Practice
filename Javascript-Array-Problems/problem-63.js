// 63. Some: Write a function that takes an array of numbers and returns true if at least one of the numbers is even.
// Example Input: [1, 3, 5, 6]
// Expected Output: true



let array=[1,3,5,6]

function anyElmentIsEven(array){
    return array.some((n)=>n%2===0)
}

let result=anyElmentIsEven(array)

console.log(result)

