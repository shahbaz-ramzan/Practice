// Find: Write a function that takes an array of numbers and returns the first number greater than 1.
// Example Input: [1, 2, 3]
// Expected Output: 2



let input=[1,2,3]

function findValue(input){
	return input.find((item)=>item>1)

}

let result=findValue(input)

console.log(result)