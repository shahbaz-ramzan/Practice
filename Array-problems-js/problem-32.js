// 32.Unshift: Write a function that takes an array of strings and adds the string 'orange' to the beginning of the array.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: ['orange', 'apple', 'banana', 'cherry']


let array=['apple', 'banana', 'cherry']


function addElementAtStart(array){
    array.unshift("orange")

    return array
}

let result=addElementAtStart(array)

console.log(result)