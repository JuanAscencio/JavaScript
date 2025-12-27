// IF
const x = 6;
const y = 11;
const z = 10;

if(x > 5 && y > 10){
    console.log('X is more than 5 or y is more than 10');
}

if(x>5){
    console.log("X is greater than 5");
}

if(z != 10){
    console.log("Z is diferent than 10");
}else{
    console.log("Z equals 10");
}

// Ternary operator
const color = x > 10 ? "red" : "blue";
console.log(color);

// Switch
switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("the color isn't red or blue");
        break;
}