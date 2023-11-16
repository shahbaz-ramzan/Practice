// 72. Write a function that takes an array of numbers and returns the product of all odd numbers in the array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: 945


let array=[1,2,3,4,5,6,7,8,9,10]

function productOfOddNumbers(array){
    let product=1
    for(let i=0;i<array.length;i++){
        if(array[i]%2 !==0){
        product*=array[i]
        }
    }
    return product
}

let result=productOfOddNumbers(array)

console.log(result)