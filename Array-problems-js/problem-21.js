// Splice: Write a function that takes an array of strings and removes the first two elements.
// Example Input: ['a', 'b', 'c']
// Expected Output: ['c']


let array=["a","b","c"]


function removeElement(array){
     array.splice(0,2)
     return array
}

let result= removeElement(array)

console.log(result)