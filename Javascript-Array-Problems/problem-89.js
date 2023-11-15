// 89. Write a function that takes an array of strings and returns a new array with the strings in reverse order.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: ['you', 'meet', 'to', 'nice', 'world', 'hello']



let array=["hello", "world", "nice", "to", "meet", "you"]


function arrayInReverseOrder(array){
    return array.reverse()

}


let result=arrayInReverseOrder(array)

console.log(result)

