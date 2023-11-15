// 48.Splice: Write a function that takes an array of numbers and removes the second and third elements from the array.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [1, 4, 5]


let array=[1,2,3,4,5]


function removes3and4Elements(array){
    array.splice(1,2)
    return array
}

let result=removes3and4Elements(array)


console.log(result)