// Q:Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms)
let number = 5;
let n = 0;

for (let i = 0; i <= number; i++) {
  n += i;
}
console.log(n);

// Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

var arr=[15,2,45,12,7]

function findnum(number){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==number){
            return 2
        }
        
    }
}

console.log(findnum(2))

// Q:generate a random number?

function generate(){
   return Math.random()
}

console.log(generate())

// Q10:find number is positive , negative,zero


function find(number){
    if(number===0){
        console.log("number is zero")

    }
    else if (number<0){
        console.log("number is negative ")
    }else{
        console.log("number is positive")
    }
}

find(2)


// Q11:check even odd

function check(number){
    if(number%2===0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }
}

check(6)

// Q12:find the largest among three number

function largest(a,b,c){
    if(a>b && a>c){
        console.log("a is largest")
    }
    else if(b>a && b>c){
        console.log("b is largest")
    }else{
        console.log("c is largest")
    }
}

largest(6,9,2)