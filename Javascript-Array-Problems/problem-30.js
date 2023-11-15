// 30.Pop: Write a function that takes an array of numbers and removes the last element from the array.
// Example Input: [1, 2, 3]
// Expected Output: [1, 2]



let array=[1,2,3]


function removeElemntFromArray(array){
    array.pop()
    return array
}

let result=removeElemntFromArray(array)

console.log(result)