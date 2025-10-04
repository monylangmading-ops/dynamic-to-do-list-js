document.addEventListener('DOMContentLoaded', ()=>{
const addButton = document.getElementById('Add Task');
const taskinput = document.getElementById('task-input');
const tasklist = document.getElementById('task-list');

function addTask(){
    const taskText = document.getElementById('task-input').value.trim();
if (taskText === "") {
    alert("Please enter a task");
    return; 
}
    
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    removeBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById('task-list').appendChild(li);

    document.getElementById('task-input').value = '';
}


});