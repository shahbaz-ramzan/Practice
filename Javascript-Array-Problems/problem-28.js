// 28.Filter: Write a function that takes an array of objects and returns a new array that contains only the objects with a 'price' property less than 10.
// Example Input: [{name: 'apple', price: 5}, {name: 'banana', price: 8}, {name: 'orange', price: 12}]
// Expected Output: [{name: 'apple', price: 5}, {name: 'banana', price: 8}]


let array=[{name: 'apple', price: 5}, {name: 'banana', price: 8}, {name: 'orange', price: 12}]



function priceCompare(array){
    return array.filter((n)=>n.price<=10)

}

let result=priceCompare(array)

console.log(result)