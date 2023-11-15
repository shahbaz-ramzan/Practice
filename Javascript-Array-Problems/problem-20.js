// 20.Slice: Write a function that takes an array of numbers and returns a new array that contains only the first three numbers.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [1, 2, 3]



let array=[1,2,3,4,5,6,7,8]

function returnFirstThreeNumbers(array){
    return array.slice(0,3)
}

const result=returnFirstThreeNumbers(array)


console.log(result)