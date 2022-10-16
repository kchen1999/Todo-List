import list from './format-list-bulleted.png';
import plus from './plus.png';
import { clearContainer } from './sidemenu';
import { setActiveBtn } from './sidemenu';
import { loadTasks } from './task';

function loadProject(e) {
  clearContainer();
  const container = document.querySelector('.container');
  const mainHeader = document.createElement('p');
  mainHeader.textContent = e.currentTarget.textContent;
  mainHeader.classList.add('main-header');
  container.append(mainHeader);
  loadTasks();
  setActiveBtn(e.currentTarget);
}

function clearProjectBtn() {
  const addProjectsBtn = document.querySelector('.new-project');
  addProjectsBtn.style.display = 'none';
}

function showProjectBtn() {
  const addProjectsBtn = document.querySelector('.new-project');
  addProjectsBtn.style.display = 'flex';
}

function addProjectBtn() {
  const addProjectsBtn = document.createElement('div');
  addProjectsBtn.classList.add('new-project');
  const addProjectsTxt = document.createElement('p');
  const addProjectsImg = document.createElement('img');
  addProjectsImg.src = plus;
  addProjectsTxt.textContent = 'New Project';
  addProjectsBtn.classList.add('side-menu-btn');
  addProjectsBtn.append(addProjectsImg);
  addProjectsBtn.append(addProjectsTxt);
  return addProjectsBtn;
}

function clearProjectForm() {
  const projectForm = document.querySelector('.project-form');
  projectForm.style.display = 'none';
}

function addNewProject() {
  clearProjectForm();
  const sideMenu = document.querySelector('.side-menu');
  const projectNameInput = document.querySelector('.project-input');
  const addProjectsBtn = document.querySelector('.new-project');
  const newProject = document.createElement('div');
  const newProjectTxt = document.createElement('text');
  const newProjectImg = document.createElement('img');
  newProjectTxt.textContent = projectNameInput.value; 
  newProjectImg.src = list;
  newProject.classList.add('side-menu-btn');
  newProject.classList.add('project');
  newProject.append(newProjectImg);
  newProject.append(newProjectTxt);
  newProject.addEventListener('click', loadProject);
  sideMenu.insertBefore(newProject, addProjectsBtn);
  projectNameInput.value = ''; 
  showProjectBtn();
}

function cancelProject() {
  clearProjectForm();
  const projectNameInput = document.querySelector('.project-input');
  projectNameInput.value = ''; 
  showProjectBtn();
}

function showProjectForm() {
  const projectForm = document.querySelector('.project-form');
  projectForm.style.display = 'block';
  const addBtn = document.querySelector('.add-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  addBtn.addEventListener('click', addNewProject);
  cancelBtn.addEventListener('click', cancelProject);
}

function addProjectForm() {
  const container = document.createElement('div');
  container.classList.add('project-form');
  const input = document.createElement('input');
  const addCancel = document.createElement('div');
  const addBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  cancelBtn.textContent = 'Cancel';
  addBtn.classList.add('add-btn');
  cancelBtn.classList.add('cancel-btn');
  input.type = 'text';
  input.id = 'project-name';
  input.name = 'project-name';
  input.minlength = 1;
  input.classList.add('project-input');
  addCancel.classList.add('add-cancel');
  addCancel.append(addBtn);
  addCancel.append(cancelBtn);
  container.append(input);
  container.append(addCancel);
  return container;
}

export { addProjectBtn };
export { addProjectForm };
export { clearProjectBtn };
export { showProjectBtn };
export { clearProjectForm };
export { showProjectForm };
export { loadProject };