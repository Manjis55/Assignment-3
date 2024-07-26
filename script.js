// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const dingSound = document.getElementById('ding-sound');

    addButton.addEventListener('click', addTodo);

    // Add event listeners to pre-added items
    document.querySelectorAll('.todo-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', toggleTodo);
    });
    document.querySelectorAll('.todo-item .delete-button').forEach(button => {
        button.addEventListener('click', deleteTodo);
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTodo);

        const span = document.createElement('span');
        span.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', deleteTodo);

        todoItem.appendChild(checkbox);
        todoItem.appendChild(span);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
        todoInput.value = '';
    }

    function toggleTodo() {
        const todoItem = this.parentNode;
        todoItem.classList.toggle('checked');
        if (this.checked) {
            dingSound.play();
            todoList.appendChild(todoItem);
        } else {
            todoList.insertBefore(todoItem, todoList.firstChild);
        }
    }

    function deleteTodo() {
        const todoItem = this.parentNode;
        todoList.removeChild(todoItem);
    }
});
