import list from './format-list-bulleted.png';
import plus from './plus.png';

const toDo = (title, description, dueDate, priority) => {
    //const title = title;
    //const description = description;
    //const dueDate = dueDate;
    //const priority = priority; 

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority; 

    const setTitle = (title) => title = title; 
    const setDescription = (description) => description = description; 
    const setDueDate = (dueDate) => dueDate = dueDate; 
    const setPriority = (priority) => priority = priority; 

    return {getTitle, getDescription, getDueDate, getPriority, setTitle, setDescription, setDueDate, setPriority};
};

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
    addProjectsTxt.textContent = "New Project";
    addProjectsBtn.classList.add('side-menu-btn');
    addProjectsBtn.append(addProjectsImg);
    addProjectsBtn.append(addProjectsTxt);
    return addProjectsBtn; 
}

function showProjectForm() {
    const projectForm = document.querySelector('.project-form'); 
    projectForm.style.display = 'block';
}

function clearProjectForm() {
    const projectForm = document.querySelector('.project-form'); 
    projectForm.style.display = 'none';
}

function addProjectForm() {
    const container = document.createElement('div'); 
    container.classList.add('project-form'); 
    const form = document.createElement('form'); 
    const input = document.createElement('input'); 
    const addCancel = document.createElement('div'); 
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel"; 
    addBtn.classList.add('add-btn');
    cancelBtn.classList.add('cancel-btn');
    input.type = 'text';
    input.classList.add('project-input');
    addCancel.classList.add('add-cancel');
    addCancel.append(addBtn);
    addCancel.append(cancelBtn);  
    form.append(input);  
    container.append(form); 
    container.append(addCancel);
    return container; 
}


export {addProjectBtn}; 
export {addProjectForm};
export {clearProjectBtn};
export {showProjectBtn}
export {clearProjectForm};
export {showProjectForm}
