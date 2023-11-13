// 31.Shift: Write a function that takes an array of strings and removes the first element from the array.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: ['banana', 'cherry']



let array=["apple", "banana", "cherry"]

function removeFirstElement(array){
    array.shift();
    return array
}


let result=removeFirstElement(array)


console.log(result)