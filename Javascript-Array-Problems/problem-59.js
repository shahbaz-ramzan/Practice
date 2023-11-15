// 59. Push: Write a function that takes an array of numbers and adds the number 6 to the end of the array.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [1, 2, 3, 4, 5, 6]



let array=[1,2,3,4,5]

function addElement(array){
     array.push(6)
     return array

}


let result=addElement(array)

console.log(result)
