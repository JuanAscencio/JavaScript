// Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
/*
    // Methods - same as prototype
    // It's not in the object it's in the prototype
    this.getBirthYear = function(){
        return this.dob.getFullYear()
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
*/
}

// Prototype
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}


/*
// Class - sintactic sugar
class Person{
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear()
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

}
*/


// Instantiate object
const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Mary", "Smith", "3-6-1970");

console.log(person1);
console.log(person2);

console.log(`The year of birth is: ${person1.getBirthYear()}`);
console.log(`The year of birth is: ${person2.getBirthYear()}`);

console.log(`Person 1. Full name: ${person1.getFullName()}`);
console.log(`Person 2. Full name: ${person2.getFullName()}`);
