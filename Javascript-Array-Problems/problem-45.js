// 45.Reduce: Write a function that takes an array of numbers and returns the sum of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6


let array=[1,2,3]

function returnSum(array){
    return array.reduce((acc=0,val)=>{
        acc+=val;
        return acc
    })
}

let result=returnSum(array)

console.log(result)