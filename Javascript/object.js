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

const obj = {
  name: "john",
  age: 25,
  city: "New York",
};

function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}

const result = countProperties(obj);
console.log("value", result);
