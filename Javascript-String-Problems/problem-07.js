// 7.Write a function that takes a string as input and returns a new string with the last character of the input string removed.
// Sample input: "hello"
// Expected output: "hell"


function removeTheLastChar(str){
    return str.slice(0,str.length-1)
}

let result=removeTheLastChar("hello")

console.log(result)