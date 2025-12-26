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
const { id, text, isCompleted } = todos;
console.log(todos)
console.log(todos[1].text)

// JSON convert
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);