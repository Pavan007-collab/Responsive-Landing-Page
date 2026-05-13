document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  
  function addTask() {
    const task = taskInput.value.trim();
    if (task === '') return;

    
    const li = document.createElement('li');
    li.className = 'task-item';

    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task;

    
    span.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '×';
    removeBtn.title = 'Remove';

    removeBtn.addEventListener('click', function() {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
  }

  addBtn.addEventListener('click', addTask);

  taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
  });
});