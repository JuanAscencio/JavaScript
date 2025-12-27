// An array of objects
const todos = [
    {
        id: 1,
        text: "Take out the trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist app",
        isCompleted: true
    },
];

// Works. But it's not the best way
/*
for(let i=0; i < todos.length; i++){
    console.log(`ID: ${todos[i].id}\nText: ${todos[i].text}`)
}
*/

// Better
for(let todo of todos){
    console.log(todo.text)
}

// For loops
for(let i=0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`)
}

//While
let i = 0;
while(i<=10){
    console.log(`While Loop Number: ${i}`);
    i++;
}
