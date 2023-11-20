// 9.Write a function that takes a string as input and returns a new string with all spaces removed.
// Sample input: "hello world"
// Expected output: "helloworld"

let str="hi how are you ?"

function removedSpaces(str){
    return str.replaceAll(" ","")

}

let result=removedSpaces(str)

console.log(result)