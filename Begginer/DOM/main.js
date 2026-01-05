// DOM: Document Object Model

/* ---------------------------------------------------------
    SELECT FROM THE DOM:
    Here are my notes of how you can select different 
    elements of the DOM. And some interactions you
    can have.
   --------------------------------------------------------- */
// Single element selectors
// only selects one or the first one

const form = document.getElementById("my-form");
console.log(form);

console.log(document.querySelector(".container"));

// Multiple element selectors
// querySelectorAll returns a Node list -> You can use array methods
console.log(document.querySelectorAll(".item")) // Recommended

// getElementsbyClassName returns a HTML Colection -> Have to conver to an array to use array methods
console.log(document.getElementsByClassName("item"));

// Return a HTML Colection
console.log(document.getElementsByTagName("li"));

// Loop example: This part is commented on the index.html
console.log("Loop example, selecting from DOM.")
const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));



/* ---------------------------------------------------------
    Manipulating the DOM - Changing UI:
    This changes can be seen on the comment part of the
    index.html <ul>
   --------------------------------------------------------- */


/* // Start of the comment *****************
// Cannot have two types of event on the same button

const ul = document.querySelector(".items");

// ul.remove(); // Eliminates all ul from class items
// ul.lastElementChild.remove(); // Eliminates last element
// ul.firstElementChild.textContent = "Hello"; // Changes text for the first element
//ul.children[1].innerText = "Brad"; // Changes text of the second element
//ul.lastElementChild.innerHTML = "<h1>Hello</h1>"; // You can enter HTML dynamically

const btn = document.querySelector(".btn")
//btn.style.background = "red"; // Manipulate style on real time

// There are lots of events: click, mouseover, mouseout
btn.addEventListener("click", (e) => {
    // On console you can see this changes
    e.preventDefault(); // It stops the restar of the console
    console.log(`click.\n This is the element that the event is on: ${e.target}.\n Classname: ${e.target.className}\n ID: ${e.target.id}`);
});

// UI changes
btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("body").classList.add("bg-dark")
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello</h1>"
});

*/ // End of the comment *****************

/* ---------------------------------------------------------
                        Form Script
   --------------------------------------------------------- */
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === "" || emailInput.value === "") {
        msg.classList.add("error")
        msg.innerHTML = "Please enter all fields";

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear fileds
        nameInput.value = "";
        emailInput.value = "";
    }
}