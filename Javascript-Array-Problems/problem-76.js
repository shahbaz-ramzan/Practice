// 76. Write a function that takes an array of strings and returns the longest string in the array.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: 'world'


let array=[ "nice", "to","hello", "world", "meet", "you"]

function longestString(array){
    let length=0
    let longest
    for(let i=0; i<array.length; i++){
        if(array[i].length>=length){
            length=array[i].length
            longest=array[i]
        }
    }
    return longest


}

let result=longestString(array)

console.log(result)