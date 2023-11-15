// Map and Filter: Write a function that takes an array of numbers and returns a new array with only the even numbers squared.
// Example Input: [1, 2, 3, 4, 5, 6]
// Expected Output: [4, 16, 36]


let array=[1,2,3,4,5,6]

function evenSquare(array){
	let evenNumbers=array.filter((item)=>item%2===0)
	return evenNumbers.map((item)=>item*item)
}

let result=evenSquare(array)
console.log(result)