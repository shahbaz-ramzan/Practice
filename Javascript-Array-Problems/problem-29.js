// 29.Push: Write a function that takes an array of numbers and adds the number 5 to the end of the array.
// Example Input: [1, 2, 3]
// Expected Output: [1, 2, 3, 5]



let array=[1,2,3]

function addElementAtEnd(array){
     array.push(5)
     return array
}


let result=addElementAtEnd(array)


console.log(result)