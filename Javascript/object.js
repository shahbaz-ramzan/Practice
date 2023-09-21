let obj = {
  name: "Shahbaz",
  age: 25,
  city: "lahore",
};

delete obj.name;
console.log(obj);

obj.name = "shahz";
console.log(obj);
obj.address = "bwp";
console.log(obj);
delete obj.address;
delete obj.name;
console.log(obj);

obj.name = "Shahbaz";
obj.address = "Bahawalpur";

console.log(obj);

delete obj.age;
delete obj.city;
console.log(obj);

obj.age = "27";
obj.city = "Lahore";
console.log(obj);
// Write a function that returns the number of properties in an object.
// Input: {name: 'John', age: 25, city: 'New York'}
// Output: 3

let object = {
  name: "John",
  age: "25",
  city: "New York",
};

// function countProperties(obj) {
//   let count = 0;
//   for (let i = 0; i < obj.length; i++) {
//     count++;
//   }
// }

// const result = countProperties(object);
// console.log(result);
