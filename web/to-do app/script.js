document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');


    // Add todo event listeners
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => e.key === 'Enter' && addTodo());

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            createTodoItem(todoText);
            todoInput.value = '';
            saveTodos();
        }
    }

    function createTodoItem(text, isCompleted = false) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = text;
        if (isCompleted) span.classList.add('completed');

        span.addEventListener('click', function () {
            this.classList.toggle('completed');
            saveTodos();
        });

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'todo-actions';

        actionsDiv.append(
            createActionButton('Edit', 'edit-btn', () => {
                const newText = prompt('Edit your todo:', text);
                if (newText?.trim()) {
                    span.textContent = newText.trim();
                    saveTodos();
                }
            }),
            createActionButton('Delete', 'delete-btn', () => {
                li.remove();
                saveTodos();
            })
        );

        li.append(span, actionsDiv);
        todoList.appendChild(li);
    }

    function createActionButton(text, className, onClick) {
        const btn = document.createElement('button');
        btn.className = className;
        btn.textContent = text;
        btn.addEventListener('click', onClick);
        return btn;
    }

    function saveTodos() {
        const todos = [];
        document.querySelectorAll('.todo-item').forEach(item => {
            todos.push({
                text: item.querySelector('.todo-text').textContent,
                completed: item.querySelector('.todo-text').classList.contains('completed')
            });
        });
    }
});