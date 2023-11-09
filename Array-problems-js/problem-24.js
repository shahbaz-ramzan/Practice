// 24.Includes: Write a function that takes an array of strings and returns true if the array contains the string 'apple'.
// Example Input: ['banana', 'apple', 'orange']
// Expected Output: true


let array=["banana", "apple", "orange"]


function containString(array){
    return array.includes("apple")
}


let result=containString(array)

console.log(result)