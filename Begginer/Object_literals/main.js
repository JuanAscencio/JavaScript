// Object literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
}
// You can add new properties
person.email = 'some@email.com';

const { firstName, lastName, address: {city}} = person;
console.log("This is the creation of variables\nBy Object literals")
console.log(firstName)
console.log(lastName)
console.log(city)


console.log(person);
console.log(person.firstName);
console.log(person.age, person.firstName);
console.log("A hobbie is: " + person.hobbies[0]);
console.log(`A direction is ${person.address.street}, ${person.address.city}`)