/*
// Ctrl + Shift + I. Show console on browser
alert("Hola mundo"); // Pop up 
console.log("Hello World"); // Display on console
console.error("This in an error"); // Alert
console.warn("This in a warning"); // Warning
*/

// Creating variables
// var, let, const: use more let or const
// Always use const at least you know you are going
// to reasign values

// let you can reasign values
let age = 30;
console.log(age);

age = 37;
console.log(age);

// cons it's constant
const age2=20;
console.log(age2);

let score;
score = 10;
console.log(score)

// Data types
// String, Numbers, Boolean, null, undefined, Symbol
const name = "Juan";
const  number = 78;
const float = 78.45;
const isTrue = true;
const itsNull = null;
const y = undefined; // same as "let z;"
let z; //When you dont initialize a variable it's type is undefined
const s = 'Hello world!';

console.log(typeof name);
console.log(typeof number);
console.log(typeof float);
console.log(typeof isTrue);
console.log(typeof itsNull);
console.log(typeof y);
console.log(typeof z);


console.log("My name is " + name + " and I am " + age);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

console.log(s.length)
console.log(s.toLocaleUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0,5))
console.log(s.split(''));

// I am at minute 20:00
// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=4s