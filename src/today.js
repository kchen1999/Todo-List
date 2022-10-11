function loadToday() {
    const container = document.querySelector('.container');
    const mainHeader = document.createElement('p');
    mainHeader.textContent = "Today";
    mainHeader.classList.add('main-header');
    container.append(mainHeader);
}

export {loadToday};