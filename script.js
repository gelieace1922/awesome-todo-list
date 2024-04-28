function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var li = document.createElement('li');
        li.innerHTML = taskText + ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(element) {
    element.parentElement.remove();
}
