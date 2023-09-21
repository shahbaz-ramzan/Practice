// let obj = {
//   name: "Shahbaz",
//   age: 25,
//   city: "lahore",
// };

// delete obj.name;
// console.log(obj);

// obj.name = "shahz";
// console.log(obj);
// obj.address = "bwp";
// console.log(obj);
// delete obj.address;
// delete obj.name;
// console.log(obj);

// obj.name = "Shahbaz";
// obj.address = "Bahawalpur";

// console.log(obj);

// delete obj.age;
// delete obj.city;
// console.log(obj);

// obj.age = "27";
// obj.city = "Lahore";
// console.log(obj);
// Write a function that returns the number of properties in an object.
// Input: {name: 'John', age: 25, city: 'New York'}
// Output: 3

// let object = {
//   name: "John",
//   age: "25",
//   city: "New York",
// };

// function countProperties(obj) {
//   let count = 0;
//   for (let i = 0; i < obj.length; i++) {
//     count++;
//   }
// }

// const result = countProperties(object);
// console.log(result);

// let mobile = {
//   brand: "Samsung",
//   model: "Galaxy Note 9",
// };

// for (let key in mobile) {
//   console.log(`${key}: ${mobile[key]}`);
// }

// for (let key in mobile) {
//   console.log(`${key}:${mobile[key]}`);
// }

// let obj = {
//   name: "Shahbaz",
//   age: 27,
//   city: "lahore",
//   state: "punjab",
//   country: "pakistan",
// };
// let count = 0;
// for (let key in obj) {
//   count++;
//   console.log(`${key} :${obj[key]}`, count);
// }

// let obj = {
//   name: "Shahbaz",
//   age: 27,
//   city: "lahore",
//   state: "punjab",
//   country: "pakistan",
// };
// const { name, age, city, state, country } = obj;

// console.log(age);
// console.log(city);
// console.log(state);
// console.log(country);
// console.log(name);
// //
// console.log("another way to get the value from the object");
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);
// console.log(obj.state);
// console.log(obj.country);

// Write a function that returns the number of properties in an object.
// Input: {name: 'John', age: 25, city: 'New York'}
// Output: 3

// const obj = {
//   name: "john",
//   age: 25,
//   city: "New York",
// };

// function countProperties(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//   }
//   return count;
// }

// const result = countProperties(obj);
// console.log("value", result);

// Write a function that checks if an object is empty.
// Input: {}
// Output: true

// let obj = {};

// function checks(obj) {
//   // to find length in object we use this code
//   let length = Object.keys(obj).length;
//   if (length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = checks(obj);

// console.log(result);

// let obj = {};
// let length = obj.lenght;
// // it  will give undefined becase length method is used in array
// console.log(obj.length); // undefined

// let obj = {
//   name: "shahbaz",
//   age: 23,
// };

// let length = Object.keys(obj).length;

// console.log(length);

// let obj = {
//   name: "shahbaz",
//   age: 25,
//   address: "bwp",
// };

// let length = Object.keys(obj).length;

// console.log(length);

// let obj = {
//   name: "shahbaz",
//   age: 25,
//   city: "lahore",
//   state: "punjab",
//   country: "pakistan",
// };

// let count = Object.keys(obj).length;

// console.log(count);

// 3.Write a function that checks if a given key exists in an object.
// Input: {name: 'John', age: 25, city: 'New York'}, 'age'
// Output: true

// let obj = {
//   name: "John",
//   age: 25,
//   city: "New York",
// };

// function checks(obj) {
//   for (let key in obj) {
//     if (key === "age") {
//       return true;
//     }
//   }
//   return false;
// }

// const result = checks(obj);
// console.log(result);

// Write a function that returns the values of an object in an array.
// Input: {name: 'John', age: 25, city: 'New York'}
// Output: ['John', 25, 'New York']

// let obj = {
//   name: "John",
//   age: 25,
//   city: "New York",
// };

// function getValues(obj) {
//   let values = [];
//   for (let key in obj) {
//     values.push(obj[key]);
//   }
//   return values;
// }

// console.log(getValues(obj));

// for (let key in obj) {
//   console.log(obj[key]);
// }

// Write a function that returns the keys of an object in an array.
// Input: {name: 'John', age: 25, city: 'New York'}
// Output: ['name', 'age', 'city']

// function getKeys(obj) {
//   let keys = [];
//   for (let key in obj) {
//     keys.push(key);
//   }
//   return keys;
// }
// // /anonymous object/
// const result = getKeys({
//   name: "John",
//   age: 25,
//   city: "New York",
// });
// console.log(result);

// 6.Write a function that returns the length of the longest property value in an object.
// Input: {name: 'John', age: 25, city: 'New York'}
// Output: 8

let obj = {
  name: "John",
  age: 25,
  city: "New York",
};

function getLongest(obj) {
  let longest = 0;
  for (let key in obj) {
    if (Object.properties(obj).length > longest) {
      longest = Object.properties(obj).length;
    }
  }
  return longest;
}
let result = getLongest(obj);
console.log(result);
// not completed yet
