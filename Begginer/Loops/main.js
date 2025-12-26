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

// Output
for(let i=0; i < todos.length; i++){
    console.log(`ID: ${todos[i].id}\nText: ${todos[i].text}`)
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
