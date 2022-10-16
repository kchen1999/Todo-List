import inbox from './inbox.png';
import calendar from './calendar-today.png';
import plus from './plus.png';
import { loadWeek } from './week';
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

  const weekBtn = document.createElement('div');
  const weekTxt = document.createElement('p');

  const todayBtn = document.createElement('div');
  const todayTxt = document.createElement('p');

  const projectsHeader = document.createElement('div');
  const projectsTxt = document.createElement('p');

  const weekImg = document.createElement('img');
  const todayImg = document.createElement('img');

  weekImg.src = inbox;
  todayImg.src = calendar;

  weekTxt.textContent = 'This Week';
  todayTxt.textContent = 'Today';
  projectsTxt.textContent = 'Projects';

  weekBtn.classList.add('side-menu-btn');
  weekBtn.classList.add('side-btn');
  todayBtn.classList.add('side-menu-btn');
  todayBtn.classList.add('side-btn');
  projectsHeader.classList.add('projects-header');

  weekBtn.append(weekImg);
  weekBtn.append(weekTxt);

  todayBtn.append(todayImg);
  todayBtn.append(todayTxt);

  projectsHeader.append(projectsTxt);

  sideMenu.append(weekBtn);
  sideMenu.append(todayBtn);
  sideMenu.append(projectsHeader);

  const newProjectBtn = addProjectBtn();
  sideMenu.append(newProjectBtn);

  const newProjectForm = addProjectForm();
  newProjectForm.style.display = 'none';
  sideMenu.append(newProjectForm);

  weekBtn.addEventListener('click', () => {
    if (weekBtn.classList.contains('active')) {
      return;
    }
    clearContainer();
    loadWeek();
    setActiveBtn(weekBtn);
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
