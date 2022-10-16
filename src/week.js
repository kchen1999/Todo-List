function loadWeek() {
  const container = document.querySelector('.container');
  const mainHeader = document.createElement('p');
  mainHeader.textContent = 'This Week';
  mainHeader.classList.add('main-header');
  container.append(mainHeader);
}

export { loadWeek };
