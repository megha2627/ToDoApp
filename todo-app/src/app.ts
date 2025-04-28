// Get references to DOM elements
const input = document.getElementById('todo-input') as HTMLInputElement;
const button = document.getElementById('add-btn') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

// Add an event listener to the button for adding tasks
button.addEventListener('click', () => {
    const todoText = input.value; // Get the value from the input field

    if (todoText) {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = todoText; // Set the text of the list item
        todoList.appendChild(li);  // Append the new task to the list
        
        input.value = '';          // Clear the input field
    }
});
