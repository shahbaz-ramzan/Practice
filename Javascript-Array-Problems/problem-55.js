// 55.From: Write a function that takes a string and returns an array of the characters in the string.
// Example Input: 'hello'
// Expected Output: ['h', 'e', 'l', 'l', 'o']



let text="hello"

// console.log(Array.from(text))

function stringToArray(text) {
    return Array.from(text)
}


let result=stringToArray(text)


console.log(result)
