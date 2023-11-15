// 17.Find: Write a function that takes an array of objects and returns the first object that has a 'name' property equal to 'John'.
// Example Input: [{name: 'Alice'}, {name: 'John'}, {name: 'Bob'}]
// Expected Output: {name: 'John'}



let array=[{name: 'Alice'}, {name: 'John'}, {name: 'Bob'},{name:"shahbaz"}]


function findObject(array){
    return array.find((obj)=>obj.name==="John")

}


let result=findObject(array)

console.log(result)