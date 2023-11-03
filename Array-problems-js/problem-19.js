
// 19.Join: Write a function that takes an array of strings and returns a new string that is the concatenation of all the strings with a comma separator.
// Example Input: ['a', 'b', 'c']
// Expected Output: 'a,b,c'



let array=['a','b','c','d','e','f'];


function returnString(array){
    return array.join()  // return the array in form a,b,c
    // return array.join('')  // return the array in form abcdef

}


let result=returnString(array)

console.log(result)