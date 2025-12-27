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
        isCompleted: false
    },
];


// forEach, map, filter
todos.forEach(function(todo) {
   console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText)

const todoIsCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoIsCompleted);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);