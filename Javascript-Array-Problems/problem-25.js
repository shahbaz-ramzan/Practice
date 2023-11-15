// IndexOf: Write a function that takes an array of numbers and returns the index of the first number that is divisible by 3.
// Example Input: [1, 2, 3, 4, 5, 6]
// Expected Output: 2


let array= [1, 2, 3, 4, 5,6]

function findIndex(array){
    // return array.indexOf()
    let n=array.find((n)=>n%3==0)
    console.log(n)
     return array.indexOf(n)
}

let result=findIndex(array)

console.log(result)