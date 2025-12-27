function addNums(num1 = 1, num2 = 1){
    return num1 + num2 ;
}

const restNums = (num1 = 4, num2 = 10) => num1 - num2;

// Returns Not A Number or NaN
// Or if the default operation
console.log(addNums()); 
console.log(addNums(5,4));

console.log(restNums()); 
console.log(restNums(5,40));
