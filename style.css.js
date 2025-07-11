function addTask() {
    const input = document.getElementById('new-task');
    const list = document.getElementById('todo-list');
    const task = input.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
        input.value = '';
    }
}