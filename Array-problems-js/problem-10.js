// 10 FindIndex: Write a function that takes an array of numbers and returns the index of the maximum number.
// Example Input: [1, 2, 3]
// Expected Output: 2


let array=[3,4,6,7,2,3,1,9]


function indexOfMaximumNumber(array){
     let max=array.reduce((acc=0,val)=>{
        if(val>acc){
            acc=val
        }
        return acc
     })

     return array.indexOf(max)

}

let result=indexOfMaximumNumber(array)

console.log(result)