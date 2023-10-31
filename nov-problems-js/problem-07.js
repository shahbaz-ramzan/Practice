// 7.Reduce: Write a function that takes an array of numbers and returns the product of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6


let array=[1,2,3]

function getProduct(array){
	return array.reduce((acc,item)=>acc*item)
}

let result=getProduct(array)

console.log(result)