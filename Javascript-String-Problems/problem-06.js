// 6.Write a function that takes a string as input and returns a new string with the first character of the input string removed.
// Sample input: "hello"
// Expected output: "ello"

function returnNewString(str){
    return str.slice(1,str.length)
}

let result=returnNewString("hello")

console.log(result)