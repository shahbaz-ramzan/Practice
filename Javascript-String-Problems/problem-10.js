// 10.Write a function that takes a string as input and returns a new string with all vowels removed.
// Sample input: "hello world"
// Expected output: "hll wrld"


let str="hello world"

function removevowels(str){
    return str.replace(/[aeiouAEIOU]/g,"")
}

let result=removevowels(str)

console.log(result)