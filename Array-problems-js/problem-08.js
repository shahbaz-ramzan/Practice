// 8.FindIndex: Write a function that takes an array of numbers and returns the index of the first number greater than 1.
// Example Input: [1, 2, 3]
// Expected Output: 1



let array=[1,2,3]


function returnIndex(array){
	return array.findIndex((item)=>item>1)

}

let result=returnIndex(array)


console.log(result)

