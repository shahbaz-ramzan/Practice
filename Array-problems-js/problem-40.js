// 40.Concat: Write a function that takes an array of strings and returns a new array that contains all the strings twice.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: ['apple', 'banana', 'cherry', 'apple', 'banana', 'cherry']




let array=["apple", "banana", "cherry"]


function twiceString(array){
    return array.concat(array)
}


let result=twiceString(array)


console.log(result)