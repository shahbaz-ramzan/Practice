// 9. Reduce: Write a function that takes an array of numbers and returns the maximum number.
// Example Input: [1, 2, 3]
// Expected Output: 3
// Solve with reduce

let array=[1,2,3,6,4,0,8]

function returnMaximum(array){
    let result= array.reduce((acc=0,val)=>{
           if(val>acc){
            acc=val
           }
           return acc
    })
    return result
}

let result=returnMaximum(array)


console.log(result)