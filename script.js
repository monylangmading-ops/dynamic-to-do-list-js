document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  
  loadTasks();

  function addTask(taskText, save = true) {

    if (!taskText) {
      taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task");
        return;
      }
    }

    const li = document.createElement('li');
    li.textContent = taskText;


    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    
    removeBtn.onclick = function () {
      li.remove();
      removeFromStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';


    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }


  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }


  function removeFromStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }


  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

