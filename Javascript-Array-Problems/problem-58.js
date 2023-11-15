// 58. Pop: Write a function that takes an array of numbers and removes the last element from the array.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [1, 2, 3, 4]



let array=[1,2,3,4,5]


function removeLastElement(array){
     array.pop()
     return array
}


let result=removeLastElement(array)

console.log(result)