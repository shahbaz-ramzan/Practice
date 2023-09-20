// let arr = [1, 2, 3, 4];

// function fun(arr) {
//   var arr2 = arr;
//   console.log(arr2);
// }
// fun(arr);
// console.log(arr);

// let array = [1, 2, 3, 4];
// let newArray = [...array];
// console.log(newArray);
// newArray = [...array, 5, 6];
// console.log(newArray);
// console.log(array);

// DEEP COPY

// const develop1 = {
//   name: "shahbaz",
//   age: 25,
// };

// const develop2 = JSON.parse(JSON.stringify(develop1));
// develop2.age = 27;
// console.log(develop1);
// console.log(develop2);

// shallow copy with refernce to an other variable

// const develop1 = {
//   name: "shahbaz",
//   age: 25,
//   address: {
//     country: "pakistan",
//     state: "punjab",
//     city: "bwp",
//   },
// };

// const develop2 = develop1;
// develop2.age = 27;
// console.log(develop1);
// console.log(develop2);

// const develop2 = Object.assign({}, develop1);
// develop2.age = 27;
// develop2.address.city = "lahore";
// console.log(develop1);
// console.log(develop2);

// let array = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
// ];

// let array2 = array;

// // console.log(array2);

// array2[0][0] = 99;

// console.log(array);

let array = [1, 2, 4, 4, 5, 6, 7, 8, 0];
// push add one or more element in the end of the array
array.push(9);
console.log(array);
// pop : remove one element from the end of array and retrun that element
let pop = array.pop();
console.log(array);
console.log("pop", pop);
// shift remove one element from  the start of the array and return that element
let shift = array.shift();
console.log(array);
console.log("shift", shift);
// add one or more element to the end of the array
array.unshift(1, 2);
console.log(array);
// concat is used for merge and add the two array
let array2 = [11, 12, 13, 22, 32, 11];
let concat = array.concat(array2);
console.log("conscat", concat);
// join this method is used to convert the all array elemnt into string
let join = array.join();
console.log("join", join);
let stringofArray = ["m", "shahbaz", "ramzan"];
let convertArraystring = stringofArray.join();
console.log(convertArraystring);
// Slice method is usefull for for sub array that return specific part of array and cannot modify the original array
let slice = array.slice(0, 5);
console.log("slice", slice);
// splice method is used remove specific elements from the array and return removed element also modified the original array we can also modifed in the original array with new element on the specific location

let remove = array.splice(0, 3);
console.log("remove", remove);
console.log("original array", array);
// add element in the array with splice

array.splice(0, 3, 9, 9, 9);
console.log("splice to add element ", array);
// forEach iterate on all element  in the array and can not retun new array

array.forEach((e) => console.log(e));
// map iterate on all element in the array and return a new array
let mapArray = array.map((e) => e + 5);
console.log("map array and add 5:", mapArray);
//filter is return a new array depend on elements that pass the condition of filter
console.log(array);
let filterArray = array.filter((e) => e > 7);
console.log("Filterarray greater than 7", filterArray);
// reduce method is used to get value in single form in which one value is accummulater and the second is current
let reduce = array.reduce((acc, cur) => acc + cur);
console.log("reduce value with add", reduce);
// some check if one element in the array pass the given condition

// every method is used to test all element pass the condition or not if pass the return is true otherwise is false
let every = array.every((el) => el >= 0);
console.log("every", every);
// find method is used  find the vlaue that is exist in the array or not
let find = array.find((el) => el === 8);
console.log("find 8:", find);
