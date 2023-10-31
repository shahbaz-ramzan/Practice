// Filter: Write a function that takes an array of numbers and returns a new array with only the numbers greater than 0.
// Example Input: [1, 2, 3, -1, -2, -3]
// Expected Output: [1, 2, 3]



let array=[1, 2, 3, -1, -2, -3]

function greater(){
	return array.filter((e)=>e>0)
}

let result=greater(array)
console.log(result)