"use strict";
// Get references to DOM elements
const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
// Add an event listener to the button for adding tasks
button.addEventListener('click', () => {
    const todoText = input.value; // Get the value from the input field
    if (todoText) {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = todoText; // Set the text of the list item
        todoList.appendChild(li); // Append the new task to the list
        input.value = ''; // Clear the input field
    }
});
