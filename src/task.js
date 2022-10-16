import plus from './plus.png';
import circle from './plus-circle-outline.png';

/*const toDo = (title, dueDate) => {
  const title = title;
  const dueDate = dueDate;

  const getTitle = () => title;
  const getDueDate = () => dueDate;

  const setTitle = (title) => title = title;
  const setDueDate = (dueDate) => dueDate = dueDate;

  return {
    getTitle, getDueDate, setTitle, setDueDate};
}; */

function addTasksForm() {
  const container = document.createElement('div');
  container.classList.add('task-form');
  const input = document.createElement('input');
  const addCancel = document.createElement('div');
  const addBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  cancelBtn.textContent = 'Cancel';
  addBtn.classList.add('add-btn');
  cancelBtn.classList.add('cancel-btn');
  input.type = 'text';
  input.id = 'task-name';
  input.name = 'task-name';
  input.minlength = 1;
  input.classList.add('project-input');
  addCancel.classList.add('add-cancel');
  addCancel.append(addBtn);
  addCancel.append(cancelBtn);
  container.append(input);
  container.append(addCancel);
  return container;
}

function addTasksBtn() {
  const addTaskBtn = document.createElement('div');
  addTaskBtn.classList.add('new-task');
  const addTaskTxt = document.createElement('p');
  const addTaskImg = document.createElement('img');
  addTaskImg.src = plus;
  addTaskTxt.textContent = 'New Task';
  addTaskBtn.classList.add('task-btn');
  addTaskBtn.append(addTaskImg);
  addTaskBtn.append(addTaskTxt);
  return addTaskBtn;
}

function clearTasksBtn() {
  const taskBtn = document.querySelector('.task-btn');
  taskBtn.style.display = 'none';
}

function clearTasksForm() {
  const taskForm = document.querySelector('.task-form');
  taskForm.style.display = 'none';
}

function showTasksBtn() {
  const taskBtn = document.querySelector('.task-btn');
  taskBtn.style.display = 'flex';
}

function addTask() {
  clearTasksForm(); 
  const container = document.querySelector('.container');
  const taskNameInput = container.querySelector('.project-input');
  const addTaskBtn = document.querySelector('.task-btn');
  const newTask = document.createElement('div');
  newTask.classList.add('new-task');
  const newTaskImg = document.createElement('img');
  const newTaskTxt = document.createElement('p');
  newTaskImg.src = circle;
  newTaskTxt.textContent = taskNameInput.value; 
  newTask.append(newTaskImg);
  newTask.append(newTaskTxt);
  container.insertBefore(newTask, addTaskBtn);
  taskNameInput.value = ''; 
  showTasksBtn(); 
}

function cancelTask() {
  clearTasksForm(); 
  const container = document.querySelector('.container');
  const taskNameInput = container.querySelector('.project-input');
  taskNameInput.value = ''; 
  showTasksBtn(); 
}

function showTasksForm() {
  const taskForm = document.querySelector('.task-form');
  const addBtn = taskForm.querySelector('.add-btn');
  const cancelBtn = taskForm.querySelector('.cancel-btn');
  taskForm.style.display = 'block';
  addBtn.addEventListener('click', addTask);
  cancelBtn.addEventListener('click', cancelTask);
}


function loadTasks() {
  const container = document.querySelector('.container');
  const newTaskBtn = addTasksBtn();
  container.append(newTaskBtn);

  const newTaskForm = addTasksForm();
  newTaskForm.style.display = 'none';
  container.append(newTaskForm);

  newTaskBtn.addEventListener('click', () => {
    clearTasksBtn();
    showTasksForm();
  });
}

export {loadTasks};