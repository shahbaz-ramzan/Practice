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

// Q13: find the prime number

function findPrime(number){
    let isprime=true
    if(number===1){
        console.log("1 is not prime or compositive number")
    }else if(number>1){
        for(let i=2;i<number;i++){
            if (number%i===0){
                isprime=false
                break
            }

        }
    }
    if(isprime){
        // console.log(`${number} is prime number`)
        return number

    }else{
        console.log(`${number} is not prime number`)
    }

}
findPrime(4)

// var arr=[1,2,3,4,5,5,6]
// let findprime=(number)=>{

//     if(number===1){
//         return "number is not prime"
//     }else if(number>1){
//         for(let i=2;i<number;i++){
//             if(number%i===0){
//                 return number
//             }
//             else{
//                 return " number is not prime"
//             }
//         }
//     }

// }

// let result=arr.map((item)=>findprime(item))

// console.log(result)


var arr = [1, 2, 3, 4, 5, 5, 6];

let isPrime = (number) => {
    if (number <= 1) {
        return false; // 1 is not a prime number
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If number is divisible by any other number, it's not prime
        }
    }
    
    return true; // If no divisors were found, it's prime
};

let result = arr.map((item) => {
    if (isPrime(item)) {
        return `${item} is prime`;
    } else {
        return `${item} is not prime`;
    }
});

console.log(result);
