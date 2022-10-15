import inbox from './inbox.png';
import calendar from './calendar-today.png';
import plus from './plus.png';
import { loadInbox } from './inbox';
import { loadToday } from './today';
import {
  addProjectBtn, addProjectForm, clearProjectBtn, showProjectBtn, showProjectForm, clearProjectForm, addNewProject, loadProject
} from './projects';

export { loadSideMenu };

function setActiveBtn(btn) {
  const btns = document.querySelectorAll('.side-menu-btn');
  [...btns].forEach((button) => {
    if (button.classList.contains('active')) {
      button.classList.remove('active');
    }
  });
  btn.classList.add('active');
}

function clearContainer() {
  const container = document.querySelector('.container');
  container.replaceChildren();
}

function loadSideMenu() {
  const sideMenu = document.createElement('div');
  sideMenu.classList.add('side-menu');

  const inboxBtn = document.createElement('div');
  const inboxTxt = document.createElement('p');

  const todayBtn = document.createElement('div');
  const todayTxt = document.createElement('p');

  const projectsHeader = document.createElement('div');
  const projectsTxt = document.createElement('p');

  const inboxImg = document.createElement('img');
  const todayImg = document.createElement('img');

  inboxImg.src = inbox;
  todayImg.src = calendar;

  inboxTxt.textContent = 'Inbox';
  todayTxt.textContent = 'Today';
  projectsTxt.textContent = 'Projects';

  inboxBtn.classList.add('side-menu-btn');
  todayBtn.classList.add('side-menu-btn');
  projectsHeader.classList.add('projects-header');

  inboxBtn.append(inboxImg);
  inboxBtn.append(inboxTxt);

  todayBtn.append(todayImg);
  todayBtn.append(todayTxt);

  projectsHeader.append(projectsTxt);

  sideMenu.append(inboxBtn);
  sideMenu.append(todayBtn);
  sideMenu.append(projectsHeader);

  const newProjectBtn = addProjectBtn();
  sideMenu.append(newProjectBtn);

  const newProjectForm = addProjectForm();
  newProjectForm.style.display = 'none';
  sideMenu.append(newProjectForm);

  inboxBtn.addEventListener('click', () => {
    if (inboxBtn.classList.contains('active')) {
      return;
    }
    clearContainer();
    loadInbox();
    setActiveBtn(inboxBtn);
  });

  todayBtn.addEventListener('click', () => {
    if (todayBtn.classList.contains('active')) {
      return;
    }
    clearContainer();
    loadToday();
    setActiveBtn(todayBtn);
  });

  newProjectBtn.addEventListener('click', () => {
    clearProjectBtn();
    showProjectForm();
  });

  return sideMenu;
}

export {clearContainer};
export {setActiveBtn};
