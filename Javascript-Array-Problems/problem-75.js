// 75. Write a function that takes an array of numbers and returns the average of all the numbers.
// Input: [1, 2, 3, 4, 5]
// Output: 3


let array=[1,2,3,4,5]


function average(array){
    let length=array.length
    let sum=0
    for(let i=0;i<array.length;i++){
       sum+=array[i]

    }
   return  sum/length
}

let avg=average(array)

console.log(avg)