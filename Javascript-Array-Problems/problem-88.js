
// 88.Write a function that takes an array of numbers and returns a new array with only the even numbers.
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]



let array=[1,2,3,4,5,6]


function evenNumberArray(array){
    return array.filter((n)=>n%2===0)
}

let result=evenNumberArray(array)

console.log(result)