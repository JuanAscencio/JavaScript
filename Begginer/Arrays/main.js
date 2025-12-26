const some_text = 'technology, it, computers, code';
const numbers = new Array(1,2,3,4,5);
const fruits = ["apples", "oranges", "bananas", "grapes", "lemons", "kiwis"];

console.log(typeof some_text)
console.log(some_text.split(', '))

console.log(typeof numbers);
console.log(numbers);

console.log(typeof fruits);
console.log(fruits[2]);
fruits.push("mangos");
fruits.unshift("strawberries");
console.log(fruits);
fruits.pop()
console.log(fruits);
console.log(Array.isArray(fruits))
console.log(Array.isArray("fruits"))
console.log(fruits.indexOf("mangos"))

