// 5.Write a function that takes a string as input and returns the last character of the string.
// Sample input: "hello"
// Expected output: "o"



function returnLastChar(str){
    let length = str.length-1
    return str.charAt(length)
}

let result=returnLastChar("hello")

console.log(result)