// 16.Concat: Write a function that takes two arrays and returns a new array that contains all the elements from both arrays.
// Example Input: [1, 2], [3, 4]
// Expected Output: [1, 2, 3, 4]



let array1=[1,2,3,4]
let array2=[5,6,7,8,9]


function consatFun(array1,array2){
    return array1.concat(array2)
}

let result=consatFun(array1,array2)

console.log(result)