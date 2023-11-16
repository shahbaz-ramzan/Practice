// 77. Write a function that takes an array of numbers and returns a new array with the numbers sorted in descending order.
// Input: [5, 2, 8, 1, 6]
// Output: [8, 6, 5, 2, 1]



let array=[5,2,8,1,6]


function descendingOrder(array){
    return array.sort((a,b)=>b-a)
}

let result=descendingOrder(array)


console.log(result)