document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  // Add task on button click or Enter key
  function addTask() {
    const task = taskInput.value.trim();
    if (task === '') return;

    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';

    // Task text
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task;

    // Complete toggle
    span.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    // Remove button
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