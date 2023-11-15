// 18.Sort: Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// Example Input: [3, 1, 4, 2]
// Expected Output: [1, 2, 3, 4]



let array=[3,1,4,2,9,0]


function sortedArray(array){
    return array.sort((a,b)=>a-b)
}


let result=sortedArray(array)

console.log(result)