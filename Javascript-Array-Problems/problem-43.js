// 43.Join: Write a function that takes an array of strings and joins them together with a space between each string.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: 'apple banana cherry'

let array=["apple", "banana", "cherry"]


// console.log(array.join(" "))

function joinTheArray(array){
    return array.join(" ")
}

let result=joinTheArray(array)

console.log(result)

