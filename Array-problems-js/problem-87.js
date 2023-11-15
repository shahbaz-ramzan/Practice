// 87. Write a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: ['hello', 'meet', 'nice', 'to', 'world', 'you']


let array=["hello", "world", "nice", "to", "meet", "you"]


function sortTheArray(array){
    return array.sort()
}

let result=sortTheArray(array)


console.log(result)

